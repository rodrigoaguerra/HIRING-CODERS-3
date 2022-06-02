import { ApolloClient, InMemoryCache } from '@apollo/client';

import link from './link';

const cache = new InMemoryCache();

const client = new ApolloClient({
    link,
    cache,
    connectToDevTools: true,
});

export default client;