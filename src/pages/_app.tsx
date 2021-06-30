import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider, CssBaseline, Container } from '@material-ui/core';
import { theme } from 'styles/teme';
import { Provider } from 'mobx-react';
import { stores } from 'stores';
import { useState } from 'react';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [store] = useState(stores(pageProps));
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title> test</title>
      </Head>
      <CssBaseline />
      <Provider {...store}>
        <Container style={{ width: 750, margin: '0 auto', padding: 0 }}>
          <Component {...pageProps} />
        </Container>
      </Provider>
    </ThemeProvider>
  );
};
export default MyApp;
