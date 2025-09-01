import React from "react";
import Link from "next/link";
import { COLORS } from "@/style/colors";

const Button = ({ text, url }) => {
    return(
        <Link href={url}>
            <button 
                className="p-4 cursor-pointer rounded-xl content-center max-w-max"
                style={{backgroundColor: COLORS.bg_logout_navbar, color: COLORS.white}}   
            > 
                {text}
            </button>
        </Link>
    )
}

export default Button;