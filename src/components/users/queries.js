import { gql } from 'apollo-boost';

export const usersQuery = gql`
    query usersQuery{
        users {
            email
            password
        }
    }
`;