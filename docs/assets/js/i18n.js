/* Tri-lingual dictionaries (EN / FR / DE).
   Static text uses data-i18n="key" (textContent) or data-i18n-html="key" (innerHTML)
   and data-i18n-attr="placeholder:key;title:key". Dynamic code uses ES.t(key, vars). */
window.ES = window.ES || {};

ES.LANGS = ['en', 'fr', 'de'];

ES.dict = {
  /* ------------------------------------------------------------------ EN */
  en: {
    'site.title': 'Linked Elites Suisses',
    'site.sub': 'Swiss elites database · Linked Open Data',
    'nav.home': 'Home', 'nav.description': 'Description', 'nav.viz': 'Visualisations',
    'nav.persons': 'Persons', 'nav.orgs': 'Organisations', 'nav.menu': 'Menu', 'nav.skip': 'Skip to main content',

    'common.loading': 'Querying the knowledge graph…',
    'common.error': 'The SPARQL endpoint could not be reached. Please try again later.',
    'common.noresults': 'No results.',
    'common.prev': '← Previous', 'common.next': 'Next →',
    'common.page': 'Page {p} of {n}', 'common.results': '{n} results',
    'common.showQuery': 'SPARQL query', 'common.runQuery': 'Open in endpoint',
    'common.men': 'Men', 'common.women': 'Women', 'common.unknown': 'Unknown',
    'common.male': 'male', 'common.female': 'female',
    'common.all': 'All', 'common.absolute': 'Absolute', 'common.percent': 'Percent',
    'common.persons': 'persons', 'common.search': 'Search',
    'common.kgDerived': 'Computed live from the knowledge graph.',

    'home.eyebrow': 'Knowledge graph · 1890–2020',
    'home.title': 'Linked Elites Suisses',
    'home.lead': 'Who held power in Switzerland? Explore political, economic, administrative and academic elites from 1890 to today — their careers, education, families and networks — as Linked Open Data, queried live from the SPARQL endpoint.',
    'home.ctaPersons': 'Browse persons', 'home.ctaViz': 'Explore visualisations',
    'home.searchPh': 'Search a person, e.g. Comtesse, Kopp, Dreifuss…',
    'kpi.persons': 'Persons', 'kpi.women': 'Women', 'kpi.orgs': 'Organisations',
    'kpi.memberships': 'Mandates & memberships', 'kpi.wikidata': 'Linked to Wikidata', 'kpi.education': 'Degrees',
    'home.yearsEyebrow': 'Reference years',
    'home.yearsTitle': 'Elites active at each reference year',
    'home.yearsText': 'Number of persons holding at least one mandate or membership in the given year, split by gender. Derived from the knowledge graph (not the official OBELIS sample definitions).',
    'home.womenShare': '{p} % women',
    'home.exploreEyebrow': 'Explore',
    'home.exploreTitle': 'Ways into the data',
    'home.card1.t': 'Persons', 'home.card1.d': 'Search ~59,000 individuals and open their profiles: mandates, education, family ties.',
    'home.card2.t': 'Organisations', 'home.card2.d': 'Parliaments, governments, companies, associations and universities with their members over time.',
    'home.card3.t': 'Visualisations', 'home.card3.d': 'Composition by gender, generations, birthplaces, education and women in political bodies.',
    'home.card4.t': 'Description', 'home.card4.d': 'How the elites are defined, which sources were used and how the knowledge graph is modelled.',
    'home.lodEyebrow': 'Linked Open Data',
    'home.lodTitle': 'Every number on this site is a live SPARQL query',
    'home.lodText': 'The data are published as a knowledge graph using CIDOC CRM and the SDHSS ontology ecosystem. Every page sends its queries directly to the public endpoint — open the “SPARQL query” box below each chart to reuse them.',

    'desc.eyebrow': 'About the database', 'desc.title': 'Description',
    'desc.lead': 'The Swiss Elites database documents persons who held positions of power in Swiss politics, economy, administration and academia since 1890.',
    'desc.toc.data': 'Data', 'desc.toc.sample': 'Sample', 'desc.toc.lod': 'Knowledge graph',
    'desc.txt0': 'Data',
    'desc.txt1': 'The main source of the <a href="https://www.unil.ch/obelis/en/home.html" target="_blank" rel="noopener">Swiss Elite Observatory (OBELIS)</a> is the database of Swiss elites. This database has more than 40,000 entries about political, economic, administrative and academic elites in the 20th and 21st centuries. Nine reference years, separated by intervals of about 20 years, are taken into account: 1890, 1910, 1937, 1957, 1980, 2000, 2010, 2015 and 2020. The database features biographical information on elites, including social origin, education, career, family relations, military rank and membership in national associations. Only a part of the data is published.',
    'desc.txt2': 'Sample of the database on Swiss elites',
    'desc.txt3': 'One of the main questions of elite research is who belongs to the elite and how elites can be defined. The criterion used in our database is the position or function of power occupied by individuals. Below we give our definitions of political, economic, administrative and academic elites. For more details on the definition of the sample, please consult the <a href="https://elitessuisses.unil.ch/media/DescrEchantillon_12_2020.pdf" target="_blank" rel="noopener">document describing the sample</a> (PDF, in French).',
    'desc.txt4': 'Political elites',
    'desc.txt5': 'The sample of political elites in Switzerland includes the members of the Federal Council, the Federal Parliament, the cantonal governments (of the 26 cantons), the executives of the four largest Swiss cities (Zurich, Bern, Geneva and Lausanne) and the central committees of the main political parties.',
    'desc.txt6': 'Economic elites',
    'desc.txt7': 'The economic elite is composed of two groups. First, the top managers of the 110 largest Swiss firms, including the chair of the board of directors, the CEO and – in certain cases – the delegate of the board, as well as the members of the boards of these firms. Second, the executive committee members of the seven major economic interest groups: the Swiss Bankers Association, economiesuisse (formerly the Swiss Trade and Industry Association), the Swiss Employers’ Association, the Swiss Trade Association, the Swiss Farmers’ Union, the Swiss Federation of Trade Unions and the Christian trade union federation (later Travail.Suisse).',
    'desc.txt8': 'Administrative elites',
    'desc.txt9': 'For the administrative elites we retained the Chancellors and Vice-Chancellors of the Confederation, the Secretaries General of the federal departments and their deputies, all directors of federal offices, the members of the governing board of the Swiss National Bank and the judges of the Federal Supreme Court. These groups were completed with all members of the extra-parliamentary commissions — administrative meeting places bringing together members of the political, administrative, economic and scientific fields.',
    'desc.txt10': 'Academic elites',
    'desc.txt11': 'The sample of academic elites includes all full and associate professors of the Swiss universities (Basel, Bern, Fribourg, Geneva, Lausanne, Lucerne, Neuchâtel, St. Gallen, Italian Switzerland and Zurich) and of the two Federal Institutes of Technology in Zurich and Lausanne until 2000, and a smaller sample for the more recent period.',
    'desc.txt12': 'Side projects',
    'desc.txt13': 'In addition, the national elites in these four spheres are complemented by side projects covering, for example, the local elites of the main Swiss city-regions (Basel, Geneva and Zurich, see <a href="https://wp.unil.ch/sinergia-elites" target="_blank" rel="noopener">the dedicated website</a>), the members of Geneva philanthropic associations at the beginning of the 20th century, and the political elites of certain Swiss cities.',
    'desc.lodTitle': 'The knowledge graph',
    'desc.lod1': 'The relational database of OBELIS has been transformed into an RDF knowledge graph within the LOD4HSS / LESSH project. The mapping (R2RML) relies on application profiles defined in <a href="https://ontome.net/project/269" target="_blank" rel="noopener">OntoME</a> that refer to <a href="https://cidoc-crm.org" target="_blank" rel="noopener">CIDOC CRM</a> and the <a href="https://sdhss.org" target="_blank" rel="noopener">SDHSS</a> ontologies.',
    'desc.lod2': 'Main entities: persons (<code>crm:E21</code>) with names, birth and death years and gender; memberships (<code>sdh-slc:C5</code>) linking persons to organisations (<code>crm:E74</code>) with start and end years; education records (<code>sdh-sls:C7</code>) with degree, discipline and institution; births (<code>crm:E67</code>) with birthplace and parents; marriages (<code>sdh-slc:C3</code>). About 10,600 persons are linked to Wikidata.',
    'desc.endpoint': 'SPARQL endpoint', 'desc.graph': 'Named graph', 'desc.ns': 'URI namespace', 'desc.repo': 'Source code',
    'desc.example': 'Example: members of the Federal Council',
    'desc.legacy': 'This site is an experimental public interface of the knowledge graph. The authoritative database remains <a href="https://elitessuisses.unil.ch" target="_blank" rel="noopener">elitessuisses.unil.ch</a>.',

    'viz.eyebrow': 'Live from the knowledge graph', 'viz.title': 'Visualisations',
    'viz.lead': 'Each chart below is computed in your browser from a SPARQL query on the Swiss Elites knowledge graph.',
    'viz.comp.t': 'Composition of the elites by reference year',
    'viz.comp.d': 'Persons holding at least one mandate or membership in the reference year, by gender.',
    'viz.gen.t': 'Generations',
    'viz.gen.d': 'Persons by birth cohort (25-year generations) and gender.',
    'viz.map.t': 'Birthplaces',
    'viz.map.d': 'Where were the elites born? Circle size is proportional to the number of persons born in the place. Use the slider to filter by generation.',
    'viz.map.allGen': 'All generations',
    'viz.women.t': 'Women in political bodies',
    'viz.women.d': 'Share of women among the members of federal and cantonal bodies in each reference year. Women gained the federal right to vote and stand for election in 1971.',
    'viz.edu.t': 'Education',
    'viz.edu.d': 'Most frequent disciplines and institutions of the degrees recorded in the database.',
    'viz.edu.disc': 'Disciplines', 'viz.edu.inst': 'Institutions', 'viz.edu.degree': 'Degree',
    'viz.orgs.t': 'Largest organisations',
    'viz.orgs.d': 'Organisations with the highest number of recorded mandates and memberships.',
    'viz.note.coverage': 'Coverage varies by body and period; cantonal parliaments are only partially documented.',

    'persons.eyebrow': 'Index', 'persons.title': 'Persons',
    'persons.lead': 'Search all persons of the knowledge graph by name. Results are queried live.',
    'persons.searchPh': 'Name contains…', 'persons.gender': 'Gender', 'persons.from': 'Born from', 'persons.to': 'to',
    'persons.sort': 'Sort', 'persons.sortName': 'Name', 'persons.sortBirth': 'Birth year', 'persons.sortMand': 'Mandates',
    'col.name': 'Name', 'col.life': 'Life dates', 'col.gender': 'Gender', 'col.mandates': 'Mandates', 'col.links': 'Links',
    'col.org': 'Organisation', 'col.type': 'Type', 'col.members': 'Memberships', 'col.from': 'From', 'col.to': 'To',
    'col.year': 'Year', 'col.degree': 'Degree', 'col.discipline': 'Discipline', 'col.institution': 'Institution',

    'person.eyebrow': 'Person', 'person.facts': 'Key facts', 'person.born': 'Born', 'person.died': 'Died',
    'person.gender': 'Gender', 'person.birthplace': 'Birthplace', 'person.uri': 'URI',
    'person.mandates': 'Mandates & memberships', 'person.timeline': 'Career timeline',
    'person.education': 'Education', 'person.family': 'Family', 'person.father': 'Father', 'person.mother': 'Mother',
    'person.children': 'Children', 'person.spouses': 'Spouse(s)', 'person.links': 'External links',
    'person.unil': 'Record in the UNIL database', 'person.wikidata': 'Wikidata',
    'person.notfound': 'This person could not be found in the knowledge graph.',
    'person.none': 'No data recorded.',

    'orgs.eyebrow': 'Index', 'orgs.title': 'Organisations',
    'orgs.lead': 'Parliaments, governments, companies, associations and universities, ranked by number of recorded mandates.',
    'orgs.searchPh': 'Organisation name contains…', 'orgs.type': 'Type',
    'org.eyebrow': 'Organisation', 'org.members': 'Members', 'org.over': 'Members active per year',
    'org.notfound': 'This organisation could not be found in the knowledge graph.',
    'org.filter': 'Filter members…',

    'type.1': 'Cantonal government', 'type.2': 'Canton', 'type.3': 'Cantonal parliament', 'type.4': 'Federal Parliament',
    'type.5': 'Federal Council', 'type.6': 'University / school', 'type.7': 'Faculty / department', 'type.none': 'Other organisation',


    'persons.f.active': 'Active in {y}', 'persons.f.born': 'Born in {p}', 'persons.f.disc': 'Discipline: {d}',
    'persons.f.deg': 'Degree: {d}', 'persons.f.inst': 'Studied at: {i}', 'persons.f.edu': 'With a recorded degree',
    'persons.f.wd': 'Linked to Wikidata', 'persons.f.remove': 'Remove filter',
    'viz.hint.bars': 'Click a bar segment to list the corresponding persons.',
    'viz.hint.comp': 'Click a bar segment to list the persons; click a gender in the legend to show or hide it.',
    'viz.hint.points': 'Click a point to list the corresponding persons.',
    'viz.hint.map': 'Click a circle to list the persons born there.',
    'viz.hint.orgs': 'Click a bar to open the organisation.',
    'home.kpiHint': 'Click a figure to open the corresponding list.',
    'home.yearsAll': 'All', 'home.yearsWomen': 'Women only',
    'home.nlEyebrow': 'Natural-language access · Beta',
    'home.nlTitle': 'Query the database in natural language',
    'home.nlText': 'Ask questions about the Swiss elites in your own words — no SPARQL needed. Swiss Elites Chat is hosted by the Data Science Lab of the University of Bern.',
    'home.nlCta': 'Open Swiss Elites Chat', 'home.nlLogin': 'Login required',
    'desc.docLod': 'Documentation of the LODification →', 'desc.docSlides': 'Slides: LOD for research (PDF, 11 MB)',
    'persons.f.org': 'Member of {o}', 'org.hint': 'Click a point to list the members active in that year.',
    'footer.coop': 'A cooperation of',
    'footer.about': 'Linked Elites Suisses is a Linked Open Data interface to the Swiss Elites database of the Swiss Elite Observatory (OBELIS), University of Lausanne, developed in cooperation with the EPFL College of Humanities, the Digital Humanities Center and the Data Science Lab of the University of Bern.',
    'footer.site': 'Site', 'footer.data': 'Data',
    'footer.endpoint': 'SPARQL endpoint', 'footer.original': 'Original database (UNIL)', 'footer.repo': 'GitHub repository', 'footer.ontome': 'Ontology profiles (OntoME)',
    'footer.licence': 'Code: MIT licence. Data: © OBELIS, University of Lausanne.',
    'footer.experimental': 'Experimental version',
  },

  /* ------------------------------------------------------------------ FR */
  fr: {
    'site.title': 'Linked Elites Suisses',
    'site.sub': 'Base de données des élites suisses · Linked Open Data',
    'nav.home': 'Accueil', 'nav.description': 'Description', 'nav.viz': 'Visualisations',
    'nav.persons': 'Personnes', 'nav.orgs': 'Organisations', 'nav.menu': 'Menu', 'nav.skip': 'Aller au contenu',

    'common.loading': 'Interrogation du graphe de connaissances…',
    'common.error': 'Le point d’accès SPARQL est injoignable. Veuillez réessayer plus tard.',
    'common.noresults': 'Aucun résultat.',
    'common.prev': '← Précédent', 'common.next': 'Suivant →',
    'common.page': 'Page {p} sur {n}', 'common.results': '{n} résultats',
    'common.showQuery': 'Requête SPARQL', 'common.runQuery': 'Ouvrir dans le point d’accès',
    'common.men': 'Hommes', 'common.women': 'Femmes', 'common.unknown': 'Inconnu',
    'common.male': 'homme', 'common.female': 'femme',
    'common.all': 'Tous', 'common.absolute': 'Absolu', 'common.percent': 'Pourcentage',
    'common.persons': 'personnes', 'common.search': 'Rechercher',
    'common.kgDerived': 'Calculé en direct à partir du graphe de connaissances.',

    'home.eyebrow': 'Graphe de connaissances · 1890–2020',
    'home.title': 'Linked Elites Suisses',
    'home.lead': 'Qui a détenu le pouvoir en Suisse ? Explorez les élites politiques, économiques, administratives et académiques de 1890 à aujourd’hui — carrières, formations, familles et réseaux — en Linked Open Data, interrogées en direct sur le point d’accès SPARQL.',
    'home.ctaPersons': 'Parcourir les personnes', 'home.ctaViz': 'Voir les visualisations',
    'home.searchPh': 'Rechercher une personne, p. ex. Comtesse, Kopp, Dreifuss…',
    'kpi.persons': 'Personnes', 'kpi.women': 'Femmes', 'kpi.orgs': 'Organisations',
    'kpi.memberships': 'Mandats et affiliations', 'kpi.wikidata': 'Liées à Wikidata', 'kpi.education': 'Diplômes',
    'home.yearsEyebrow': 'Années de référence',
    'home.yearsTitle': 'Élites actives par année de référence',
    'home.yearsText': 'Nombre de personnes occupant au moins un mandat ou une affiliation durant l’année indiquée, par sexe. Dérivé du graphe de connaissances (et non des définitions officielles de l’échantillon OBELIS).',
    'home.womenShare': '{p} % de femmes',
    'home.exploreEyebrow': 'Explorer',
    'home.exploreTitle': 'Accès aux données',
    'home.card1.t': 'Personnes', 'home.card1.d': 'Recherchez parmi ~59 000 individus et ouvrez leurs fiches : mandats, formation, liens familiaux.',
    'home.card2.t': 'Organisations', 'home.card2.d': 'Parlements, gouvernements, entreprises, associations et universités avec leurs membres au fil du temps.',
    'home.card3.t': 'Visualisations', 'home.card3.d': 'Composition par sexe, générations, lieux de naissance, formation et femmes dans les organes politiques.',
    'home.card4.t': 'Description', 'home.card4.d': 'Définition des élites, sources utilisées et modélisation du graphe de connaissances.',
    'home.lodEyebrow': 'Linked Open Data',
    'home.lodTitle': 'Chaque chiffre de ce site est une requête SPARQL en direct',
    'home.lodText': 'Les données sont publiées sous forme de graphe de connaissances fondé sur CIDOC CRM et les ontologies SDHSS. Chaque page envoie ses requêtes directement au point d’accès public — ouvrez l’encadré « Requête SPARQL » sous chaque graphique pour les réutiliser.',

    'desc.eyebrow': 'À propos de la base', 'desc.title': 'Description',
    'desc.lead': 'La base de données des élites suisses documente les personnes ayant occupé des positions de pouvoir dans la politique, l’économie, l’administration et le monde académique suisses depuis 1890.',
    'desc.toc.data': 'Base de données', 'desc.toc.sample': 'Échantillon', 'desc.toc.lod': 'Graphe de connaissances',
    'desc.txt0': 'Base de données',
    'desc.txt1': 'La principale source de l’<a href="https://www.unil.ch/obelis/home.html" target="_blank" rel="noopener">Observatoire des élites suisses (OBELIS)</a> est la Base de données des élites suisses, qui contient plus de 40 000 entrées sur les élites politiques, économiques, administratives et académiques au 20<sup>e</sup> et au début du 21<sup>e</sup> siècle. Neuf dates de référence sont considérées, avec un intervalle d’environ 20 ans : 1890, 1910, 1937, 1957, 1980, 2000, 2010, 2015 et 2020. La base de données contient des informations biographiques sur les élites, incluant leur origine sociale, leur formation, leur carrière, leurs relations familiales, leur grade militaire ou encore leur appartenance à certains lieux de sociabilité d’envergure nationale. Seule une partie de ces données est publiée.',
    'desc.txt2': 'Échantillon de la Base de données des élites suisses',
    'desc.txt3': 'Une des questions essentielles de la recherche sur les élites renvoie à la question de « qui fait partie de l’élite ? » et à la manière dont celles-ci sont définies. Le critère retenu dans notre base de données est celui de la position ou fonction de pouvoir occupée par ces individus. Nous explicitons ci-dessous notre définition des élites politiques, économiques, administratives et académiques. Pour plus de détails sur la délimitation de l’échantillon, voir le document <a href="https://elitessuisses.unil.ch/media/DescrEchantillon_12_2020.pdf" target="_blank" rel="noopener">Description de l’échantillon</a> (PDF).',
    'desc.txt4': 'Élites politiques',
    'desc.txt5': 'Notre échantillon des élites politiques suisses est composé des membres du Conseil fédéral, du Parlement fédéral, des conseiller·e·s d’État des 26 cantons, des membres des exécutifs des quatre plus grandes villes suisses (Zurich, Berne, Genève et Lausanne) et des membres des comités centraux des principaux partis politiques.',
    'desc.txt6': 'Élites économiques',
    'desc.txt7': 'Les élites économiques sont composées de deux groupes. Nous étudions premièrement les top managers des 110 plus grandes entreprises suisses, ceux-ci incluant le ou la président·e du conseil d’administration, le directeur ou la directrice général·e et, dans certains cas, l’administrateur-délégué. Viennent s’ajouter les membres des conseils d’administration de ces entreprises. Deuxièmement, nous avons collecté des données sur les membres des comités des sept principales associations économiques faîtières : Association suisse des banquiers (ASB), Confédération des syndicats chrétiens (CSCS, puis Travail.Suisse après 2004), Union patronale suisse (UPS), Union suisse des arts et métiers (USAM), economiesuisse (depuis 2000, anciennement Union suisse du commerce et de l’industrie, USCI), Union suisse des paysans (USP) et Union syndicale suisse (USS).',
    'desc.txt8': 'Élites administratives',
    'desc.txt9': 'Au sujet des élites administratives, nous avons retenu : les chancelier·e·s et vice-chancelier·e·s de la Confédération, les secrétaires généraux des départements fédéraux et leurs adjoint·e·s, tous les directeurs et directrices des offices fédéraux, les membres du directoire de la Banque nationale suisse et ceux du Tribunal fédéral. Ces groupes ont été complétés par la prise en compte de l’ensemble des membres des commissions extra-parlementaires. Ces lieux de rencontre administratifs rassemblent les membres des champs politique, administratif, économique et scientifique.',
    'desc.txt10': 'Élites académiques',
    'desc.txt11': 'L’échantillon des élites académiques est composé de l’ensemble des professeur·e·s ordinaires et extraordinaires des universités suisses (Bâle, Berne, Fribourg, Genève, Lausanne, Lucerne, Neuchâtel, Saint-Gall, Suisse italienne et Zurich) ainsi que des deux écoles polytechniques fédérales de Zurich et Lausanne jusqu’en 2000, puis d’un échantillon plus restreint pour la période plus récente.',
    'desc.txt12': 'Projets annexes',
    'desc.txt13': 'Par ailleurs, aux élites nationales de ces quatre sphères viennent s’ajouter différents projets annexes portant par exemple sur les élites locales des principales villes-régions de Suisse (Bâle, Zurich et Genève, voir <a href="https://wp.unil.ch/sinergia-elites" target="_blank" rel="noopener">le site dédié</a>), les membres des associations philanthropiques genevoises au début du 20<sup>e</sup> siècle, ou les élites politiques de certaines villes suisses.',
    'desc.lodTitle': 'Le graphe de connaissances',
    'desc.lod1': 'La base de données relationnelle d’OBELIS a été transformée en graphe de connaissances RDF dans le cadre du projet LOD4HSS / LESSH. Le mapping (R2RML) s’appuie sur des profils d’application définis dans <a href="https://ontome.net/project/269" target="_blank" rel="noopener">OntoME</a> qui se réfèrent à <a href="https://cidoc-crm.org" target="_blank" rel="noopener">CIDOC CRM</a> et aux ontologies <a href="https://sdhss.org" target="_blank" rel="noopener">SDHSS</a>.',
    'desc.lod2': 'Entités principales : personnes (<code>crm:E21</code>) avec noms, années de naissance et de décès et sexe ; affiliations (<code>sdh-slc:C5</code>) reliant les personnes aux organisations (<code>crm:E74</code>) avec années de début et de fin ; formations (<code>sdh-sls:C7</code>) avec titre, discipline et institution ; naissances (<code>crm:E67</code>) avec lieu et parents ; mariages (<code>sdh-slc:C3</code>). Environ 10 600 personnes sont liées à Wikidata.',
    'desc.endpoint': 'Point d’accès SPARQL', 'desc.graph': 'Graphe nommé', 'desc.ns': 'Espace de noms des URI', 'desc.repo': 'Code source',
    'desc.example': 'Exemple : membres du Conseil fédéral',
    'desc.legacy': 'Ce site est une interface publique expérimentale du graphe de connaissances. La base de référence reste <a href="https://elitessuisses.unil.ch" target="_blank" rel="noopener">elitessuisses.unil.ch</a>.',

    'viz.eyebrow': 'En direct du graphe de connaissances', 'viz.title': 'Visualisations',
    'viz.lead': 'Chaque graphique ci-dessous est calculé dans votre navigateur à partir d’une requête SPARQL sur le graphe de connaissances des élites suisses.',
    'viz.comp.t': 'Composition des élites par année de référence',
    'viz.comp.d': 'Personnes occupant au moins un mandat ou une affiliation durant l’année de référence, par sexe.',
    'viz.gen.t': 'Générations',
    'viz.gen.d': 'Personnes par cohorte de naissance (générations de 25 ans) et par sexe.',
    'viz.map.t': 'Lieux de naissance',
    'viz.map.d': 'Où les élites sont-elles nées ? La taille des cercles est proportionnelle au nombre de personnes nées dans le lieu. Le curseur permet de filtrer par génération.',
    'viz.map.allGen': 'Toutes les générations',
    'viz.women.t': 'Les femmes dans les organes politiques',
    'viz.women.d': 'Part des femmes parmi les membres des organes fédéraux et cantonaux à chaque année de référence. Les femmes obtiennent le droit de vote et d’éligibilité au niveau fédéral en 1971.',
    'viz.edu.t': 'Formation',
    'viz.edu.d': 'Disciplines et institutions les plus fréquentes des diplômes enregistrés dans la base.',
    'viz.edu.disc': 'Disciplines', 'viz.edu.inst': 'Institutions', 'viz.edu.degree': 'Diplôme',
    'viz.orgs.t': 'Principales organisations',
    'viz.orgs.d': 'Organisations comptant le plus grand nombre de mandats et d’affiliations enregistrés.',
    'viz.note.coverage': 'La couverture varie selon les organes et les périodes ; les parlements cantonaux ne sont que partiellement documentés.',

    'persons.eyebrow': 'Index', 'persons.title': 'Personnes',
    'persons.lead': 'Recherchez toutes les personnes du graphe de connaissances par leur nom. Les résultats sont interrogés en direct.',
    'persons.searchPh': 'Le nom contient…', 'persons.gender': 'Sexe', 'persons.from': 'Né·e entre', 'persons.to': 'et',
    'persons.sort': 'Tri', 'persons.sortName': 'Nom', 'persons.sortBirth': 'Année de naissance', 'persons.sortMand': 'Mandats',
    'col.name': 'Nom', 'col.life': 'Dates', 'col.gender': 'Sexe', 'col.mandates': 'Mandats', 'col.links': 'Liens',
    'col.org': 'Organisation', 'col.type': 'Type', 'col.members': 'Affiliations', 'col.from': 'De', 'col.to': 'À',
    'col.year': 'Année', 'col.degree': 'Titre', 'col.discipline': 'Discipline', 'col.institution': 'Institution',

    'person.eyebrow': 'Personne', 'person.facts': 'Données biographiques', 'person.born': 'Naissance', 'person.died': 'Décès',
    'person.gender': 'Sexe', 'person.birthplace': 'Lieu de naissance', 'person.uri': 'URI',
    'person.mandates': 'Fonctions et mandats', 'person.timeline': 'Chronologie de carrière',
    'person.education': 'Formation', 'person.family': 'Famille', 'person.father': 'Père', 'person.mother': 'Mère',
    'person.children': 'Enfants', 'person.spouses': 'Conjoint·e(s)', 'person.links': 'Liens externes',
    'person.unil': 'Fiche dans la base UNIL', 'person.wikidata': 'Wikidata',
    'person.notfound': 'Cette personne est introuvable dans le graphe de connaissances.',
    'person.none': 'Aucune donnée enregistrée.',

    'orgs.eyebrow': 'Index', 'orgs.title': 'Organisations',
    'orgs.lead': 'Parlements, gouvernements, entreprises, associations et universités, classés par nombre de mandats enregistrés.',
    'orgs.searchPh': 'Le nom de l’organisation contient…', 'orgs.type': 'Type',
    'org.eyebrow': 'Organisation', 'org.members': 'Membres', 'org.over': 'Membres actifs par année',
    'org.notfound': 'Cette organisation est introuvable dans le graphe de connaissances.',
    'org.filter': 'Filtrer les membres…',

    'type.1': 'Gouvernement cantonal', 'type.2': 'Canton', 'type.3': 'Parlement cantonal', 'type.4': 'Parlement fédéral',
    'type.5': 'Conseil fédéral', 'type.6': 'Université / haute école', 'type.7': 'Faculté / département', 'type.none': 'Autre organisation',


    'persons.f.active': 'Actif·ve en {y}', 'persons.f.born': 'Né·e à {p}', 'persons.f.disc': 'Discipline : {d}',
    'persons.f.deg': 'Diplôme : {d}', 'persons.f.inst': 'Études à : {i}', 'persons.f.edu': 'Avec diplôme enregistré',
    'persons.f.wd': 'Lié·e à Wikidata', 'persons.f.remove': 'Retirer le filtre',
    'viz.hint.bars': 'Cliquez sur un segment pour afficher la liste des personnes correspondantes.',
    'viz.hint.comp': 'Cliquez sur un segment pour afficher les personnes ; cliquez sur un sexe dans la légende pour l’afficher ou le masquer.',
    'viz.hint.points': 'Cliquez sur un point pour afficher la liste des personnes correspondantes.',
    'viz.hint.map': 'Cliquez sur un cercle pour afficher les personnes nées dans ce lieu.',
    'viz.hint.orgs': 'Cliquez sur une barre pour ouvrir l’organisation.',
    'home.kpiHint': 'Cliquez sur un chiffre pour ouvrir la liste correspondante.',
    'home.yearsAll': 'Tous', 'home.yearsWomen': 'Femmes',
    'home.nlEyebrow': 'Accès en langage naturel · Bêta',
    'home.nlTitle': 'Interrogez la base de données en langage naturel',
    'home.nlText': 'Posez vos questions sur les élites suisses avec vos propres mots — sans SPARQL. Swiss Elites Chat est hébergé par le Data Science Lab de l’Université de Berne.',
    'home.nlCta': 'Ouvrir Swiss Elites Chat', 'home.nlLogin': 'Connexion requise',
    'desc.docLod': 'Documentation de la LODification →', 'desc.docSlides': 'Diapositives : LOD for research (PDF, 11 Mo)',
    'persons.f.org': 'Membre de {o}', 'org.hint': 'Cliquez sur un point pour afficher les membres actifs cette année-là.',
    'footer.coop': 'Une coopération de',
    'footer.about': 'Linked Elites Suisses est une interface Linked Open Data de la Base de données des élites suisses de l’Observatoire des élites suisses (OBELIS), Université de Lausanne, développée en coopération avec le Collège des Humanités de l’EPFL, le Digital Humanities Center et le Data Science Lab de l’Université de Berne.',
    'footer.site': 'Site', 'footer.data': 'Données',
    'footer.endpoint': 'Point d’accès SPARQL', 'footer.original': 'Base de données originale (UNIL)', 'footer.repo': 'Dépôt GitHub', 'footer.ontome': 'Profils ontologiques (OntoME)',
    'footer.licence': 'Code : licence MIT. Données : © OBELIS, Université de Lausanne.',
    'footer.experimental': 'Version expérimentale',
  },

  /* ------------------------------------------------------------------ DE */
  de: {
    'site.title': 'Linked Elites Suisses',
    'site.sub': 'Datenbank der Schweizer Eliten · Linked Open Data',
    'nav.home': 'Startseite', 'nav.description': 'Beschreibung', 'nav.viz': 'Visualisierungen',
    'nav.persons': 'Personen', 'nav.orgs': 'Organisationen', 'nav.menu': 'Menü', 'nav.skip': 'Zum Inhalt springen',

    'common.loading': 'Der Wissensgraph wird abgefragt…',
    'common.error': 'Der SPARQL-Endpunkt ist nicht erreichbar. Bitte versuchen Sie es später erneut.',
    'common.noresults': 'Keine Ergebnisse.',
    'common.prev': '← Zurück', 'common.next': 'Weiter →',
    'common.page': 'Seite {p} von {n}', 'common.results': '{n} Ergebnisse',
    'common.showQuery': 'SPARQL-Abfrage', 'common.runQuery': 'Im Endpunkt öffnen',
    'common.men': 'Männer', 'common.women': 'Frauen', 'common.unknown': 'Unbekannt',
    'common.male': 'männlich', 'common.female': 'weiblich',
    'common.all': 'Alle', 'common.absolute': 'Absolut', 'common.percent': 'Prozent',
    'common.persons': 'Personen', 'common.search': 'Suchen',
    'common.kgDerived': 'Live aus dem Wissensgraphen berechnet.',

    'home.eyebrow': 'Wissensgraph · 1890–2020',
    'home.title': 'Linked Elites Suisses',
    'home.lead': 'Wer hatte in der Schweiz die Macht? Entdecken Sie politische, wirtschaftliche, administrative und akademische Eliten von 1890 bis heute — ihre Laufbahnen, Ausbildungen, Familien und Netzwerke — als Linked Open Data, live über den SPARQL-Endpunkt abgefragt.',
    'home.ctaPersons': 'Personen durchsuchen', 'home.ctaViz': 'Visualisierungen ansehen',
    'home.searchPh': 'Person suchen, z. B. Comtesse, Kopp, Dreifuss…',
    'kpi.persons': 'Personen', 'kpi.women': 'Frauen', 'kpi.orgs': 'Organisationen',
    'kpi.memberships': 'Mandate & Mitgliedschaften', 'kpi.wikidata': 'Mit Wikidata verknüpft', 'kpi.education': 'Abschlüsse',
    'home.yearsEyebrow': 'Stichjahre',
    'home.yearsTitle': 'Aktive Eliten pro Stichjahr',
    'home.yearsText': 'Anzahl Personen mit mindestens einem Mandat oder einer Mitgliedschaft im jeweiligen Jahr, nach Geschlecht. Aus dem Wissensgraphen abgeleitet (nicht die offiziellen Stichprobendefinitionen von OBELIS).',
    'home.womenShare': '{p} % Frauen',
    'home.exploreEyebrow': 'Entdecken',
    'home.exploreTitle': 'Zugänge zu den Daten',
    'home.card1.t': 'Personen', 'home.card1.d': 'Rund 59 000 Personen durchsuchen und ihre Profile öffnen: Mandate, Ausbildung, Familienbeziehungen.',
    'home.card2.t': 'Organisationen', 'home.card2.d': 'Parlamente, Regierungen, Unternehmen, Verbände und Universitäten mit ihren Mitgliedern im Zeitverlauf.',
    'home.card3.t': 'Visualisierungen', 'home.card3.d': 'Zusammensetzung nach Geschlecht, Generationen, Geburtsorte, Ausbildung und Frauen in politischen Gremien.',
    'home.card4.t': 'Beschreibung', 'home.card4.d': 'Wie die Eliten definiert werden, welche Quellen verwendet wurden und wie der Wissensgraph modelliert ist.',
    'home.lodEyebrow': 'Linked Open Data',
    'home.lodTitle': 'Jede Zahl auf dieser Seite ist eine Live-SPARQL-Abfrage',
    'home.lodText': 'Die Daten werden als Wissensgraph auf Basis von CIDOC CRM und den SDHSS-Ontologien publiziert. Jede Seite sendet ihre Abfragen direkt an den öffentlichen Endpunkt — öffnen Sie das Feld «SPARQL-Abfrage» unter jedem Diagramm, um sie weiterzuverwenden.',

    'desc.eyebrow': 'Über die Datenbank', 'desc.title': 'Beschreibung',
    'desc.lead': 'Die Datenbank der Schweizer Eliten dokumentiert Personen, die seit 1890 Machtpositionen in Politik, Wirtschaft, Verwaltung und Wissenschaft der Schweiz innehatten.',
    'desc.toc.data': 'Datenbank', 'desc.toc.sample': 'Stichprobe', 'desc.toc.lod': 'Wissensgraph',
    'desc.txt0': 'Datenbank',
    'desc.txt1': 'Die wichtigste Quelle des <a href="https://www.unil.ch/obelis/en/home.html" target="_blank" rel="noopener">Observatoriums der Schweizer Eliten (OBELIS)</a> ist die Datenbank der Schweizer Eliten. Sie umfasst mehr als 40 000 Einträge zu politischen, wirtschaftlichen, administrativen und akademischen Eliten des 20. und frühen 21. Jahrhunderts. Berücksichtigt werden neun Stichjahre im Abstand von rund 20 Jahren: 1890, 1910, 1937, 1957, 1980, 2000, 2010, 2015 und 2020. Die Datenbank enthält biografische Informationen zu den Eliten, darunter soziale Herkunft, Ausbildung, Laufbahn, Familienbeziehungen, militärischer Grad und Zugehörigkeit zu national bedeutsamen Orten der Soziabilität. Nur ein Teil dieser Daten wird veröffentlicht.',
    'desc.txt2': 'Stichprobe der Datenbank der Schweizer Eliten',
    'desc.txt3': 'Eine der zentralen Fragen der Elitenforschung lautet: Wer gehört zur Elite, und wie lassen sich Eliten definieren? Das in unserer Datenbank verwendete Kriterium ist die Machtposition oder -funktion, die eine Person innehat. Im Folgenden erläutern wir unsere Definition der politischen, wirtschaftlichen, administrativen und akademischen Eliten. Weitere Einzelheiten zur Abgrenzung der Stichprobe finden sich im Dokument <a href="https://elitessuisses.unil.ch/media/DescrEchantillon_12_2020.pdf" target="_blank" rel="noopener">Beschreibung der Stichprobe</a> (PDF, auf Französisch).',
    'desc.txt4': 'Politische Eliten',
    'desc.txt5': 'Unsere Stichprobe der politischen Eliten der Schweiz umfasst die Mitglieder des Bundesrats, des eidgenössischen Parlaments, der Regierungen der 26 Kantone, der Exekutiven der vier grössten Schweizer Städte (Zürich, Bern, Genf und Lausanne) sowie der Zentralvorstände der wichtigsten politischen Parteien.',
    'desc.txt6': 'Wirtschaftliche Eliten',
    'desc.txt7': 'Die wirtschaftlichen Eliten setzen sich aus zwei Gruppen zusammen. Erstens die Topmanagerinnen und Topmanager der 110 grössten Schweizer Unternehmen, d. h. die Präsidentin oder der Präsident des Verwaltungsrats, die Generaldirektorin oder der Generaldirektor (CEO) und in gewissen Fällen die oder der Delegierte des Verwaltungsrats, ergänzt um die Mitglieder der Verwaltungsräte dieser Unternehmen. Zweitens haben wir Daten zu den Vorstandsmitgliedern der sieben wichtigsten Wirtschafts-Dachverbände erhoben: Schweizerische Bankiervereinigung (SBVg), Christlichnationaler Gewerkschaftsbund (CNG, ab 2004 Travail.Suisse), Schweizerischer Arbeitgeberverband (SAV), Schweizerischer Gewerbeverband (SGV), economiesuisse (seit 2000, vormals Schweizerischer Handels- und Industrie-Verein, SHIV), Schweizer Bauernverband (SBV) und Schweizerischer Gewerkschaftsbund (SGB).',
    'desc.txt8': 'Administrative Eliten',
    'desc.txt9': 'Zu den administrativen Eliten zählen wir: die Bundeskanzlerinnen und Bundeskanzler sowie die Vizekanzlerinnen und Vizekanzler, die Generalsekretärinnen und Generalsekretäre der Departemente und ihre Stellvertretenden, sämtliche Direktorinnen und Direktoren der Bundesämter, die Mitglieder des Direktoriums der Schweizerischen Nationalbank sowie die Mitglieder des Bundesgerichts. Ergänzt wurden diese Gruppen durch sämtliche Mitglieder der ausserparlamentarischen Kommissionen. Diese administrativen Begegnungsorte bringen Akteure aus Politik, Verwaltung, Wirtschaft und Wissenschaft zusammen.',
    'desc.txt10': 'Akademische Eliten',
    'desc.txt11': 'Die Stichprobe der akademischen Eliten umfasst bis 2000 sämtliche ordentlichen und ausserordentlichen Professorinnen und Professoren der Schweizer Universitäten (Basel, Bern, Freiburg, Genf, Lausanne, Luzern, Neuenburg, St. Gallen, italienische Schweiz und Zürich) sowie der beiden Eidgenössischen Technischen Hochschulen in Zürich und Lausanne; für die jüngere Periode wurde eine engere Stichprobe gebildet.',
    'desc.txt12': 'Begleitprojekte',
    'desc.txt13': 'Darüber hinaus werden die nationalen Eliten dieser vier Sphären durch verschiedene Begleitprojekte ergänzt, etwa zu den lokalen Eliten der wichtigsten Stadtregionen der Schweiz (Basel, Zürich und Genf, siehe <a href="https://wp.unil.ch/sinergia-elites" target="_blank" rel="noopener">die Projektwebsite</a>), zu den Mitgliedern Genfer philanthropischer Vereinigungen zu Beginn des 20. Jahrhunderts oder zu den politischen Eliten einzelner Schweizer Städte.',
    'desc.lodTitle': 'Der Wissensgraph',
    'desc.lod1': 'Die relationale Datenbank von OBELIS wurde im Rahmen des Projekts LOD4HSS / LESSH in einen RDF-Wissensgraphen überführt. Das Mapping (R2RML) stützt sich auf in <a href="https://ontome.net/project/269" target="_blank" rel="noopener">OntoME</a> definierte Anwendungsprofile, die auf <a href="https://cidoc-crm.org" target="_blank" rel="noopener">CIDOC CRM</a> und die <a href="https://sdhss.org" target="_blank" rel="noopener">SDHSS</a>-Ontologien verweisen.',
    'desc.lod2': 'Zentrale Entitäten: Personen (<code>crm:E21</code>) mit Namen, Geburts- und Todesjahr sowie Geschlecht; Mitgliedschaften (<code>sdh-slc:C5</code>), die Personen mit Organisationen (<code>crm:E74</code>) samt Anfangs- und Endjahr verbinden; Ausbildungen (<code>sdh-sls:C7</code>) mit Abschluss, Fach und Institution; Geburten (<code>crm:E67</code>) mit Geburtsort und Eltern; Ehen (<code>sdh-slc:C3</code>). Rund 10 600 Personen sind mit Wikidata verknüpft.',
    'desc.endpoint': 'SPARQL-Endpunkt', 'desc.graph': 'Benannter Graph', 'desc.ns': 'URI-Namensraum', 'desc.repo': 'Quellcode',
    'desc.example': 'Beispiel: Mitglieder des Bundesrats',
    'desc.legacy': 'Diese Website ist eine experimentelle öffentliche Schnittstelle zum Wissensgraphen. Massgebend bleibt die Datenbank <a href="https://elitessuisses.unil.ch" target="_blank" rel="noopener">elitessuisses.unil.ch</a>.',

    'viz.eyebrow': 'Live aus dem Wissensgraphen', 'viz.title': 'Visualisierungen',
    'viz.lead': 'Jedes Diagramm wird in Ihrem Browser aus einer SPARQL-Abfrage auf dem Wissensgraphen der Schweizer Eliten berechnet.',
    'viz.comp.t': 'Zusammensetzung der Eliten nach Stichjahr',
    'viz.comp.d': 'Personen mit mindestens einem Mandat oder einer Mitgliedschaft im Stichjahr, nach Geschlecht.',
    'viz.gen.t': 'Generationen',
    'viz.gen.d': 'Personen nach Geburtskohorte (Generationen à 25 Jahre) und Geschlecht.',
    'viz.map.t': 'Geburtsorte',
    'viz.map.d': 'Wo wurden die Eliten geboren? Die Kreisgrösse ist proportional zur Zahl der dort geborenen Personen. Mit dem Schieberegler lässt sich nach Generation filtern.',
    'viz.map.allGen': 'Alle Generationen',
    'viz.women.t': 'Frauen in politischen Gremien',
    'viz.women.d': 'Frauenanteil unter den Mitgliedern eidgenössischer und kantonaler Gremien pro Stichjahr. Das eidgenössische Stimm- und Wahlrecht für Frauen wurde 1971 eingeführt.',
    'viz.edu.t': 'Ausbildung',
    'viz.edu.d': 'Häufigste Fächer und Institutionen der in der Datenbank erfassten Abschlüsse.',
    'viz.edu.disc': 'Fächer', 'viz.edu.inst': 'Institutionen', 'viz.edu.degree': 'Abschluss',
    'viz.orgs.t': 'Grösste Organisationen',
    'viz.orgs.d': 'Organisationen mit den meisten erfassten Mandaten und Mitgliedschaften.',
    'viz.note.coverage': 'Die Abdeckung variiert je nach Gremium und Periode; Kantonsparlamente sind nur teilweise erfasst.',

    'persons.eyebrow': 'Register', 'persons.title': 'Personen',
    'persons.lead': 'Alle Personen des Wissensgraphen nach Namen durchsuchen. Die Ergebnisse werden live abgefragt.',
    'persons.searchPh': 'Name enthält…', 'persons.gender': 'Geschlecht', 'persons.from': 'Geboren von', 'persons.to': 'bis',
    'persons.sort': 'Sortierung', 'persons.sortName': 'Name', 'persons.sortBirth': 'Geburtsjahr', 'persons.sortMand': 'Mandate',
    'col.name': 'Name', 'col.life': 'Lebensdaten', 'col.gender': 'Geschlecht', 'col.mandates': 'Mandate', 'col.links': 'Links',
    'col.org': 'Organisation', 'col.type': 'Typ', 'col.members': 'Mitgliedschaften', 'col.from': 'Von', 'col.to': 'Bis',
    'col.year': 'Jahr', 'col.degree': 'Abschluss', 'col.discipline': 'Fach', 'col.institution': 'Institution',

    'person.eyebrow': 'Person', 'person.facts': 'Biografische Angaben', 'person.born': 'Geboren', 'person.died': 'Gestorben',
    'person.gender': 'Geschlecht', 'person.birthplace': 'Geburtsort', 'person.uri': 'URI',
    'person.mandates': 'Funktionen & Mandate', 'person.timeline': 'Laufbahn',
    'person.education': 'Ausbildung', 'person.family': 'Familie', 'person.father': 'Vater', 'person.mother': 'Mutter',
    'person.children': 'Kinder', 'person.spouses': 'Ehepartner/in', 'person.links': 'Externe Links',
    'person.unil': 'Eintrag in der UNIL-Datenbank', 'person.wikidata': 'Wikidata',
    'person.notfound': 'Diese Person wurde im Wissensgraphen nicht gefunden.',
    'person.none': 'Keine Daten erfasst.',

    'orgs.eyebrow': 'Register', 'orgs.title': 'Organisationen',
    'orgs.lead': 'Parlamente, Regierungen, Unternehmen, Verbände und Universitäten, geordnet nach Anzahl erfasster Mandate.',
    'orgs.searchPh': 'Name der Organisation enthält…', 'orgs.type': 'Typ',
    'org.eyebrow': 'Organisation', 'org.members': 'Mitglieder', 'org.over': 'Aktive Mitglieder pro Jahr',
    'org.notfound': 'Diese Organisation wurde im Wissensgraphen nicht gefunden.',
    'org.filter': 'Mitglieder filtern…',

    'type.1': 'Kantonsregierung', 'type.2': 'Kanton', 'type.3': 'Kantonsparlament', 'type.4': 'Bundesparlament',
    'type.5': 'Bundesrat', 'type.6': 'Universität / Hochschule', 'type.7': 'Fakultät / Departement', 'type.none': 'Andere Organisation',


    'persons.f.active': 'Aktiv {y}', 'persons.f.born': 'Geboren in {p}', 'persons.f.disc': 'Fach: {d}',
    'persons.f.deg': 'Abschluss: {d}', 'persons.f.inst': 'Studiert an: {i}', 'persons.f.edu': 'Mit erfasstem Abschluss',
    'persons.f.wd': 'Mit Wikidata verknüpft', 'persons.f.remove': 'Filter entfernen',
    'viz.hint.bars': 'Klicken Sie auf ein Balkensegment, um die entsprechenden Personen aufzulisten.',
    'viz.hint.comp': 'Klicken Sie auf ein Balkensegment, um die Personen aufzulisten; ein Klick auf ein Geschlecht in der Legende blendet es ein oder aus.',
    'viz.hint.points': 'Klicken Sie auf einen Punkt, um die entsprechenden Personen aufzulisten.',
    'viz.hint.map': 'Klicken Sie auf einen Kreis, um die dort geborenen Personen aufzulisten.',
    'viz.hint.orgs': 'Klicken Sie auf einen Balken, um die Organisation zu öffnen.',
    'home.kpiHint': 'Klicken Sie auf eine Zahl, um die entsprechende Liste zu öffnen.',
    'home.yearsAll': 'Alle', 'home.yearsWomen': 'Nur Frauen',
    'home.nlEyebrow': 'Zugang in natürlicher Sprache · Beta',
    'home.nlTitle': 'Die Datenbank in natürlicher Sprache abfragen',
    'home.nlText': 'Stellen Sie Fragen zu den Schweizer Eliten in Ihren eigenen Worten — ganz ohne SPARQL. Swiss Elites Chat wird vom Data Science Lab der Universität Bern betrieben.',
    'home.nlCta': 'Swiss Elites Chat öffnen', 'home.nlLogin': 'Anmeldung erforderlich',
    'desc.docLod': 'Dokumentation der LODifizierung →', 'desc.docSlides': 'Folien: LOD for research (PDF, 11 MB)',
    'persons.f.org': 'Mitglied von {o}', 'org.hint': 'Klicken Sie auf einen Punkt, um die in diesem Jahr aktiven Mitglieder aufzulisten.',
    'footer.coop': 'Eine Kooperation von',
    'footer.about': 'Linked Elites Suisses ist eine Linked-Open-Data-Schnittstelle zur Datenbank der Schweizer Eliten des Observatoriums der Schweizer Eliten (OBELIS), Universität Lausanne, entwickelt in Zusammenarbeit mit dem Collège des Humanités der EPFL sowie dem Digital Humanities Center und dem Data Science Lab der Universität Bern.',
    'footer.site': 'Website', 'footer.data': 'Daten',
    'footer.endpoint': 'SPARQL-Endpunkt', 'footer.original': 'Originaldatenbank (UNIL)', 'footer.repo': 'GitHub-Repository', 'footer.ontome': 'Ontologie-Profile (OntoME)',
    'footer.licence': 'Code: MIT-Lizenz. Daten: © OBELIS, Universität Lausanne.',
    'footer.experimental': 'Experimentelle Version',
  },
};

/* ---------- language state ---------- */
ES.detectLang = function () {
  const url = new URLSearchParams(location.search).get('lang');
  if (url && ES.LANGS.includes(url)) { try { localStorage.setItem('es-lang', url); } catch (e) {} return url; }
  try { const s = localStorage.getItem('es-lang'); if (s && ES.LANGS.includes(s)) return s; } catch (e) {}
  const nav = (navigator.language || 'en').slice(0, 2).toLowerCase();
  return ES.LANGS.includes(nav) ? nav : 'en';
};
ES.lang = ES.detectLang();

ES.t = function (key, vars) {
  let s = (ES.dict[ES.lang] && ES.dict[ES.lang][key]) ?? ES.dict.en[key] ?? key;
  if (vars) for (const k in vars) s = s.replaceAll('{' + k + '}', vars[k]);
  return s;
};

ES.locale = () => ({ en: 'en-GB', fr: 'fr-CH', de: 'de-CH' })[ES.lang];
ES.fmt = (n) => Number(n).toLocaleString(ES.locale());

ES.applyI18n = function (root = document) {
  document.documentElement.lang = ES.lang;
  root.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = ES.t(el.dataset.i18n); });
  root.querySelectorAll('[data-i18n-html]').forEach(el => { el.innerHTML = ES.t(el.dataset.i18nHtml); });
  root.querySelectorAll('[data-i18n-attr]').forEach(el => {
    el.dataset.i18nAttr.split(';').forEach(pair => {
      const [attr, key] = pair.split(':');
      if (attr && key) el.setAttribute(attr.trim(), ES.t(key.trim()));
    });
  });
  const tk = document.body && document.body.dataset.titleKey;
  if (tk) document.title = ES.t(tk) + ' · ' + ES.t('site.title');
  else document.title = ES.t('site.title');
};

ES.setLang = function (l) {
  if (!ES.LANGS.includes(l) || l === ES.lang) return;
  ES.lang = l;
  try { localStorage.setItem('es-lang', l); } catch (e) {}
  const u = new URL(location.href); u.searchParams.set('lang', l); history.replaceState(null, '', u);
  ES.applyI18n();
  document.querySelectorAll('.lang-switch button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === l)));
  document.dispatchEvent(new CustomEvent('es:lang', { detail: l }));
};
