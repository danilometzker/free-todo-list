import type { AppProps } from "next/app";
import "@/pages/styles.css";
import AppScreen from "@/components/AppScreen";
import AppProvider from "@/contexts/AppContext";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <AppProvider>
                <Component {...pageProps} />
            </AppProvider>
        </>
    );
}
