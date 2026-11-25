E01 - List of all the outgoing triples of Alain Berset, born 1972
```
# Should we look only in the Swiss Elite graph?
GRAPH <https://swiss-elites.lod4hss.cloud/resource/> I think this is what the LLM does

PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX sdh-short: <https://sdhss.org/ontology/shortcuts/>
PREFIX swel: <https://elites-suisses.lod4hss.org/resource/>
SELECT DISTINCT ?p ?o
WHERE {
    swel:p69819 ?p ?o .
  }
```

E02 - How many individuals are documented in the database?
```
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>

SELECT (COUNT(DISTINCT ?person) AS ?personCount)
WHERE {
  GRAPH <https://swiss-elites.lod4hss.cloud/resource/> {
    ?person a crm:E21 .
  }
}
```
E03 - Which individuals were born in 1950?
```
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX sdh-short: <https://sdhss.org/ontology/shortcuts/>
SELECT DISTINCT ?person ?personLabel
WHERE {
  GRAPH <https://swiss-elites.lod4hss.cloud/resource/> {
    ?person a crm:E21 ;
            sdh-short:P2 ?birthDate ;
            sdh-short:P9 ?personLabel .

    FILTER(CONTAINS(STR(?birthDate), "1950"))
  }
}
```
E04 - Which individuals died before 2000?
```
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX sdh-short: <https://sdhss.org/ontology/shortcuts/>
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
SELECT DISTINCT ?person ?personLabel ?deathDate
WHERE {
  GRAPH <https://swiss-elites.lod4hss.cloud/resource/> {
    ?person a crm:E21 ;
            sdh-short:P13 ?deathDate ;
            sdh-short:P9 ?personLabel .
    FILTER(xsd:integer(?deathDate) < 2000)
  }
}
```
E05 - How many individuals have a recorded death date?
```
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX sdh-short: <https://sdhss.org/ontology/shortcuts/>
SELECT (COUNT(DISTINCT ?person) AS ?personCount)
WHERE {
  GRAPH <https://swiss-elites.lod4hss.cloud/resource/> {
    ?person a crm:E21 ;
	sdh-short:P13 ?deathDate.
  }
}
```
E06 - Which individuals were born in Bern?
```
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX sdh: <https://sdhss.org/ontology/core/>
PREFIX sdh-short: <https://sdhss.org/ontology/shortcuts/>
PREFIX swel: <https://elites-suisses.lod4hss.org/resource/>
SELECT DISTINCT ?person ?personLabel
WHERE {
  GRAPH <https://swiss-elites.lod4hss.cloud/resource/> {
    ?birth a crm:E67 ;
            crm:P98 ?person ;
		sdh:P6 swel:gp51.
    ?person sdh-short:P9 ?personLabel .
  }
}
```
E07 - Which individuals studied at the University of Geneva?
```
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX sdh: <https://sdhss.org/ontology/core/>
PREFIX sdh-sls: <https://sdhss.org/ontology/social-life-specific/>
PREFIX sdh-short: <https://sdhss.org/ontology/shortcuts/>
PREFIX swel: <https://elites-suisses.lod4hss.org/resource/>
SELECT DISTINCT ?person ?personLabel
WHERE {
  GRAPH <https://swiss-elites.lod4hss.cloud/resource/> {
    ?study a sdh-sls:C7 ;
            sdh-sls:P9 ?person ;
	sdh-sls:P17 swel:g84.
    ?person sdh-short:P9 ?personLabel .
  }
}
```
E08 - Which individuals obtained a doctorate?
```
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX sdh: <https://sdhss.org/ontology/core/>
PREFIX sdh-sls: <https://sdhss.org/ontology/social-life-specific/>
PREFIX sdh-short: <https://sdhss.org/ontology/shortcuts/>
PREFIX swel: <https://elites-suisses.lod4hss.org/resource/>
SELECT DISTINCT ?person ?personLabel
WHERE {
  GRAPH <https://swiss-elites.lod4hss.cloud/resource/> {
    ?study a sdh-sls:C7 ;
            sdh-sls:P9 ?person ;
	sdh-sls:P10 swel:stu-tit7.
    ?person sdh-short:P9 ?personLabel .
  }
}
```
E09 - Who are the children of Alain Berset, born 1972
```
# This is the query with no answer

PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX sdh-short: <https://sdhss.org/ontology/shortcuts/>
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX swel: <https://elites-suisses.lod4hss.org/resource/>
SELECT DISTINCT ?children ?children_label
WHERE {
  GRAPH <https://swiss-elites.lod4hss.cloud/resource/> {
    ?birth crm:P98 ?children ;
            crm:P97 swel:p69819 .
?children sdh-short:P9 ?children_label .
  }
}
```
E10 - Which individuals were members of the Swiss Federal Council?
```
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX sdh: <https://sdhss.org/ontology/core/>
PREFIX sdh-slc: <https://sdhss.org/ontology/social-life-core/>
PREFIX sdh-short: <https://sdhss.org/ontology/shortcuts/>
PREFIX swel: <https://elites-suisses.lod4hss.org/resource/>
SELECT DISTINCT ?person ?personLabel
WHERE {
  GRAPH <https://swiss-elites.lod4hss.cloud/resource/> {
    ?membership a sdh-slc:C5 ;
            sdh-slc:P1 ?person ;
	sdh-slc:P2 swel:g80.
    ?person sdh-short:P9 ?personLabel .
  }
}
```
E11 - List all individuals with a recorded birth date.
```
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX sdh-short: <https://sdhss.org/ontology/shortcuts/>
SELECT DISTINCT ?person ?personLabel ?birthDate
WHERE {
  GRAPH <https://swiss-elites.lod4hss.cloud/resource/> {
    ?person a crm:E21 ;
            sdh-short:P2 ?birthDate .
    ?person sdh-short:P9 ?personLabel .
  }
}
```
E12 - Which are the political parties?
```
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX sdh: <https://sdhss.org/ontology/core/>
PREFIX sdh-short: <https://sdhss.org/ontology/shortcuts/>
PREFIX swel: <https://elites-suisses.lod4hss.org/resource/>
SELECT DISTINCT ?party ?partyLabel
WHERE {
  GRAPH <https://swiss-elites.lod4hss.cloud/resource/> {
    ?party a crm:E74 ;
            sdh:P99 swel:g-ty9 .
    ?party sdh-short:P9 ?partyLabel .
  }
}
```
E13 - How many individuals were members of a political party?
```
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX sdh: <https://sdhss.org/ontology/core/>
PREFIX sdh-slc: <https://sdhss.org/ontology/social-life-core/>
PREFIX sdh-short: <https://sdhss.org/ontology/shortcuts/>
PREFIX swel: <https://elites-suisses.lod4hss.org/resource/>
SELECT (COUNT(DISTINCT ?person) AS ?personCount)
WHERE {
  GRAPH <https://swiss-elites.lod4hss.cloud/resource/> {
    ?membership a sdh-slc:C5 ;
            sdh-slc:P1 ?person ;
	sdh-slc:P2 ?group.
?group sdh:P99 swel:g-ty9 .
  }
}
```
E14 - How many women are documented in the database?
```
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX sdh-slc: <https://sdhss.org/ontology/social-life-core/>
PREFIX swel: <https://elites-suisses.lod4hss.org/resource/>
SELECT (COUNT(DISTINCT ?women) AS ?womenCount)
WHERE {
  GRAPH <https://swiss-elites.lod4hss.cloud/resource/> {
    ?women a crm:E21 ;
            sdh-slc:P23 swel:gen1  .
  }
}
```
E15 - Which individuals were born between 1900 and 1920?
```
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX sdh-short: <https://sdhss.org/ontology/shortcuts/>
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
SELECT DISTINCT ?person ?personLabel ?birthDate
WHERE {
  GRAPH <https://swiss-elites.lod4hss.cloud/resource/> {
    ?person a crm:E21 ;
            sdh-short:P2 ?birthDate ;
            sdh-short:P9 ?personLabel .
FILTER(xsd:integer(?birthDate) >= 1900 && ?birthDate <= 1920)
  }
}
ORDER BY ?birthDate
```
E16 - How many individuals were born in the 1950s?
```
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX sdh-short: <https://sdhss.org/ontology/shortcuts/>
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
SELECT (COUNT(DISTINCT ?person) AS ?personCount)
WHERE {
  GRAPH <https://swiss-elites.lod4hss.cloud/resource/> {
    ?person a crm:E21 ;
            sdh-short:P2 ?birthDate  .
FILTER(xsd:integer(?birthDate) >= 1950 && ?birthDate <= 1959)
  }
}
```
E17 - Which individuals obtained a law degree?
```
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX sdh: <https://sdhss.org/ontology/core/>
PREFIX sdh-sls: <https://sdhss.org/ontology/social-life-specific/>
PREFIX sdh-short: <https://sdhss.org/ontology/shortcuts/>
PREFIX swel: <https://elites-suisses.lod4hss.org/resource/>
SELECT DISTINCT ?person ?personLabel
WHERE {
  GRAPH <https://swiss-elites.lod4hss.cloud/resource/> {
    ?study a sdh-sls:C7 ;
            sdh-sls:P9 ?person ;
	sdh-sls:P25 swel:stu-dis19.
    ?person sdh-short:P9 ?personLabel .
  }
}
```
E18 - Which individuals were members of a parliamentary commission?
```
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX sdh: <https://sdhss.org/ontology/core/>
PREFIX sdh-slc: <https://sdhss.org/ontology/social-life-core/>
PREFIX sdh-short: <https://sdhss.org/ontology/shortcuts/>
PREFIX swel: <https://elites-suisses.lod4hss.org/resource/>
SELECT (COUNT(DISTINCT ?person) AS ?personCount)
WHERE {
  GRAPH <https://swiss-elites.lod4hss.cloud/resource/> {
    ?membership a sdh-slc:C5 ;
            sdh-slc:P1 ?person ;
	sdh-slc:P2 ?group.
?group sdh:P99 swel:g-ty14 .
  }
}
```
E19 - Who are the parents of Gustave Ador-Perdonnet?
```
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX sdh-short: <https://sdhss.org/ontology/shortcuts/>
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
PREFIX swel: <https://elites-suisses.lod4hss.org/resource/>
SELECT DISTINCT ?father ?fatherLabel ?mother ?motherLabel
WHERE {
  GRAPH <https://swiss-elites.lod4hss.cloud/resource/> {
    ?birth crm:P98 swel:p50633 ;
            crm:P97 ?father ;
	crm:P96 ?mother.
  }
}
```
E20 - What are the ten earliest recorded birth dates?
```
PREFIX sdh-short: <https://sdhss.org/ontology/shortcuts/>
PREFIX crm: <http://www.cidoc-crm.org/cidoc-crm/>
SELECT ?person ?personLabel ?birthDate
WHERE {
  GRAPH <https://swiss-elites.lod4hss.cloud/resource/> {
    ?person a crm:E21 ;
            sdh-short:P2 ?birthDate ;
            sdh-short:P9 ?personLabel .
  }
}
ORDER BY ?birthDate
LIMIT 10
```
