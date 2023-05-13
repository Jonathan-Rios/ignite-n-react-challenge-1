import { globalStyles } from "../styles/globals";

globalStyles();

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
