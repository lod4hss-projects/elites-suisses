# Elites Suisses

This website is part of the LESSH project


[Experimental website](https://lod4hss-projects.github.io/elites-suisses/)




## Public website (branch `public`)

The `public` branch holds the public website, served by GitHub Pages from `/docs`
(Settings → Pages → Branch: `public`, folder: `/docs`; custom domain in `docs/CNAME`).

* Static HTML/CSS/JS, no build step. All data is queried live from the SPARQL endpoint
  `https://swiss-elites.lod4hss.cloud/wisski/endpoint/default_wisski_distillery_adapter`
  (graph `https://swiss-elites.lod4hss.cloud/resource/`).
* Tri-lingual (EN / FR / DE): texts in `docs/assets/js/i18n.js`; language via `?lang=` or the header switch.
* Pages: `index.html` (home), `description.html`, `visualisations.html`, `persons.html` / `person.html?id=p…`,
  `organisations.html` / `organisation.html?id=g…`.
* `404.html` dereferences resource URIs (`/resource/p…`, `/resource/g…`) to the person / organisation pages.
* Shared code: `docs/assets/js/core.js` (SPARQL client, header/footer), `docs/assets/js/charts.js` (D3 charts),
  `docs/assets/css/site.css` (design tokens).

Local preview:

```bash
cd docs && python -m http.server 9999
```
