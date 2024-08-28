import React, { useEffect } from "react";
import {
    AppHeaderContainer,
    AppHeaderNavigation,
    AppHeaderTitle,
    PressableIcon,
} from "./style";
import { RiArrowLeftSFill } from "react-icons/ri";
import { useRouter } from "next/router";
import Link from "next/link";

type HeaderProps = {
    title?: string;
};

export default function AppHeader(header: HeaderProps) {
    const router = useRouter();

    const handleBack = () => {
        router.back();
    };

    return (
        <AppHeaderContainer>
            <AppHeaderNavigation>
                {router.pathname != "/" && (
                    <PressableIcon onClick={handleBack}>
                        <RiArrowLeftSFill size={32} color="#fff" />
                    </PressableIcon>
                )}
                <AppHeaderTitle>{header.title}</AppHeaderTitle>
            </AppHeaderNavigation>
        </AppHeaderContainer>
    );
}
