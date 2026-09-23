Question: What is the geographical place kind of a geographical place?

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

SELECT ?geoPlace ?geoPlaceLabel ?geoPlaceKind ?geoPlaceKindLabel
WHERE {
    ?geoPlace a sdh:C13 ;
        sdh:P20 ?geoPlaceKind .

    ?geoPlace sdh-short:P9 ?geoPlaceLabel .
    ?geoPlaceKind sdh-short:P9 ?geoPlaceKindLabel .
}

```

Question: What is the geographical place type of a geographical place?

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

SELECT ?geoPlace ?geoPlaceLabel ?geoPlaceType ?geoPlaceTypeLabel
WHERE {
    ?geoPlace a sdh:C13 ;
        sdh:P103 ?geoPlaceType .

    ?geoPlace sdh-short:P9 ?geoPlaceLabel .
    ?geoPlaceType sdh-short:P9 ?geoPlaceTypeLabel .
}

```