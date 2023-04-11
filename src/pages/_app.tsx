import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

const emotionCache = createCache({ key: 'css', prepend: true });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <Component {...pageProps} />
    </CacheProvider>
  );
}