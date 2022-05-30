import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';

const app = express();

const PORT =  process.env.PORT ? parseInt(process.env.PORT) : 8000;
const HOSTNAME = process.env.HOSTNAME || '127.0.0.1';

app.listen(PORT, HOSTNAME, async () => {
    console.log(`Server is listening ar http://${HOSTNAME}:${PORT}`);

    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });

    // More required logic for integrating with Express
    await server.start();

    server.applyMiddleware({
        app,
        cors: {
            origin: '*'
        },
    });
});
