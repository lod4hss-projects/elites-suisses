/* Small D3 chart helpers (D3 v7). */
window.ES = window.ES || {};
ES.charts = {};

const C = {
  men: '#35516c', women: '#c2559f', unknown: '#b9c2cc',
  series: ['#25415d', '#d6002b', '#37b5b8', '#c2559f', '#426f9a', '#e0a100'],
};
ES.colors = C;

function frame(el, { height = 360, margin = { top: 20, right: 20, bottom: 40, left: 52 } } = {}) {
  el.innerHTML = '';
  const width = Math.max(320, el.clientWidth || 800);
  const svg = d3.select(el).append('svg').attr('viewBox', `0 0 ${width} ${height}`).attr('role', 'img');
  const w = width - margin.left - margin.right, h = height - margin.top - margin.bottom;
  const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);
  return { svg, g, w, h, width, height };
}

/* Stacked vertical bars.
   data: [{key, values:{men:n, women:n, unknown:n}}], keys: ['men','women',...], opts.percent */
ES.charts.stacked = function (el, data, keys, opts = {}) {
  const { g, w, h } = frame(el, opts);
  const pct = !!opts.percent;
  const rows = data.map(d => {
    const tot = keys.reduce((s, k) => s + (d.values[k] || 0), 0) || 1;
    const r = { key: d.key, _tot: tot };
    keys.forEach(k => r[k] = pct ? (d.values[k] || 0) / tot * 100 : (d.values[k] || 0));
    return r;
  });
  const x = d3.scaleBand().domain(rows.map(r => r.key)).range([0, w]).padding(0.28);
  const max = pct ? 100 : d3.max(rows, r => keys.reduce((s, k) => s + r[k], 0)) || 1;
  const y = d3.scaleLinear().domain([0, max]).nice().range([h, 0]);
  g.append('g').attr('class', 'grid').call(d3.axisLeft(y).ticks(5).tickSize(-w).tickFormat(''));
  g.append('g').attr('class', 'axis').attr('transform', `translate(0,${h})`).call(d3.axisBottom(x).tickSizeOuter(0));
  g.append('g').attr('class', 'axis').call(d3.axisLeft(y).ticks(5).tickFormat(v => pct ? v + ' %' : ES.fmt(v)));
  const stack = d3.stack().keys(keys)(rows);
  g.selectAll('g.layer').data(stack).join('g').attr('class', 'layer').attr('fill', s => opts.colors?.[s.key] || C[s.key] || C.series[0])
    .selectAll('rect').data(s => s.map(v => Object.assign(v, { k: s.key }))).join('rect')
    .attr('x', v => x(v.data.key)).attr('width', x.bandwidth())
    .attr('y', h).attr('height', 0).attr('rx', 2)
    .on('mousemove', (ev, v) => {
      const r = v.data, lines = keys.map(k => {
        const abs = pct ? Math.round(r[k] * r._tot / 100) : r[k];
        return `${opts.labels?.[k] || k}: <b>${ES.fmt(abs)}</b> (${(abs / r._tot * 100).toFixed(1)} %)`;
      });
      ES.tip.show(`<b>${r.key}</b><br>${lines.join('<br>')}`, ev);
    })
    .on('mouseleave', () => ES.tip.hide())
    .transition().duration(600)
    .attr('y', v => y(v[1])).attr('height', v => Math.max(0, y(v[0]) - y(v[1])));
  if (!pct && opts.totals !== false) {
    g.selectAll('text.tot').data(rows).join('text').attr('class', 'tot')
      .attr('x', r => x(r.key) + x.bandwidth() / 2).attr('y', r => y(keys.reduce((s, k) => s + r[k], 0)) - 6)
      .attr('text-anchor', 'middle').attr('font-size', 11).attr('fill', '#5d6168').text(r => ES.fmt(r._tot));
  }
};

/* Multi-line chart. series: [{name, color, points:[{x, y, tip}]}] */
ES.charts.lines = function (el, series, opts = {}) {
  const { g, w, h } = frame(el, opts);
  const all = series.flatMap(s => s.points);
  const x = d3.scaleLinear().domain(d3.extent(all, p => p.x)).range([0, w]);
  const y = d3.scaleLinear().domain([0, opts.yMax ?? (d3.max(all, p => p.y) || 1)]).nice().range([h, 0]);
  g.append('g').attr('class', 'grid').call(d3.axisLeft(y).ticks(5).tickSize(-w).tickFormat(''));
  g.append('g').attr('class', 'axis').attr('transform', `translate(0,${h})`).call(d3.axisBottom(x).tickFormat(d3.format('d')).ticks(Math.min(10, w / 70)));
  g.append('g').attr('class', 'axis').call(d3.axisLeft(y).ticks(5).tickFormat(opts.yFormat || (v => ES.fmt(v))));
  if (opts.marker) {
    const mx = x(opts.marker.x);
    g.append('line').attr('x1', mx).attr('x2', mx).attr('y1', 0).attr('y2', h).attr('stroke', '#d6002b').attr('stroke-dasharray', '4 4').attr('opacity', .6);
    g.append('text').attr('x', mx + 6).attr('y', 12).attr('font-size', 11).attr('fill', '#d6002b').text(opts.marker.label);
  }
  const line = d3.line().x(p => x(p.x)).y(p => y(p.y)).curve(d3.curveMonotoneX);
  series.forEach(s => {
    const path = g.append('path').datum(s.points).attr('fill', 'none').attr('stroke', s.color).attr('stroke-width', 2.5).attr('d', line);
    const len = path.node().getTotalLength();
    path.attr('stroke-dasharray', `${len} ${len}`).attr('stroke-dashoffset', len).transition().duration(900).attr('stroke-dashoffset', 0);
    g.selectAll(null).data(s.points).join('circle').attr('cx', p => x(p.x)).attr('cy', p => y(p.y)).attr('r', 4)
      .attr('fill', '#fff').attr('stroke', s.color).attr('stroke-width', 2)
      .on('mousemove', (ev, p) => ES.tip.show(`<b>${s.name}</b> · ${p.x}<br>${p.tip ?? p.y}`, ev))
      .on('mouseleave', () => ES.tip.hide());
  });
};

/* Horizontal bars. data: [{label, value, href?}] */
ES.charts.hbar = function (el, data, opts = {}) {
  const rowH = 26;
  const height = data.length * rowH + 30;
  const left = Math.min(320, Math.max(120, (el.clientWidth || 800) * 0.36));
  const { g, w, h } = frame(el, { height, margin: { top: 6, right: 56, bottom: 24, left } });
  const y = d3.scaleBand().domain(data.map((d, i) => i)).range([0, h]).padding(0.22);
  const x = d3.scaleLinear().domain([0, d3.max(data, d => d.value) || 1]).nice().range([0, w]);
  g.append('g').attr('class', 'grid').attr('transform', `translate(0,${h})`).call(d3.axisBottom(x).ticks(5).tickSize(-h).tickFormat(''));
  g.append('g').attr('class', 'axis').attr('transform', `translate(0,${h})`).call(d3.axisBottom(x).ticks(5).tickFormat(v => ES.fmt(v)));
  const maxChars = Math.floor(left / 6.6);
  g.selectAll('text.lbl').data(data).join('text').attr('class', 'lbl')
    .attr('x', -8).attr('y', (d, i) => y(i) + y.bandwidth() / 2).attr('dy', '.35em').attr('text-anchor', 'end')
    .attr('font-size', 12.5).attr('fill', '#1b1b1b')
    .text(d => d.label.length > maxChars ? d.label.slice(0, maxChars - 1) + '…' : d.label)
    .append('title').text(d => d.label);
  const bars = g.selectAll('rect').data(data).join('rect')
    .attr('x', 0).attr('y', (d, i) => y(i)).attr('height', y.bandwidth()).attr('rx', 3)
    .attr('fill', (d, i) => opts.color || (i < 3 ? '#25415d' : '#426f9a')).attr('width', 0)
    .style('cursor', d => d.href ? 'pointer' : 'default')
    .on('click', (ev, d) => { if (d.href) location.href = d.href; })
    .on('mousemove', (ev, d) => ES.tip.show(`<b>${ES.esc(d.label)}</b><br>${ES.fmt(d.value)}`, ev))
    .on('mouseleave', () => ES.tip.hide());
  bars.transition().duration(600).attr('width', d => x(d.value));
  g.selectAll('text.val').data(data).join('text').attr('class', 'val')
    .attr('x', d => x(d.value) + 6).attr('y', (d, i) => y(i) + y.bandwidth() / 2).attr('dy', '.35em')
    .attr('font-size', 11.5).attr('fill', '#5d6168').text(d => ES.fmt(d.value));
};

/* Redraw on resize (debounced). */
ES.onResize = function (fn) {
  let last = innerWidth;
  addEventListener('resize', ES.debounce(() => { if (Math.abs(innerWidth - last) > 30) { last = innerWidth; fn(); } }, 250));
};
