import PageTitle from "../components/PageTitle";


function Home() {

    return (
        <div className="flex flex-col gap-2 h-full w-full items-center font-mono overflow-x-hidden">
            <PageTitle />
            <div className="flex h-auto w-90% text-center flex-col items-center gap-4 m-5 p-7 border border-gray-800 rounded shadow-2xl shadow-gray-500 bg-gray-600 lg:w-[58%] xl:w-[65%]">
                <h2 className="text-xl sm:text-3xl">Welcome!</h2>
                <h4 className="text-xl sm:text-3xl">Thank you for visiting this site!</h4>
                <p className="sm:text-xl">Here you will find everything there is to know about my work and exhibitions.</p>
                <img
                    src={`${import.meta.env.BASE_URL}/welcome.jpg`}
                    alt="Image of Lisa Painting"
                    className="object-cover w-auto h-[100vw] sm:h-[70vw] md:h-[60vw] lg:h-[45vw] xl:h-[30vw]"
                    onLoad={() => console.log('Image loaded successfully')}
                    onError={(e) => {
                        console.log('Image failed to load');
                        console.log('Attempted URL:', e.target.src);
                        console.log('Error event:', e);
                    }}
                />
            </div>
        </div>

    );
}

export default Home;