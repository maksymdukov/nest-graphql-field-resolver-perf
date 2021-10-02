#!/bin/bash

echo '=============RUNNIG TEST AGAINST NESTJS-GRAPHQL SERVER============='
echo '200 requests with concurrency 1 to measure mean latency'
loadtest -k -n 200 -c 1 -T application/json -p ./load-test/query.js http://localhost:3339/graphql
echo '=============RUNNIG TEST AGAINST PURE APOLLO-GRAPHQL SERVER============='
echo '200 requests with concurrency 1 to measure mean latency'
loadtest -k -n 200 -c 1 -T application/json -p ./load-test/query.js http://localhost:3339/graphql-pure