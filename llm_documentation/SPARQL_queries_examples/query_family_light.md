Question: Who are the parents (father and mother) of a person?

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

SELECT ?person ?personLabel ?mother ?motherLabel ?father ?fatherLabel
WHERE {
    ?birth a crm:E67 ;
        crm:P98 ?person ;
        crm:P96 ?mother ;
        crm:P97 ?father .

    ?person sdh-short:P9 ?personLabel .
    ?mother sdh-short:P9 ?motherLabel .
    ?father sdh-short:P9 ?fatherLabel .
}

```