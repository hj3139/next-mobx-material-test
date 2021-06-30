import React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
} from 'next/document';
import { ServerStyleSheets } from '@material-ui/core';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const materialSheet = new ServerStyleSheet();
    const styleSheet = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props =>
          materialSheet.collectStyles(styleSheet.collect(<App {...props} />))
      });

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: [
        ...React.Children.toArray(initialProps.styles),
        materialSheet.getStyleElement(),
        styleSheet.getStyleElement()
      ]
    };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name='theme-color' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
