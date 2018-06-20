import {makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';

const typeDefs = `
    type Author{
        age: Int
        name: String
        Books: [String]
    }
    type Query{
        auther: [Author]
    }
`

const schema = makeExecutableSchema({typeDefs});

export default schema;