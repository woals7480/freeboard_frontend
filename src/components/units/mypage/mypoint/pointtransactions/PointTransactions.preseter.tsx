import { getDate } from "../../../../../commons/utils/utils";
import PaymentButtonPage from "../../../../commons/buttons/paymentButton";
import { useMoveToPage } from "../../../../commons/hooks/useMovetoPage";
import Pagination02 from "../../../../commons/pagination/02/Pagination02.container";
import * as S from "./PointTransactions.styles";
import { IPointTransactionsPageUIProps } from "./PointTransactions.types";

export default function PointTransactionsPageUI(
  props: IPointTransactionsPageUIProps
) {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <S.Wrapper>
      <S.TopWrapper>
        <S.OptionWrapper>
          <S.OptionCurrentPage
            onClick={onClickMoveToPage("/mypages/mypoint/pointtransactions")}
          >
            전체내역
          </S.OptionCurrentPage>
          <span style={{ margin: "0 10px" }}> | </span>
          <S.OptionNonCurrentPage
            onClick={onClickMoveToPage("/mypages/mypoint/transactionsloading")}
          >
            충전내역
          </S.OptionNonCurrentPage>
          <span style={{ margin: "0 10px" }}> | </span>
          <S.OptionNonCurrentPage
            onClick={onClickMoveToPage("/mypages/mypoint/transactionsbuying")}
          >
            구매내역
          </S.OptionNonCurrentPage>
          <span style={{ margin: "0 10px" }}> | </span>
          <S.OptionNonCurrentPage
            onClick={onClickMoveToPage("/mypages/mypoint/transactionsselling")}
          >
            판매내역
          </S.OptionNonCurrentPage>
          <PaymentButtonPage />
        </S.OptionWrapper>
      </S.TopWrapper>
      <S.TableTop />
      <S.Row>
        <S.ColumnHeaderBasic>날짜</S.ColumnHeaderBasic>
        <S.ColumnHeaderBasic>내용</S.ColumnHeaderBasic>
        <S.ColumnHeaderBasic>거래 및 충전내역</S.ColumnHeaderBasic>
        <S.ColumnHeaderBasic>잔액</S.ColumnHeaderBasic>
      </S.Row>

      {props.data?.fetchPointTransactions.map((el) => (
        <S.Row key={el._id}>
          <S.ColumnBasic>{getDate(el.createdAt)}</S.ColumnBasic>
          <S.ColumnStatus isStatus={el.status}>{el.status}</S.ColumnStatus>
          <S.ColumnStatus isStatus={el.status}>{el.amount}</S.ColumnStatus>
          <S.ColumnBasic>{`₩ ${el.balance.toLocaleString()}원`}</S.ColumnBasic>
        </S.Row>
      ))}
      <S.TableBottom />
      <S.Footer>
        <Pagination02 refetch={props.refetch} count={props.count} />
      </S.Footer>
    </S.Wrapper>
  );
}
