/* Shared core: SPARQL client, helpers, header & footer. */
window.ES = window.ES || {};

/* ---------- SPARQL ---------- */
ES.ENDPOINT = 'https://swiss-elites.lod4hss.cloud/wisski/endpoint/default_wisski_distillery_adapter';
ES.GRAPH = 'https://swiss-elites.lod4hss.cloud/resource/';
ES.NS = 'https://elites-suisses.lod4hss.org/resource/';

ES.PREFIXES = `PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX sdh: <https://sdhss.org/ontology/core/>
PREFIX sdh-short: <https://sdhss.org/ontology/shortcuts/>
PREFIX sdh-slc: <https://sdhss.org/ontology/social-life-core/>
PREFIX sdh-sls: <https://sdhss.org/ontology/social-life-specific/>
PREFIX es: <https://elites-suisses.lod4hss.org/resource/>
`;

/* Build a full query: prefixes + FROM clause inserted before the first WHERE. */
ES.q = function (body) {
  return ES.PREFIXES + body.trim().replace(/\bWHERE\s*\{/i, `FROM <${ES.GRAPH}>\nWHERE {`);
};

const _cache = new Map();
ES.sparql = async function (body) {
  const query = ES.q(body);
  if (_cache.has(query)) return _cache.get(query);
  const p = fetch(ES.ENDPOINT + '?query=' + encodeURIComponent(query), {
    headers: { Accept: 'application/sparql-results+json' },
  }).then(r => {
    if (!r.ok) throw new Error('HTTP ' + r.status);
    return r.json();
  }).then(j => j.results.bindings.map(b => {
    const o = {};
    for (const k in b) o[k] = b[k].value;
    return o;
  }));
  _cache.set(query, p);
  p.catch(() => _cache.delete(query));
  return p;
};
ES.queryUrl = (body) => ES.ENDPOINT + '?query=' + encodeURIComponent(ES.q(body));

/* Escape a user string for use inside a SPARQL "..." literal. */
ES.lit = (s) => String(s).replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/[\n\r]/g, ' ');

/* ---------- helpers ---------- */
ES.esc = (s) => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
ES.localId = (uri) => String(uri || '').replace(ES.NS, '');
ES.param = (k) => new URLSearchParams(location.search).get(k);
ES.href = (path) => path + (path.includes('?') ? '&' : '?') + 'lang=' + ES.lang;
ES.personLink = (uri, label) => `<a href="${ES.href('person.html?id=' + encodeURIComponent(ES.localId(uri)))}">${ES.esc(label)}</a>`;
ES.orgLink = (uri, label) => `<a href="${ES.href('organisation.html?id=' + encodeURIComponent(ES.localId(uri)))}">${ES.esc(label)}</a>`;
ES.typeNo = (uri) => { const m = String(uri || '').match(/g-ty(\d+)$/); return m ? m[1] : null; };
ES.typeLabel = (uri) => { const n = ES.typeNo(uri); return n ? ES.t('type.' + n) : ES.t('type.none'); };
ES.isWoman = (g) => /gen1$/.test(g || '');
ES.genderPill = (g) => !g ? '' : ES.isWoman(g)
  ? `<span class="pill w">${ES.t('common.female')}</span>`
  : `<span class="pill m">${ES.t('common.male')}</span>`;
ES.year = (v) => (v && v !== '0') ? v : '';
ES.life = (b, d) => { b = ES.year(b); d = ES.year(d); return b || d ? `${b || '?'}${d ? '–' + d : (b ? '–' : '')}` : ''; };
ES.unilUrl = (uri) => { const m = ES.localId(uri).match(/^p(\d+)$/); return m ? `https://elitessuisses.unil.ch/p/${m[1]}` : null; };
ES.debounce = (fn, ms = 300) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };

ES.loading = (el) => { el.innerHTML = `<div class="status"><span class="spinner"></span>${ES.t('common.loading')}</div>`; };
ES.fail = (el, err) => { console.error(err); el.innerHTML = `<div class="status error">${ES.t('common.error')}</div>`; };

/* "SPARQL query" disclosure under a chart / table */
ES.queryBox = function (el, body) {
  if (!el) return;
  el.innerHTML = `<details class="sparql"><summary>${ES.t('common.showQuery')}</summary>
    <pre><code>${ES.esc(ES.q(body))}</code></pre>
    <a class="btn btn-sm" href="${ES.queryUrl(body)}" target="_blank" rel="noopener">${ES.t('common.runQuery')} ↗</a></details>`;
};

/* tooltip */
ES.tip = (() => {
  let el;
  const ensure = () => { if (!el) { el = document.createElement('div'); el.className = 'tooltip'; document.body.appendChild(el); } return el; };
  return {
    show(html, ev) { const t = ensure(); t.innerHTML = html; t.style.opacity = 1; this.move(ev); },
    move(ev) { if (!el) return; const x = Math.min(ev.clientX + 14, innerWidth - el.offsetWidth - 8); el.style.left = x + 'px'; el.style.top = (ev.clientY + 14) + 'px'; },
    hide() { if (el) el.style.opacity = 0; },
  };
})();

/* ---------- layout ---------- */
const NAV = [
  ['index.html', 'nav.home'],
  ['description.html', 'nav.description'],
  ['visualisations.html', 'nav.viz'],
  ['persons.html', 'nav.persons'],
  ['organisations.html', 'nav.orgs'],
];

ES.renderHeader = function () {
  const here = (location.pathname.split('/').pop() || 'index.html');
  const section = document.body.dataset.section || here;
  const h = document.createElement('header');
  h.className = 'site-header';
  h.innerHTML = `
  <a class="skip-link" href="#main" data-i18n="nav.skip"></a>
  <div class="container header-inner">
    <a class="brand" href="index.html" data-nav>
      <span class="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke-width="1.6">
          <path d="M5 17 L12 6 L19 15" stroke="#94d2e1"/><path d="M12 6 L12 19" stroke="#e193d2"/>
          <circle cx="5" cy="17" r="2.3" fill="#fff" stroke="none"/><circle cx="12" cy="6" r="2.3" fill="#e193d2" stroke="none"/>
          <circle cx="19" cy="15" r="2.3" fill="#94d2e1" stroke="none"/><circle cx="12" cy="19" r="1.8" fill="#fff" stroke="none"/>
        </svg>
      </span>
      <span class="brand-text"><span class="brand-title" data-i18n="site.title"></span><span class="brand-sub">OBELIS · LOD</span></span>
    </a>
    <button class="nav-toggle" aria-expanded="false" aria-controls="main-nav"><span data-i18n="nav.menu"></span></button>
    <nav class="main-nav" id="main-nav" aria-label="Main">
      ${NAV.map(([href, key]) => `<a href="${href}" data-nav data-i18n="${key}"${href === section ? ' aria-current="page"' : ''}></a>`).join('')}
      <div class="lang-switch" role="group" aria-label="Language">
        ${ES.LANGS.map(l => `<button type="button" data-lang="${l}" aria-pressed="${l === ES.lang}">${l.toUpperCase()}</button>`).join('')}
      </div>
    </nav>
  </div>`;
  document.body.prepend(h);
  h.querySelectorAll('.lang-switch button').forEach(b => b.addEventListener('click', () => ES.setLang(b.dataset.lang)));
  const tog = h.querySelector('.nav-toggle'), nav = h.querySelector('.main-nav');
  tog.addEventListener('click', () => { const o = nav.classList.toggle('open'); tog.setAttribute('aria-expanded', o); });
};

ES.renderFooter = function () {
  const f = document.createElement('div');
  f.innerHTML = `
  <section class="partners" aria-labelledby="coop-label">
    <div class="container">
      <span class="eyebrow" id="coop-label" data-i18n="footer.coop"></span>
      <div class="partner-logos">
        <a href="https://www.unil.ch/obelis" target="_blank" rel="noopener" title="UNIL · OBELIS – Swiss Elite Observatory">
          <img src="assets/img/logos/unil-obelis.png" alt="UNIL – OBELIS, The Swiss Elite Observatory"></a>
        <a href="https://www.epfl.ch/schools/cdh/fr/" target="_blank" rel="noopener" title="EPFL – Collège des Humanités">
          <img src="assets/img/logos/epfl-cdh.png" alt="EPFL – Collège des Humanités"></a>
        <a href="https://dhbern.github.io/" target="_blank" rel="noopener" title="Digital Humanities Center, University of Bern">
          <img src="assets/img/logos/dh-unibe.png" alt="Digital Humanities, University of Bern"></a>
        <a class="dsl" href="https://www.dsl.unibe.ch/" target="_blank" rel="noopener" title="Data Science Lab, University of Bern">
          <img src="assets/img/logos/unibe.svg" alt="Universität Bern"><span>Data Science<br>Lab</span></a>
      </div>
    </div>
  </section>
  <footer class="site-footer">
    <div class="container footer-main">
      <div>
        <h4 data-i18n="site.title"></h4>
        <p data-i18n="footer.about"></p>
      </div>
      <div>
        <h4 data-i18n="footer.site"></h4>
        <ul>${NAV.map(([href, key]) => `<li><a href="${href}" data-nav data-i18n="${key}"></a></li>`).join('')}</ul>
      </div>
      <div>
        <h4 data-i18n="footer.data"></h4>
        <ul>
          <li><a href="${ES.ENDPOINT}" target="_blank" rel="noopener" data-i18n="footer.endpoint"></a></li>
          <li><a href="https://elitessuisses.unil.ch" target="_blank" rel="noopener" data-i18n="footer.original"></a></li>
          <li><a href="https://ontome.net/project/269" target="_blank" rel="noopener" data-i18n="footer.ontome"></a></li>
          <li><a href="https://github.com/lod4hss-projects/elites-suisses" target="_blank" rel="noopener" data-i18n="footer.repo"></a></li>
        </ul>
      </div>
    </div>
    <div class="container footer-bottom">
      <span data-i18n="footer.licence"></span>
      <span>LOD4HSS · LESSH — <span data-i18n="footer.experimental"></span></span>
    </div>
  </footer>`;
  document.body.append(...f.children);
};

/* keep ?lang on internal navigation links */
ES.syncNavLinks = function () {
  document.querySelectorAll('a[data-nav]').forEach(a => {
    const base = a.getAttribute('href').split('?')[0];
    a.setAttribute('href', ES.href(base));
  });
};

ES.init = function (pageInit) {
  ES.renderHeader();
  ES.renderFooter();
  ES.applyI18n();
  ES.syncNavLinks();
  document.addEventListener('es:lang', ES.syncNavLinks);
  if (pageInit) pageInit();
};
