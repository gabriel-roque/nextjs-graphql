import 'bootstrap/dist/css/bootstrap.min.css';

import App from 'next/app';
import Head from 'next/head';
import React from 'react';

import { ApolloProvider } from '@apollo/client';
import { client } from '../graphql/apollo-client';

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>NestJS + GraphQL</title>
        </Head>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </>
    );
  }
}
