import Navbar from "../components/Navbar";
import PageTitle from "../components/PageTitle";


export default function AboutMePage() {
    return (
        <div className="flex flex-col gap-2 h-full w-full items-center font-mono overflow-x-hidden min-h-screen bg-orange-primary text-gray-100 transition-opacity duration-700">
            <PageTitle />
            <div className="flex h-auto w-90% text-center flex-col items-center gap-4 m-5 p-7 border border-gray-800 rounded shadow-2xl shadow-gray-500 bg-gray-600 lg:w-[58%] xl:w-[65%]">
                <img
                    src={`${import.meta.env.BASE_URL}/licagonlag001.jpg`}
                    alt="Image of younger Lisa "
                    className="w-[60vw] sm:w-[30vw] lg:w-[20vw] h-auto max-w-full object-cover"
                />
                <h4 className="text-xl sm:text-2xl">About Me</h4>
                <p className="font-sans sm:text-xl">Liça Gonlag, a native of the Netherlands and young mother, has been living in Germany with her family since 2003. She began painting after the birth of her second son in 2004. Before coming to Germany, she lived and worked with her husband in Australia, where her first son was born.</p>
                <p className="font-sans sm:text-xl">The peaceful nature of the Aborigines and the unique flora and fauna of Australia have left a lasting impression on Liça Gonlag and now form the foundation of her painting style. Elements of traditional indigenous art combined with Liça's positive outlook on life result in new, expressive, and moving images.</p>
                <p className="font-sans sm:text-xl">The important themes in Liça's life—harmony and happiness, motherhood, nature, and God—are reflected in her paintings in a unique way.</p>
            </div>
        </div>
    )
};
