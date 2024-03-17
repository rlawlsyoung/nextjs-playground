import Head from "next/head";
import React from "react";

const Header = () => {
  return (
    <>
      <Head>
        <title>퀴즈</title>
      </Head>

      <header>
        <h1 className="text-3xl">퀴즈 앱</h1>
      </header>
    </>
  );
};

export default Header;
