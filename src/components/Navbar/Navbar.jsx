import { list } from 'postcss';
import React, { useState } from 'react';
import Link from '../Link/Link';
import { RiMenu2Fill } from "react-icons/ri";
import { MdMenuOpen } from "react-icons/md";

const Navbar = () => {

    const[open, setOpen] = useState(false)

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/blogs", name: "Blogs" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/profile/:id", name: "Profile" }
    ];
    return (
        <div>
            <div className='text-black bg-yellow-200 ' >
                <div onClick={() => setOpen(!open)}>
                    {
                        open == true ? <MdMenuOpen /> : <RiMenu2Fill className='text-2xl md:hidden' />
                    }
                    
                </div>

                <ul className={`md:flex absolute ${open?'':'hidden'} bg-yellow-200 w-full p-6 mb-6 `}>
                    {
                        routes.map(route => <Link key={route.id} route={route}></Link>)
                    }
                </ul>
            </div>
            <div className="navbar bg-base-100 pt-[100px]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path
                                strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Item 1</a></li>
                        <li tabIndex={0}>
                            <details>
                                <summary>Parent</summary>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>


            </div>
            
        </div>


       
    );
};

export default Navbar;