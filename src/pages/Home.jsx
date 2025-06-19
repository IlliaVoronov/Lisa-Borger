

function Home() {

    return (
        <div className="flex flex-col gap-2 h-full w-full items-center font-mono overflow-x-hidden">
            <h1 className="mt-5 text-4xl text-center">Liça's Page of Art</h1>
            <div className="flex text-center flex-col items-center gap-4 m-5 p-7 border border-gray-800 rounded shadow-2xl shadow-gray-500 bg-gray-600 h-auto max-w-[500px] ">
                <h2>Welcome!</h2>
                <h4>Thank you for visiting this site!</h4>
                <p>Here you will find everything there is to know about my work and exhibitions.</p>
                <img
                    src="/welcome.jpg"
                    alt="Image of Lisa Painting"
                    className="w-full h-auto max-w-full object-cover"
                />
            </div>
        </div>

    );
}

export default Home;