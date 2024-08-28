import React, { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/router";
import {
    Checkbox,
    CheckboxClick,
    Container,
    GotoItem,
    Item,
    ItemData,
    ItemDescription,
    ItemTitle,
    LottieContainer,
} from "./styles";
import Link from "next/link";
import * as CheckboxLottie from "@/assets/lottie/checkbox2.json";
import { RiArrowDropRightLine, RiArrowRightFill } from "react-icons/ri";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

type TodoItemProps = {
    id: number;
    done: boolean;
    title: string;
    description?: string;
};

export default function TodoItem(item: TodoItemProps) {
    const router = useRouter();
    const [done, setDone] = useState(false);

    const checkboxOptions = {
        name: item.id,
        loop: false,
        autoplay: false,
        animationData: CheckboxLottie,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    const toggleItem = (id: number) => {
        setDone((prev) => !prev);
        console.log("ok", id, done);
    };

    const handleClick = (e: any) => {
        toggleItem(item.id);
        console.log(item.id);
    };

    const goTo = (e: any) => {
        console.log(item.id);
        router.push(`/todo/${item.id}`);
    };

    return (
        <Item>
            <Checkbox>
                <LottieContainer>
                    <Lottie
                        options={checkboxOptions}
                        height={120}
                        width={120}
                        isStopped={!done}
                        isPaused={!done}
                    />
                    <CheckboxClick onClick={handleClick}></CheckboxClick>
                </LottieContainer>
            </Checkbox>
            <ItemData onClick={goTo}>
                <ItemTitle>{item.title}</ItemTitle>
                <ItemDescription>{item.description}</ItemDescription>
            </ItemData>
            <Link href={`/todo/${item.id}`}>
                <GotoItem>
                    <RiArrowDropRightLine color="#fff" size={48} />
                </GotoItem>
            </Link>
        </Item>
    );
}
