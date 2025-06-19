import Carousel from "../components/Carousel";
import Exhibition2005 from "../components/Exhibition2005";


export default function Exhibition2005Page() {
    return (
        <div className="flex flex-col gap-2 h-full w-full items-center font-mono overflow-x-hidden">
            <h1 className="mt-5 text-4xl text-center w-96">Willkommen bei meiner Austellung!</h1>

            <Carousel />
        </div>
    )
}