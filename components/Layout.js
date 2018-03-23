import React from 'react';
import { Container } from "semantic-ui-react";
import Head from 'next/head';
import Header from './_Header';

export default (props) => {
  return (
    <Container>
      <Head>
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
      </Head>
      <Header />
      {props.children}
      <h1>Footer over here</h1>
    </Container>
  )
}