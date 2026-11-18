# Evaluation Methodology for the LESSH SPARQL-LLM 

## Related Work 

Smeros et al. (2026) distinguish two main approaches to evaluating Knowledge Graph Question Answering (KGQA) systems: 

Lexical overlap metrics: Measure textual similarity between generated and reference SPARQL queries. 

Execution-based metrics: Compare the results returned by generated and reference queries. 

The authors use the TREC F1 score, calculated from the result set of the generated query (G) and that of the reference query (T): 

F1 Score = 2·|𝑇∩𝐺| / |𝑇|+|𝐺| 

When multiple variables are projected, the results are flattened before calculating F1. The overall score is the unweighted average of individual question scores (macro-F1). 

Reference: Smeros, P., et al. (2026). "SPARQL-LLM: Real-time SPARQL query generation from natural language questions." ACM Transactions on the Web, 20(4), 1–21. https://doi.org/10.1145/3847195 

## Evaluation Metrics 

Our system uses LLM-based agents to explore ontologies, retrieve SPARQL examples, execute queries, and iteratively refine them. 

The evaluation therefore covers four dimensions: 

1. Final outcome 
2. Agentic process and efficiency 
3. Reliability 

### Final Outcome 

The distinction between query execution and answer correctness is fundamental: a valid SPARQL query can execute successfully while returning incorrect results.

Moreover, as a semantically accurate query will always provide the same outcome, only exact match of the output will be measured. Precision and Recall could be evaluated at a second moment, to evaluate non-exact matches.

- Mertric 1: Task completion rate. Percentage of questions for which the system produces a final, evaluable answer.
- Metric 2: Task success rate (exact match). Percentage of questions whose final results exactly match the reference results.
- Metric 3: Query efficiency. Execution time of the final query compared with the reference query.

Several conventions must be established for comparing results, particularly for multiple projected variables, COUNT and ASK queries, duplicates, and empty results. RDF identifiers should be compared rather than displayed labels. 

Query efficiency will initially be treated as a diagnostic metric, since execution time also depends on endpoint performance and caching.

### Agentic Process and Efficiency

These metrics evaluate how the agents reach their final answer.

- Metric 4: Number of iterations. Number of candidate query generation and refinement cycles.
- Metric 5: Token consumption. Total input and output tokens across all LLM calls.

A particularly useful comparison will be answer accuracy versus computational cost, to assess whether improvements in accuracy justify additional resources. 

### Robustness and Reliability

Since LLMs may produce different results for identical questions, each question should be evaluated multiple times. 

- Metric 6: Repeated-run success rate. Proportion of independent runs producing the correct answer. 
- Metric 7: Pass@1. Estimated probability that a single complete agent run succeeds. 

### Ablation Study

Ablation studies evaluate the contribution of individual components by disabling them and comparing performance. 

Potential configurations include the full system, a system without SPARQL examples, one without iterative refinement, and one with restricted ontology exploration. 

These experiments could be introduced after the initial evaluation. 

## Building the Benchmark Dataset 

We propose starting with 20–50 manually validated questions, covering different SPARQL operations and levels of difficulty.

SPARQL complexity and linguistic difficulty are two different concepts. 
- SPARQL complexity: Number of joins, intermediate relationships, filters, aggregations, and temporal or logical operations. 
- Linguistic difficulty: Synonyms, implicit relationships, ambiguous formulations, and terminology differing from the ontology. 

This distinction will help identify whether models struggle primarily with interpreting questions or navigating the knowledge graph.

It has been decided to only measure SPARQL Complexity. New questions with different level of Linguistic difficulties could be introduced in a future evaluation.

Each benchmark item should contain:

| Field | Description |
| --- | --- |
| Question ID | Unique identifier for the benchmark question |
| Natural-language question | The question submitted to the system |
| Reference SPARQL query | Manually validated query that correctly answers the question (gold query) |
| Expected results | Results obtained by executing the reference query against a fixed version of the knowledge graph |
| SPARQL difficulty | Classification of the query's structural and logical complexity |
| SPARQL features | Tags identifying relevant operations, such as FILTER, GROUP BY, OPTIONAL, or temporal comparisons |

SPARQL difficulty taxonomy:

| Difficulty | Example Question | SPARQL Challenge |
| --- | --- | --- |
| Easy | List all individuals with a recorded birth date. | Basic graph pattern  |
| Easy | How many individuals are documented? | COUNT DISTINCT |
| Medium | Which individuals were members of a political party? | Multi-hop relationships |
| Medium | How many women were members of each political party? | GROUP BY, COUNT |
| Hard | Which individuals belonged to two different parties? | Self-joins, DISTINCT |
| Hard | Which individuals held a political position during the same period as another individual? | Temporal overlap, multi-hop traversal  |