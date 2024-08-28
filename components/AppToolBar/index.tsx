import React, { useEffect } from "react";
import { Container } from "./styles";
import AppHeader from "../AppHeader";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import Link from "next/link";
import { RiAddLargeFill } from "react-icons/ri";
import Item from "./Item";

export default function AppToolBar() {
    const router = useRouter();

    return (
        <Container>
            <Item
                tooltip="Criar tarefa"
                onClick={() => router.push("/create")}
            />
        </Container>
    );
}
