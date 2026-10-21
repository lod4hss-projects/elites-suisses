# Draft document for SPARQL-LLM Evaluation

For evaluating the SPARQL-LLM tool developped for the LESSH project, we need to define what is evaluated and what are the metrics

## What to evaluate

We need to evaluate the effectivness of the tool for:
- The pipeline: fixed SPARQL pipeline vs. MCP sgent
- The LLM size (small, medium and large)
- The complexity of the query (simple, medium and complec)

The difficult part here is defining what is a small, medium and complex query. Also, how many queries should be tested? And how many times each query should be done?

Another comparison would be between the SPARQL answer and the natural answer, but as both are based on the same pipeline, evaluating the natural answer tool should be enough?

Another element to evaluate is if the number of examples provided help the LLM in providing an appropriate answer.

## Metrics

To correctly evaluate the different variables of the tools (pipeline, LLM size and complexity of queries), we need to define the evaluation metrics.

The metrics that could be taken into account would be:
- The time taken to provide an answer
- The number of token taken by the LLM to provide an answer
- The correctness of the answer

The hardnest part to measure is the correctness of the answer. Should it just be if the output is correct (that the query provides the correct result) or also how precise the query is (for instance if the LLM searches for labels or if it identifies the correct entity)?

## Evaluation tools

Ragas?
- https://www.ragas.io/
- https://docs.ragas.io/en/stable/