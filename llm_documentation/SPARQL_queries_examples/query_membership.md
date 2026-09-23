Question: What group an actor (person or group) can be a member of?

``` sparql
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX sdh: <https://sdhss.org/ontology/core/>
PREFIX crm-sup: <https://sdhss.org/ontology/crm-supplement/>
PREFIX sdh-slc: <https://sdhss.org/ontology/social-life/>
PREFIX sdh-short: <https://sdhss.org/ontology/shortcuts/>
PREFIX sdh-info: <https://sdhss.org/ontology/sources-information-metadata/>
PREFIX sdh-sls: <https://sdhss.org/ontology/social-life-specific/>

SELECT ?actor ?actorLabel ?group ?groupLabel
WHERE {
    ?membership a sdh-slc:C5 ;
        sdh-slc:P1 ?actor ;
        sdh-slc:P2 ?group .

    ?actor sdh-short:P9 ?actorLabel .
    ?group sdh-short:P9 ?groupLabel .
}

```

Question: On behalf of which group does an actor (person or group) is member for?

``` sparql
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX sdh: <https://sdhss.org/ontology/core/>
PREFIX crm-sup: <https://sdhss.org/ontology/crm-supplement/>
PREFIX sdh-slc: <https://sdhss.org/ontology/social-life/>
PREFIX sdh-short: <https://sdhss.org/ontology/shortcuts/>
PREFIX sdh-info: <https://sdhss.org/ontology/sources-information-metadata/>
PREFIX sdh-sls: <https://sdhss.org/ontology/social-life-specific/>

SELECT ?actor ?actorLabel ?group ?groupLabel
WHERE {
    ?membership a sdh-slc:C5 ;
        sdh-slc:P1 ?actor ;
        sdh-slc:P81 ?group .

    ?actor sdh-short:P9 ?actorLabel .
    ?group sdh-short:P9 ?groupLabel .
}

```

Question: What was the social role of an actor (person or group) during a membership?

``` sparql
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX sdh: <https://sdhss.org/ontology/core/>
PREFIX crm-sup: <https://sdhss.org/ontology/crm-supplement/>
PREFIX sdh-slc: <https://sdhss.org/ontology/social-life/>
PREFIX sdh-short: <https://sdhss.org/ontology/shortcuts/>
PREFIX sdh-info: <https://sdhss.org/ontology/sources-information-metadata/>
PREFIX sdh-sls: <https://sdhss.org/ontology/social-life-specific/>

SELECT ?actor ?actorLabel ?role ?roleLabel
WHERE {
    ?membership a sdh-slc:C5 ;
        sdh-slc:P1 ?actor ;
        sdh-slc:P63 ?role .

    ?actor sdh-short:P9 ?actorLabel .
    ?role sdh-short:P9 ?roleLabel .
}

```

Question: What was the type of membership of an actor (person or group) during a membership?

``` sparql
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX sdh: <https://sdhss.org/ontology/core/>
PREFIX crm-sup: <https://sdhss.org/ontology/crm-supplement/>
PREFIX sdh-slc: <https://sdhss.org/ontology/social-life/>
PREFIX sdh-short: <https://sdhss.org/ontology/shortcuts/>
PREFIX sdh-info: <https://sdhss.org/ontology/sources-information-metadata/>
PREFIX sdh-sls: <https://sdhss.org/ontology/social-life-specific/>

SELECT ?actor ?actorLabel ?role ?roleLabel
WHERE {
    ?membership a sdh-slc:C5 ;
        sdh-slc:P1 ?actor ;
        sdh-slc:P63 ?role .

    ?actor sdh-short:P9 ?actorLabel .
    ?role sdh-short:P9 ?roleLabel .
}

```

Question: What was the dates (start date and end date) of the membership of an actor (person or group)?

``` sparql
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX sdh: <https://sdhss.org/ontology/core/>
PREFIX crm-sup: <https://sdhss.org/ontology/crm-supplement/>
PREFIX sdh-slc: <https://sdhss.org/ontology/social-life/>
PREFIX sdh-short: <https://sdhss.org/ontology/shortcuts/>
PREFIX sdh-info: <https://sdhss.org/ontology/sources-information-metadata/>
PREFIX sdh-sls: <https://sdhss.org/ontology/social-life-specific/>

SELECT ?actor ?actorLabel ?startDate ?endDate
WHERE {
    ?membership a sdh-slc:C5 ;
        sdh-slc:P1 ?actor ;
        sdh-short:P4 ?startDate ;
        sdh-short:P7 ?endDate .

    ?actor sdh-short:P9 ?actorLabel .
}

```
