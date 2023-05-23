import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilValueLoadable } from "recoil";
import { restoreAccessTokenLodable } from "../../../commons/store";

export function useAuth() {
  const router = useRouter();
  const restoreAccessToken = useRecoilValueLoadable(restoreAccessTokenLodable);
  useEffect(() => {
    void restoreAccessToken.toPromise().then((newAccessToken) => {
      if (!newAccessToken) {
        Modal.error({ content: "로그인 후 이용가능합니다." });
        void router.push("/login");
      }
    });
  }, []);
}
