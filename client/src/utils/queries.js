import { gql } from "@apollo/client";

export const QUERY_GET_ME = gql`
  query get_me {
    me {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;
