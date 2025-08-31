import Image from "next/image";
import React from "react";

const Footer = () => {
    
    return(
        <div className="flex items-center justify-between h-11">
            <div className="">
                @2025 iB2B Tecnologia. All rights reserved.
            </div>
            
            <div className="flex flex-row items-center gap-5">
                <Image src="/logo_face.svg" className="cursor-pointer opacity-85" width={15} height={15} alt="Facebook icon" />
                <Image src="/logo_insta.svg" className="cursor-pointer opacity-85" width={15} height={15} alt="Instagram icon" />
                <Image src="/logo_x.svg" className="cursor-pointer opacity-85" width={15} height={15} alt="x icon" />
                <Image src="/logo_youtube.svg" className="cursor-pointer opacity-85" width={15} height={15} alt="youtube icon" />
            </div>
        </div>
    )
}

export default Footer