import { NextPage } from "next";
import Head from "next/head";
import AppLayout from "../components/AppLayout";

interface IProps {
  Component: any;
  pageProps: any;
}
const myProject = ({ Component, pageProps }: IProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Next.js TypeScript Quickstart</title>
      </Head>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  );
};

export default myProject;
