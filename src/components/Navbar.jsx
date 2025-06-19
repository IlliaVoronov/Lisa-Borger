import { NavLink } from "react-router-dom";


export default function Navbar() {

    return (
        <div>

            <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-56 h-screen transition-transform -translate-x-full md:translate-x-0" aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg dark:bg-gray-800">
                    <ul className="space-y-2 font-medium text-black">
                        <li>
                            <NavLink
                                to="/"
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
                                        Home
                                    </>
                                )}
                            </NavLink>
                        </li>
                        
                        <li>
                            <NavLink
                                to="/about-me"
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
                                to="/enterior"
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
                                to="/contact"
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