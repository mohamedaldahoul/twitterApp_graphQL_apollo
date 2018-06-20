import express from 'express';
import {graphqlExpress, graphiqlExpress} from 'apollo-server-express';
import bodyParser from 'body-parser';

const server = express();

server.use('/graphiql',
    graphiqlExpress({
        endpointURL: "/graphql"
    })
);

server.use('/graphql', bodyParser.json(), graphqlExpress({}));

server.listen(4000, ()=>{
    console.log('Listening on post 4000');
    
});