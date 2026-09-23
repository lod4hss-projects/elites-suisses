Question: What is the birth date of a person?

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

SELECT ?person ?personLabel ?birthDate
WHERE {
    ?birth a crm:E67 ;
        crm:P98 ?person ;
        sdh-short:P1 ?birthDate.

    ?person sdh-short:P9 ?personLabel .
}

```

Question: What is the birth place of a person?

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

SELECT ?person ?personLabel ?geoPlace ?geoPlaceLabel
WHERE {
    ?birth a crm:E67 ;
        crm:P98 ?person ;
        sdh:P6 ?geoPlace.

    ?person sdh-short:P9 ?personLabel .
    ?geoPlace sdh-short:P9 ?geoPlaceLabel .
}

```

Question: What is the death date of a person?

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

SELECT ?person ?personLabel ?deathDate
WHERE {
    ?death a crm:E69 ;
        crm:P98 ?person ;
        sdh-short:P1 deathDate.

    ?person sdh-short:P9 ?personLabel .
}

```

Question: What is the death place of a person?

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

SELECT ?person ?personLabel ?geoPlace ?geoPlaceLabel
WHERE {
    ?birth a crm:E69 ;
        crm:P98 ?person ;
        sdh:P6 ?geoPlace.

    ?person sdh-short:P9 ?personLabel .
    ?geoPlace sdh-short:P9 ?geoPlaceLabel .
}

```