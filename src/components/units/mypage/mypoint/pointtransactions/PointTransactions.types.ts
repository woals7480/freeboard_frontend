import { ApolloQueryResult } from "@apollo/client";
import {
  IQuery,
  IQueryFetchPointTransactionsArgs,
} from "../../../../../commons/types/generated/types";

export interface ITextTokenProps {
  isMatched: boolean;
}

export interface IPointTransactionsPageUIProps {
  data?: Pick<IQuery, "fetchPointTransactions">;
  count: number;
  refetch: (
    variables?: Partial<IQueryFetchPointTransactionsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchPointTransactions">>>;
}

export interface IColumnProps {
  isStatus?: string;
}
