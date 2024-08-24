import React from "react";
import { AppBody, Container } from "./styles";
import AppHeader from "../AppHeader";

type ScreenProps = {
    title?: string;
    children?: React.ReactNode;
};

export default function AppScreen({ children, title }: ScreenProps) {
    return (
        <Container>
            <AppBody>
                <AppHeader title={title} />
                {children}
            </AppBody>
        </Container>
    );
}
