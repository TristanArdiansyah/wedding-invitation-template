import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* No scripts here */}
      </Head>
      <body>
        <Main />
        <NextScript />

        {/* Move scripts here */}
      </body>
    </Html>
  );
}
