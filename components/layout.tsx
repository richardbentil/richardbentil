import Head from "next/head";
import Script from "next/script";
import React from "react";
import Header from "./header";
import Footer from "./footer";

function Layout({ children }: any) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Lato:300,400,700&amp;display=swap"
        />
      </Head>
      <Header />
      {children}
      <Footer />
      <Script src="/js/bootstrap.min.js" />
      <Script src="/js/pikaday.min.js" />
      <Script src="/js/theme.js" />
    </>
  );
}

export default Layout;
