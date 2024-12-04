import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { VWOScript } from "nextjs-smartcode-injector";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <VWOScript 
        accountId="955578"
        type="OSC"
        settingsTimeout={2000}
        hideElement="body"
        hideElementStyle="opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;transition:none !important;"
        scriptAttributes={{
          strategy: "beforeInteractive"
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
