import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    void router.push("/boards");
  }, []);
  return <></>;
}
