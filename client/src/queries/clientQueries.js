import { gql } from '@apollo/client';


const GET_CLIENTS = gql`
  query getClinets {
    clients {
      id
      name
      email
      phone
    }
  }
`

export { GET_CLIENTS }