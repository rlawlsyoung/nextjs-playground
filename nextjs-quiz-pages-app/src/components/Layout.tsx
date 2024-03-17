import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="mx-5 my-auto w-[95%] min-h-[80vh]"> {children}</main>
      <Footer />
    </>
  );
};

export default Layout;
