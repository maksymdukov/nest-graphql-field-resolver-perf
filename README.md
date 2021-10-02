###Requires Docker to run it:

1. `npm run docker:build`

2. `npm run docker:run`

### Results:

#### With nested field resolvers (on both @nestjs/graphql and apollo-server-express):

`@nestjs/graphql` - mean latency `110ms`

`pure apollo-graphql` - mean latency `21ms`

#### Without field resolvers (on both @nestjs/graphql and apollo-server-express):

`@nestjs/graphql` - mean latency `16ms`

`pure apollo-graphql` - mean latency `16ms`
