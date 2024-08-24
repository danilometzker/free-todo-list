import AppScreen from "@/components/AppScreen";
import { useRouter } from "next/router";

export default function Home() {
    const router = useRouter();

    return (
        <>
            <AppScreen
                title={`Página da tarefa ${router.query.id}`}
            ></AppScreen>
        </>
    );
}
