import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="title" content="Global Dining" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta property="og:description" content="" />
        <link rel="icon" href="" color="/favicon-16.png" />
        <meta name="theme-color" content={'#FFFFFF'} />
        <meta name="emotion-insertion-point" content="" />
        <title>Global Dining</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
