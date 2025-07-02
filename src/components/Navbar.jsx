import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const sidebarRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target)
            ) {
                setIsSidebarOpen(false);
                console.log("clicked outside");
            }
        };

        if (isSidebarOpen) {
            document.addEventListener("mousedown", handleClickOutside, { passive: false });
            document.addEventListener("touchstart", handleClickOutside, { passive: false });
            console.log("tracking clicks outside");
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
            console.log("cleaned up listeners");
        };
    }, [isSidebarOpen]);

    // Close sidebar when a link is clicked (mobile only)
    const handleLinkClick = (event) => {
        event.preventDefault();
        setIsSidebarOpen(false);
        const href = event.target.getAttribute("href");
        if (href) {
            window.location.href = href;
        }
    };

    // Handle button click to explicitly open or close sidebar
    const handleButtonClick = (event) => {
        event.stopPropagation(); // Prevent event from reaching document
        setIsSidebarOpen((prev) => {
            console.log("Button clicked, isSidebarOpen:", !prev);
            return !prev;
        });
    };

    return (
        <div>
            <button
                ref={buttonRef}
                type="button"
                className="fixed items-center p-1 top-4 bg-primary-color left-4 text-sm text-gray-50 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 hover:text-gray-950 cursor-pointer"
                onClick={handleButtonClick}
                onTouchStart={(event) => event.stopPropagation()} // Prevent touchstart propagation
            >
                <span className="sr-only">Open sidebar</span>
                <svg className="w-8 h-8" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    ></path>
                </svg>
            </button>

            <aside
                ref={sidebarRef}
                id="default-sidebar"
                className={`${isSidebarOpen ? " fixed top-12.5" : "hidden"} lg:fixed lg:block top-0 left-0 z-40 w-56`}
                aria-label="Sidebar"
            >
                <div className="px-3 py-4 overflow-y-auto bg dark:bg-gray-800">
                    <ul className="space-y-2 font-medium text-black bg-white/95 md:bg-white/0 rounded-3xl">
                        <li>
                            <NavLink
                                to="/"
                                onClick={handleLinkClick}
                                className={({ isActive }) => `flex items-center gap-2 p-2 rounded-lg bg-gray-100 hover:bg-gray-200 group transition-all ${isActive ? 'text-red-600' : ''}`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        <span
                                            className={`w-3 h-3 rounded-full shadow-xs  shadow-gray-700  group-hover:bg-red-500 ${isActive ? 'bg-red-500' : 'bg-green-600'
                                                }`}
                                        ></span>
                                        Home
                                    </>
                                )}
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/about-me"
                                onClick={handleLinkClick}
                                className={({ isActive }) =>
                                    `flex items-center gap-2 p-2 rounded-lg bg-gray-100 hover:bg-gray-200 group transition-all ${isActive ? 'text-red-600' : ''
                                    }`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        <span
                                            className={`w-3 h-3 rounded-full shadow-xs  shadow-gray-700  group-hover:bg-red-500 ${isActive ? 'bg-red-500' : 'bg-green-600'
                                                }`}
                                        ></span>
                                        About Me
                                    </>
                                )}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/2005"
                                onClick={handleLinkClick}
                                className={({ isActive }) =>
                                    `flex items-center gap-2 p-2 rounded-lg bg-gray-100 hover:bg-gray-200 group transition-all ${isActive ? 'text-red-600' : ''
                                    }`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        <span
                                            className={`w-3 h-3 rounded-full shadow-xs  shadow-gray-700  group-hover:bg-red-500 ${isActive ? 'bg-red-500' : 'bg-green-600'
                                                }`}
                                        ></span>
                                        Exhibition 2005
                                    </>
                                )}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/2006"
                                onClick={handleLinkClick}
                                className={({ isActive }) =>
                                    `flex items-center gap-2 p-2 rounded-lg bg-gray-100 hover:bg-gray-200 group transition-all ${isActive ? 'text-red-600' : ''
                                    }`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        <span
                                            className={`w-3 h-3 rounded-full shadow-xs  shadow-gray-700  group-hover:bg-red-500 ${isActive ? 'bg-red-500' : 'bg-green-600'
                                                }`}
                                        ></span>
                                        Exhibition 2006
                                    </>
                                )}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/2007"
                                onClick={handleLinkClick}
                                className={({ isActive }) =>
                                    `flex items-center gap-2 p-2 rounded-lg bg-gray-100 hover:bg-gray-200 group transition-all ${isActive ? 'text-red-600' : ''
                                    }`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        <span
                                            className={`w-3 h-3 rounded-full shadow-xs  shadow-gray-700  group-hover:bg-red-500 ${isActive ? 'bg-red-500' : 'bg-green-600'
                                                }`}
                                        ></span>
                                        2007 Paintings
                                    </>
                                )}
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/enteriors"
                                onClick={handleLinkClick}
                                className={({ isActive }) =>
                                    `flex items-center gap-2 p-2 rounded-lg bg-gray-100 hover:bg-gray-200 group transition-all ${isActive ? 'text-red-600' : ''
                                    }`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        <span
                                            className={`w-3 h-3 rounded-full shadow-xs  shadow-gray-700  group-hover:bg-red-500 ${isActive ? 'bg-red-500' : 'bg-green-600'
                                                }`}
                                        ></span>
                                        Art For Enterior
                                    </>
                                )}
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/feedback"
                                onClick={handleLinkClick}
                                className={({ isActive }) =>
                                    `flex items-center gap-2 p-2 rounded-lg bg-gray-100 hover:bg-gray-200 group transition-all ${isActive ? 'text-red-600' : ''
                                    }`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        <span
                                            className={`w-3 h-3 rounded-full shadow-xs  shadow-gray-700  group-hover:bg-red-500 ${isActive ? 'bg-red-500' : 'bg-green-600'
                                                }`}
                                        ></span>
                                        Feedback
                                    </>
                                )}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact-me"
                                onClick={handleLinkClick}
                                className={({ isActive }) =>
                                    `flex items-center gap-2 p-2 rounded-lg bg-gray-100 hover:bg-gray-200 group transition-all ${isActive ? 'text-red-600' : ''
                                    }`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        <span
                                            className={`w-3 h-3 rounded-full shadow-xs  shadow-gray-700  group-hover:bg-red-500 ${isActive ? 'bg-red-500' : 'bg-green-600'
                                                }`}
                                        ></span>
                                        Contact Me
                                    </>
                                )}
                            </NavLink>
                        </li>

                    </ul>
                </div>
            </aside>
        </div>
    );
}