import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <div className="flex flex-col justify-center content-center items-center py-2 min-h-screen gap-4 text-2xl ">
            <h1>404 This Page is not found.</h1>
            <Link to={"/"} className="bg-gray-500 text-white rounded px-4 py-2 hover:text-orange-default transition duration-300">Go to the Home page</Link>
        </div>
    );
}