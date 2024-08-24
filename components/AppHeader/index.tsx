import React from "react";
import { AppHeaderContainer } from "./style";

type HeaderProps = {
    title?: string;
};

export default function AppHeader(header: HeaderProps) {
    return (
        <AppHeaderContainer>
            <h1>{header.title}</h1>
        </AppHeaderContainer>
    );
}
