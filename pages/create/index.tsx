import { useApp } from "@/contexts/AppContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function CreateTask() {
    const router = useRouter();
    const { setHeaderTitle } = useApp();

    useEffect(() => {
        setHeaderTitle(`Criar nova tarefa`);
    }, [router]);

    return <></>;
}
