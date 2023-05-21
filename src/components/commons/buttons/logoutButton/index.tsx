import { gql, useApolloClient } from "@apollo/client";
import styled from "@emotion/styled";
import { useSetRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../../commons/store";

const LogoutButton = styled.button`
  font-weight: bold;
  margin: 20px;
  color: #f94a4a;
  cursor: pointer;
  border: none;
  background-color: transparent;
`;

const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;

export default function LogoutButtonPage() {
  const client = useApolloClient();
  const setAccessToken = useSetRecoilState(accessTokenState);
  const setUserInfo = useSetRecoilState(userInfoState);

  const onClickLogout = async () => {
    await client.mutate({
      mutation: LOGOUT_USER,
    });
    setAccessToken("");
    setUserInfo({});
    await client.resetStore();
  };

  return (
    <>
      <LogoutButton onClick={onClickLogout}>로그아웃</LogoutButton>
    </>
  );
}
