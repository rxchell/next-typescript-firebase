import React from "react";
import Auth from "../components/auth";
import { GetServerSidePropsContext } from "next";
import nookies from "nookies";
import { userIsLoggedIn } from "../firebase/auth/utils";
import LogoSvg from "../images/svg/logo.svg";

export default function Login() {
  return (
      <div className="relative flex items-center justify-center text-center overflow-hidden">
        <LogoSvg width="40rem" height="40rem" />
        <Auth />
      </div>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const cookies = nookies.get(ctx);
  const authenticated = await userIsLoggedIn(cookies);

  if (authenticated) {
    ctx.res.writeHead(302, { Location: "/" });
    ctx.res.end();
  }

  return {
    props: {},
  };
}
