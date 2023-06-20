import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { NextPageWithLayout } from '../types/page';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
      <SessionProvider session={pageProps.session}>
        {getLayout(<Component {...pageProps} />)}
      </SessionProvider>
  );
}

export default App;
