import AppScreen from "@/components/AppScreen";
import TodoList from "@/components/TodoList";
import { useApp } from "@/contexts/AppContext";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { RiAddLargeFill } from "react-icons/ri";
export default function Home() {
    const router = useRouter();
    const { setHeaderTitle } = useApp();

    useEffect(() => {
        setHeaderTitle(`TODO App`);
    }, [router]);

    return (
        <>
            <TodoList />
        </>
    );
}
