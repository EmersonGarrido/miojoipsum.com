import { useEffect } from 'react';
import type { AppProps } from 'next/app'
import '../styles/globals.css';

import TagManager from 'react-gtm-module';

function MyApp({ Component, pageProps }: AppProps) {
  const GTM_ID = 'G-87YD2F6GLF';

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      TagManager.initialize({ gtmId: GTM_ID });
    }
  }, []);

  return <Component {...pageProps} />
}

export default MyApp
