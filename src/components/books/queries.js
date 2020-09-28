import { gql } from 'apollo-boost';

export const booksQuery = gql`
    query booksQuery{
        books {
        id
        cover
        title
        discription
        }
    }
`;