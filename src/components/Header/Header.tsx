import {FiSearch} from 'react-icons/fi';
import {NavLink} from "react-router-dom";

export function Header() {

    return (
        <div className="h-16 bg-neutral">
            <header className=" text-neutral-content border-orange-500">
                <nav className="container mx-auto flex items-center navbar">


                    <div className="navbar-start">
                        <div className="font-extrabold text-3xl text-primary font-marhey">يوتوبيا مانجا</div>


                        <div className="relative ml-5 group flex  items-center max-w-3xl  p-1 ">
                            <input
                                type="text"
                                className="z-10 text-sm w-0 transition-all duration-300 focus:w-96 group-hover:w-96 text-neutral pl-2 h-8 pr-8 bg-base-100 border-none rounded-full focus:outline-none text-right"
                                placeholder="بحث"
                            />
                            <div className="absolute text-2xl h-10 left-0   z-10">
                                <div
                                    className="w-16 h-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-full flex justify-center items-center">
                                    <FiSearch className="text-white"/>
                                </div>
                            </div>
                        </div>


                    </div>


                    <ul className="flex space-x-4 items-center navbar-center">
                        <li>
                            <NavLink
                                to="/"
                                className={({isActive}) => `text-neutral-content ${isActive ? 'border-b-2 border-orange-500' : ''}`}
                            >
                                الصفحة الرئيسية
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({isActive}) => `text-neutral-content ${isActive ? 'border-b-2 border-orange-500' : ''}`}
                            >
                                من نحن
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/manga"
                                className={({isActive}) => `text-neutral-content ${isActive ? 'border-b-2 border-orange-500' : ''}`}
                            >
                                قائمة المانجا
                            </NavLink>
                        </li>

                    </ul>
                    <div className="navbar-end space-x-2">
                        <NavLink
                            to="/login"
                            className={`btn btn-xs h-10 px-4 rounded-full btn-primary btn-outline !text-neutral-content border-primary border-2 `}
                        >
                            تسجيل الدخول
                        </NavLink>
                        <NavLink
                            to="/login"
                            className={`btn btn-xs h-10 px-4 rounded-full btn-primary btn-outline !text-neutral-content border-primary border-2 `}
                        >
                            إنشاء حساب
                        </NavLink>
                    </div>
                </nav>
            </header>
        </div>
    );
}
