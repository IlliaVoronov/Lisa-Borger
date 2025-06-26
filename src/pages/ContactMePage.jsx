import PageTitle from "../components/PageTitle";


export default function ContactMePage() {
    return (
        <div className="flex flex-col gap-2 h-full w-full items-center font-mono overflow-x-hidden min-h-screen bg-orange-primary text-gray-100 transition-opacity duration-700">
            <PageTitle />
            <div className="flex h-auto w-[90%] md:w-[70%] lg:w-[48%] xl:w-[43%] text-center flex-col items-center gap-4 m-5 p-7 border border-gray-800 rounded shadow-2xl shadow-gray-500 bg-gray-600">
                <h2 className="text-2xl sm:text-4xl">Easy ways to contact me</h2>
                <p className="font-sans text-xl sm:text-2xl">If you are interested in my art or have any other questions, please write an email or call me.</p>
                <div className="flex flex-col gap-6 mt-2 sm:flex-row">
                    <a className="bg-orange-primary px-2 sm:px-4 py-3 rounded-3xl flex text-center items-center justify-center hover:bg-white transition-all hover:text-orange-primary" href="mailto:tgonlag@hotmail.com">tgonlag@hotmail.com</a>
                    <a className="bg-orange-primary px-2 sm:px-4 py-3 rounded-3xl flex text-center items-center justify-center hover:bg-white transition-all hover:text-orange-primary sm:flex-col" href="tel:+4976211610366"><span>Tel.</span> <span className="whitespace-nowrap">+49 (0)7621-1610366</span></a>
                </div>

            </div>
        </div>
    );
}