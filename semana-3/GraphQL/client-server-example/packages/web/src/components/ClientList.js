import React from "react";
import { gql, useQuery } from '@apollo/client';

const GET_CLIENT_LIST = gql`
    query GET_CLIENT_LIST ($skip: Int!, $take: Int!){
        clients(options: {
            skip: $skip
            take: $take
        }) {
            itens {
                id
                name
                email
            }
            totalItens
        }
    }
`;

const PAGE_SIZE = 10;

export function ClientList({ onSelectClient }) {
    const {
        data,
        error,
        loading,
        fetchMore,
     } = useQuery(GET_CLIENT_LIST, {
        fetchPolicy: 'cache-and-network',
        variables: {
            skip: 0,
            take: PAGE_SIZE,
        },
    });

    const clients = data?.clients.itens ?? [];

    const handleSelectClient = (client) => () => onSelectClient?.(client.id);

    const handleLoadMore = () => {
        fetchMore({
            variables: {
                skip: data.clients.itens.length,
                take: PAGE_SIZE,
            },
            updateQuery: (result, { fetchMoreResult }) => {
                if (!fetchMoreResult) return result;

                return {
                    ...result,
                    clients: {
                        ...result.clients,
                        itens: result.clients.itens.concat(fetchMoreResult.clients.itens),
                        totalItens: fetchMoreResult.clients.totalItens,
                    },
                };
            },
        });
    };

    if(error) 
        return (
            <section>
                <strong>Erro ao buscar os clientes</strong>
            </section>
        );
    
    if(loading && !data) 
        return (
            <section>
                <strong>Carregando...</strong>
            </section>
        );

    return (
        <section>
            <ul>
                {clients.map((client) =>
                    <li onClick={handleSelectClient(client)} key={client.id}>
                        <p>{client.name}</p>
                        <p>{client.email}</p>
                    </li>
                )}
            </ul>
            <button type="button" onClick={handleLoadMore} disabled={loading}>Carregar mais</button>
        </section>
    )
}