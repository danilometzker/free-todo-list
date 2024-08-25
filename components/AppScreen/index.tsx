import React, { useEffect } from "react";
import { AppBody, Container } from "./styles";
import AppHeader from "../AppHeader";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

type ScreenProps = {
    title?: string;
    children?: React.ReactNode;
};

export default function AppScreen({ children, title }: ScreenProps) {
    const router = useRouter();

    const largeScreens = ["/todo/[id]"];

    return (
        <>
            <NextSeo title={title} />
            <Container>
                <AppBody large={largeScreens.includes(router.pathname)}>
                    <AppHeader title={title} />
                    {children}
                </AppBody>
            </Container>
        </>
    );
}
