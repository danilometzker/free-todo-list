import AppScreen from "@/components/AppScreen";
import { useApp } from "@/contexts/AppContext";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
export default function Home() {
    const router = useRouter();
    const { setHeaderTitle } = useApp();

    useEffect(() => {
        setHeaderTitle(`TODO App`);
    }, [router]);

    return (
        <>
            <Link href={"/todo/24"}>Ir para tarefa</Link>
        </>
    );
}
