

```sparql
### List graphs present in repo
SELECT DISTINCT ?g
WHERE { graph ?g {
?s ?p ?o }
}
```

```sparql
### List available properties in the data graph

SELECT DISTINCT ?p
WHERE {
    graph <https://swiss-elites.lod4hss.cloud/resource/> {
        ?s ?p ?o
    }
}

```

```sparql
### Count the number of memberships per person.
# larger number on top

PREFIX sdh-short: <https://sdhss.org/ontology/shortcuts/>
SELECT ?s ?s_label (count(*) as ?number)
WHERE {
    graph <https://swiss-elites.lod4hss.cloud/resource/> {
        ?s <http://elites_suisses/ontology/memberOf> ?o;
           <https://sdhss.org/ontology/shortcuts/P9> ?s_label
    }
}
GROUP BY ?s ?s_label
ORDER BY DESC (?number)
LIMIT 10

```

```sparql
### Add the Wikidata URI


PREFIX sdh-short: <https://sdhss.org/ontology/shortcuts/>
PREFIX owl: <http://www.w3.org/2002/07/owl#>


SELECT distinct ?s ?s_label ?id_ext ?o1
WHERE {
    graph <https://swiss-elites.lod4hss.cloud/resource/> {
        ?s <https://sdhss.org/ontology/shortcuts/P9> ?s_label;
           owl:sameAs ?id_ext.
           # ajout filtre
           ?id_ext <http://elites_suisses/ontology/identifier_code> ?o1.
           FILTER(?o1 = 'wikidata')
    }
}
ORDER BY DESC (?number)
LIMIT 10

```

```sparql
### Add the Wikidata URI and membership count
# Only entities with linked URI will appear

PREFIX sdh-short: <https://sdhss.org/ontology/shortcuts/>


SELECT ?s ?s_label ?number ?id_ext
WHERE {

{SELECT ?s ?s_label (count(*) as ?number)
WHERE {
    graph <https://swiss-elites.lod4hss.cloud/resource/> {
        ?s <http://elites_suisses/ontology/memberOf> ?o;
           <https://sdhss.org/ontology/shortcuts/P9> ?s_label
    }
}
GROUP BY ?s ?s_label
ORDER BY DESC (?number)
OFFSET 10
LIMIT 3
}
    ?s owl:sameAs ?id_ext.
    # ajout filtre
    ?id_ext <http://elites_suisses/ontology/identifier_code> ?o1.
    FILTER(?o1 = 'wikidata')
}
```

```sparql
### Add the Wikidata URI and membership count
# Correct the URI (the data contains the page)

PREFIX sdh-short: <https://sdhss.org/ontology/shortcuts/>


SELECT ?s 
WHERE {

{SELECT ?s ?s_label (count(*) as ?number)
WHERE {
    graph <https://swiss-elites.lod4hss.cloud/resource/> {
        ?s <http://elites_suisses/ontology/memberOf> ?o;
           <https://sdhss.org/ontology/shortcuts/P9> ?s_label
    }
}

GROUP BY ?s ?s_label
ORDER BY DESC (?number)
OFFSET 10
LIMIT 5
}
    ?s owl:sameAs ?id_ext.
    # ajout filtre
    ?id_ext <http://elites_suisses/ontology/identifier_code> ?o1.
    FILTER(?o1 = 'wikidata')
    BIND(URI(REPLACE(STR(?id_ext), 'https://www.wikidata.org/wiki/', 'http://www.wikidata.org/entity/')) AS ?wikidata_uri)
    FILTER(?o1 = 'wikidata')
}
```

```sparql
### Get wikidata data

PREFIX sdh-short: <https://sdhss.org/ontology/shortcuts/>

SELECT DISTINCT ?s ?s_label ?wp1 ?wp1Label ?wo1 ?wikidata_uri
WHERE {

{SELECT ?s ?s_label (count(*) as ?number)
WHERE {
graph <https://swiss-elites.lod4hss.cloud/resource/> {
    ?s <http://elites_suisses/ontology/memberOf> ?o;
        <https://sdhss.org/ontology/shortcuts/P9> ?s_label
}
}

GROUP BY ?s ?s_label
ORDER BY DESC (?number)
OFFSET 10
LIMIT 3
}
?s owl:sameAs ?id_ext.
# ajout filtre
?id_ext <http://elites_suisses/ontology/identifier_code> ?o1.
FILTER(?o1 = 'wikidata')
BIND(URI(REPLACE(STR(?id_ext), 'https://www.wikidata.org/wiki/', 'http://www.wikidata.org/entity/')) AS ?wikidata_uri)
FILTER(?o1 = 'wikidata')

SERVICE <https://query.wikidata.org/sparql> { 
    
    ?wikidata_uri ?wp1 ?wo1.
}


}
LIMIT 10

```

```sparql
### Get wikidata properties

PREFIX sdh-short: <https://sdhss.org/ontology/shortcuts/>

SELECT ?wp1 (COUNT(*) as ?numberWp)
WHERE {

{SELECT ?s ?s_label (count(*) as ?number)
WHERE {
graph <https://swiss-elites.lod4hss.cloud/resource/> {
    ?s <http://elites_suisses/ontology/memberOf> ?o;
        <https://sdhss.org/ontology/shortcuts/P9> ?s_label
}
}

GROUP BY ?s ?s_label
ORDER BY DESC (?number)
LIMIT 50
}
?s owl:sameAs ?id_ext.
# ajout filtre
?id_ext <http://elites_suisses/ontology/identifier_code> ?o1.
FILTER(?o1 = 'wikidata')
BIND(URI(REPLACE(STR(?id_ext), 'https://www.wikidata.org/wiki/', 'http://www.wikidata.org/entity/')) AS ?wikidata_uri)
FILTER(?o1 = 'wikidata')

SERVICE <https://query.wikidata.org/sparql> { 
    
    ?wikidata_uri ?wp1 ?wo1.
}


}
GROUP BY ?wp1
ORDER BY DESC (?numberWp) ?wp1
LIMIT 20

```

```sparql
### Get wikidata properties

PREFIX sdh-short: <https://sdhss.org/ontology/shortcuts/>

SELECT ?wp1 (COUNT(*) as ?numberWp)
WHERE {

{SELECT ?s ?s_label (count(*) as ?number)
WHERE {
graph <https://swiss-elites.lod4hss.cloud/resource/> {
    ?s <http://elites_suisses/ontology/memberOf> ?o;
        <https://sdhss.org/ontology/shortcuts/P9> ?s_label
}
}

GROUP BY ?s ?s_label
ORDER BY DESC (?number)
LIMIT 50
}
?s owl:sameAs ?id_ext.
# ajout filtre
?id_ext <http://elites_suisses/ontology/identifier_code> ?o1.
FILTER(?o1 = 'wikidata')
BIND(URI(REPLACE(STR(?id_ext), 'https://www.wikidata.org/wiki/', 'http://www.wikidata.org/entity/')) AS ?wikidata_uri)
FILTER(?o1 = 'wikidata')

SERVICE <https://query.wikidata.org/sparql> { 
    
    ?wikidata_uri ?wp1 ?wo1.
    ### 'p/P' for statements, 't/P' for direct
    FILTER(CONTAINS(STR(?wp1), 'p/P'))
}


}
GROUP BY ?wp1
ORDER BY DESC (?numberWp) ?wp1
LIMIT 5

```

```sparql
### Get wikidata properties with labels and counts
# Labels !!!

PREFIX sdh-short: <https://sdhss.org/ontology/shortcuts/>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT ?wp1 ?propLabel (COUNT(*) as ?numberWp)
WHERE {

{SELECT ?s ?s_label (count(*) as ?number)
WHERE {
graph <https://swiss-elites.lod4hss.cloud/resource/> {
    ?s <http://elites_suisses/ontology/memberOf> ?o;
        <https://sdhss.org/ontology/shortcuts/P9> ?s_label
}
}

GROUP BY ?s ?s_label
ORDER BY DESC (?number)
OFFSET 500
LIMIT 150
}
?s owl:sameAs ?id_ext.
# ajout filtre
?id_ext <http://elites_suisses/ontology/identifier_code> ?o1.
FILTER(?o1 = 'wikidata')
BIND(URI(REPLACE(STR(?id_ext), 'https://www.wikidata.org/wiki/', 'http://www.wikidata.org/entity/')) AS ?wikidata_uri)
FILTER(?o1 = 'wikidata')

SERVICE <https://query.wikidata.org/sparql> { 
    
    ?wikidata_uri ?wp1 ?wo1.

    ### This is the way of getting properties labels !!!
    FILTER(CONTAINS(STR(?wp1), 'p/P'))
    BIND(URI(REPLACE(STR(?wp1), 'prop', 'entity')) as ?prop).
    OPTIONAL {?prop rdfs:label ?propLabel}
    FILTER(LANG(?propLabel) = 'en')
            
}


}
GROUP BY ?wp1 ?propLabel
ORDER BY DESC (?numberWp) ?wp1
LIMIT 20

```

```sparql
### Get wikidata properties of statements
# For a single property: P39, or P106

PREFIX sdh-short: <https://sdhss.org/ontology/shortcuts/>
PREFIX p: <http://www.wikidata.org/prop/>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ps: <http://www.wikidata.org/prop/statement/>
PREFIX wd: <http://www.wikidata.org/entity/>

SELECT ?s ?s_label ?wikidata_uri ?wst1 ?wp1 ?wo1 ?wo1Label
WHERE {

{SELECT ?s ?s_label (count(*) as ?number)
WHERE {
graph <https://swiss-elites.lod4hss.cloud/resource/> {
    ?s <http://elites_suisses/ontology/memberOf> ?o;
        <https://sdhss.org/ontology/shortcuts/P9> ?s_label
}
}

GROUP BY ?s ?s_label
ORDER BY DESC (?number)
OFFSET 200
LIMIT 10
}
?s owl:sameAs ?id_ext.
# ajout filtre pour avoir les URL wikidata 
?id_ext <http://elites_suisses/ontology/identifier_code> ?o1.
FILTER(?o1 = 'wikidata')
## URI wikidata
BIND(URI(REPLACE(STR(?id_ext), 'https://www.wikidata.org/wiki/', 'http://www.wikidata.org/entity/')) AS ?wikidata_uri)
FILTER(?o1 = 'wikidata')

SERVICE <https://query.wikidata.org/sparql> { 
    
    ?wikidata_uri p:P39 ?wst1.
    ?wst1 ?wp1 ?wo1.
    FILTER(
        (CONTAINS(STR(?wp1), 'P582') 
        ||  CONTAINS(STR(?wp1), 'P580')
        ||  CONTAINS(STR(?wp1), 'P39')
        ) && (!CONTAINS(STR(?wp1), 'value')
        )
    )
    OPTIONAL {?wo1 rdfs:label ?wo1Label.
            FILTER (lang(?wo1Label) = 'en')
    }
    
   
}


}
order by ?wikidata_uri ?wst1
LIMIT 200


```

```sparql
### Get and count wikidata statements properties

PREFIX sdh-short: <https://sdhss.org/ontology/shortcuts/>
PREFIX p: <http://www.wikidata.org/prop/>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT ?wp1 ?pLabel (COUNT(*) as ?numberWp)
WHERE {

{SELECT ?s (count(*) as ?number)
WHERE {
graph <https://swiss-elites.lod4hss.cloud/resource/> {
    ?s <http://elites_suisses/ontology/memberOf> ?o.
}
}

GROUP BY ?s
ORDER BY DESC (?number)
LIMIT 100
}
?s owl:sameAs ?id_ext.
# ajout filtre pour avoir les URL wikidata 
?id_ext <http://elites_suisses/ontology/identifier_code> ?o1.
FILTER(?o1 = 'wikidata')
## URI wikidata
BIND(URI(REPLACE(STR(?id_ext), 'https://www.wikidata.org/wiki/', 'http://www.wikidata.org/entity/')) AS ?wikidata_uri)
FILTER(?o1 = 'wikidata')

SERVICE <https://query.wikidata.org/sparql> { 
    
    ## P39 (position held), P106 (occupation), P102 (member of political party)
    ?wikidata_uri p:P106 [?wp1 ?wo1].
    BIND(URI(REPLACE(STR(?wp1), "^.*[/]", "http://www.wikidata.org/entity/")) AS ?id_wp1)
    OPTIONAL {?id_wp1 rdfs:label ?pLabel.
            FILTER (lang(?pLabel) = 'en')
    }
    
}


}
GROUP BY ?wp1 ?pLabel
ORDER BY DESC (?numberWp) ?p1
LIMIT 30

```

```sparql

```

```sparql

```

```sparql

```
