import AppScreen from "@/components/AppScreen";
import Link from "next/link";
export default function Home() {
    return (
        <>
            <AppScreen title="TODO">
                <Link href={"/todo/24"}>Ir para tarefa</Link>
            </AppScreen>
        </>
    );
}
