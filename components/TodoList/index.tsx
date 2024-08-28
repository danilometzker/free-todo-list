import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Container } from "./styles";
import Link from "next/link";
import Lottie from "react-lottie";
import * as CheckboxLottie from "@/assets/lottie/checkbox.json";
import { RiArrowDropRightLine, RiArrowRightFill } from "react-icons/ri";
import Item from "./Item";

export default function TodoList() {
    const router = useRouter();
    const [itemList, setItemList] = useState([
        {
            id: 1,
            done: false,
            title: "Titulo da tarefa 1",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quasi deleniti distinctio perferendis cupiditate accusamus, cum nihil!",
        },
        {
            id: 2,
            done: false,
            title: "Titulo da tarefa 2",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quasi deleniti distinctio perferendis cupiditate accusamus, cum nihil!",
        },
    ]);

    const checkboxOptions = {
        loop: false,
        autoplay: false,
        animationData: CheckboxLottie,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
        eventListeners: [
            {
                eventName: "complete",
                callback: () => console.log("the animation completed:"),
            },
        ],
    };

    return (
        <Container>
            {itemList.map((item) => (
                <Item
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    done={item.done}
                    key={item.id}
                />
            ))}
        </Container>
    );
}
