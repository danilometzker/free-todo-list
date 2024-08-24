import React from "react";
import { AppBody, Container } from "./styles";
import AppHeader from "../AppHeader";
import { NextSeo } from "next-seo";

type ScreenProps = {
    title?: string;
    children?: React.ReactNode;
};

export default function AppScreen({ children, title }: ScreenProps) {
    return (
        <>
            <NextSeo title={title} />
            <Container>
                <AppBody>
                    <AppHeader title={title} />
                    {children}
                </AppBody>
            </Container>
        </>
    );
}
