import { gql } from "@apollo/client";

export const FETCH_POINT_TRANSACTIONS_OF_BUYING = gql`
  query fetchPointTransactionsOfBuying($page: Int) {
    fetchPointTransactionsOfBuying(page: $page) {
      _id
      amount
      balance
      createdAt
      useditem {
        _id
        name
      }
    }
  }
`;

export const FETCH_POINT_TRANSACTIONS_COUNT_OF_BUYING = gql`
  query fetchPointTransactionsCountOfBuying {
    fetchPointTransactionsCountOfBuying
  }
`;
