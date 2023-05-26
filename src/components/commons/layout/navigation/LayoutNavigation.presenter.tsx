import { Fragment } from "react";
import * as S from "./LayoutNavigation.styles";
import { ILayoutNavigationProps } from "./LayoutNavigation.type";

const NAVIGATION_MENUS = [
  { name: "파이어베이스게시판", page: "/myfirebase" },
  { name: "자유게사판", page: "/boards" },
  { name: "상품게시판", page: "/markets" },
  { name: "마이페이지", page: "/mypages/myprofile" },
];

export default function LayoutNavigationUI(props: ILayoutNavigationProps) {
  return (
    <S.Wrapper>
      {NAVIGATION_MENUS.map((el) => (
        <Fragment key={el.name}>
          <S.MenuItem onClick={props.onClickMenu} id={el.page}>
            {el.name}
          </S.MenuItem>
        </Fragment>
      ))}
    </S.Wrapper>
  );
}
