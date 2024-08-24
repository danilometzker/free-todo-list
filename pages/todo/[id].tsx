import { useRouter } from "next/router";

export default function Home() {
    const router = useRouter();

    return <h1>Essa é a pagina da tarefa {router.query.id}</h1>;
}
