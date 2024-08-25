import AppScreen from "@/components/AppScreen";
import { useApp } from "@/contexts/AppContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
    const router = useRouter();
    const { setHeaderTitle } = useApp();

    useEffect(() => {
        setHeaderTitle(`Página da tarefa ${router.query.id}`);
    }, [router]);

    return <></>;
}
