import type { AppProps } from "next/app";
import "@/pages/styles.css";

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
