import { gql } from "apollo-server-express";

export const typeDefs = gql`
    interface List {
        itens: [Node!]!
        totalItens: Int!
    }

    enum ListSortmentEnum {
        ASC
        DESC
    }

    input ListSort {
        sorter: String!
        sortment: ListSortmentEnum! 
    }
`

export const ListSortmentEnum = Object.freeze({
    ASC: 'ASC',
    DESC: 'DESC',
});

export const resolvers = {
    List: {
        __resolveType: () => null,
    },
}

