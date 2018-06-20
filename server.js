import express from 'express';
import {graphqlExpress, graphiqlExpress} from 'apollo-server-express';
import bodyParser from 'body-parser';
import schema from './schema.js';
import mongoose from 'mongoose';


const server = express();

server.use('/graphiql',
    graphiqlExpress({
        endpointURL: "/graphql"
    })
);

mongoose.connect('mongodb://localhost/twitterApp', {
    useMongoClient: true
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('connection succeed!');
    
})

server.use('/graphql', 
            bodyParser.json(), 
            graphqlExpress({schema}));

server.listen(4000, ()=>{
    console.log('Listening on post 4000');
    
});