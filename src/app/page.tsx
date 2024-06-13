import List from "@/components/molecules/List";
import {defaultBasket} from "@/utils/calculate";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <List list={defaultBasket}/>
        </main>
    );
}
