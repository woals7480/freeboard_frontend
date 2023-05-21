import { uuidv4 } from "@firebase/util";
import { getDate } from "../../../../commons/utils/utils";
import Pagination01 from "../../../commons/pagination/01/Pagination01.container";
import Searchbars01 from "../../../commons/searchbars/01/Searchbars01.container";
import * as S from "./BoardList.styles";
import { IBoardListUIProps } from "./BoardList.types";

export default function BoardListUI(props: IBoardListUIProps) {
  return (
    <S.Wrapper>
      <Searchbars01
        refetch={props.refetch}
        onChangeKeyword={props.onChangeKeyword}
        refetchBoardsCount={props.refetchBoardsCount}
      />
      <S.TableTop />
      <S.Row>
        <S.ColumnHeaderBasic>ID</S.ColumnHeaderBasic>
        <S.ColumnHeaderTitle>제목</S.ColumnHeaderTitle>
        <S.ColumnHeaderBasic>작성자</S.ColumnHeaderBasic>
        <S.ColumnHeaderBasic>날짜</S.ColumnHeaderBasic>
      </S.Row>

      {props.data?.fetchBoards.map((el, index) => (
        <S.Row key={el._id} onClick={props.onClickonBoardDetail} id={el._id}>
          <S.ColumnBasic>{index + 1}</S.ColumnBasic>
          <S.ColumnTitle>
            {el.title
              .replaceAll(props.keyword, `@%^*${props.keyword}@%^*`)
              .split("@%^*")
              .map((el) => (
                <S.TextToken key={uuidv4()} isMatched={props.keyword === el}>
                  {el}
                </S.TextToken>
              ))}
          </S.ColumnTitle>
          <S.ColumnBasic>{el.writer}</S.ColumnBasic>
          <S.ColumnBasic>{getDate(el.createdAt)}</S.ColumnBasic>
        </S.Row>
      ))}
      <S.TableBottom />
      <S.Footer>
        <Pagination01 refetch={props.refetch} count={props.count} />
        <S.Button onClick={props.onClickMoveToBoardNew}>
          <S.PencilIcon src="/images/board/list/write.png" />
          게시물 등록하기
        </S.Button>
      </S.Footer>
    </S.Wrapper>
  );
}
