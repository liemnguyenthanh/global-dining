import type { AppProps } from 'next/app';
import '@/assets/scss/style.scss';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
