"use client"

import { COLORS } from "@/style/colors";
import Link from "next/link";
import React from "react";

const links = [
    {
        id: 1,
        title: "Home",
        url: "/",
    },
    {
        id: 2,
        title: "Portifolio",
        url: "/portifolio",
    },
    {
        id: 3,
        title: "Blog",
        url: "/blog",
    },
    {
        id: 4,
        title: "About",
        url: "/about",
    },
    {
        id: 5,
        title: "Contact",
        url: "/contact",
    },
    {
        id: 6,
        title: "Dashboard",
        url: "/dashboard",
    }
]

const Navbar = () => {
    return(
        <div className="h-20 flex justify-between items-center">
            <Link 
                className="font-bold text-2xl"
                href="/"
            >
                Home Page
            </Link>
            
            <div className="flex items-center gap-6">
                {links.map(link =>(
                    <Link 
                        className=""
                        key={link.id} 
                        href={link.url}
                    >
                        {link.title}
                    </Link> 
                ))}
                <button 
                    className="p-2 cursor-pointer rounded-2xl"
                    style={{backgroundColor: COLORS.bg_logout_navbar}}
                    onClick={() => {
                        console.log("logged out");
                    }}
                >
                    Logout
                </button>
            </div>
        </div>
    )
}

export default Navbar