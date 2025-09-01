import Button from "@/components/button/Button";
import { COLORS } from "@/style/colors";
import Image from "next/image";
import React from "react";

const Contact = () => {
    return(
        <div className="">
            <h1 className="text-5xl mb-24 font-bold text-center">Let's Keep in Touch</h1>
            <div className="flex items-center gap-24">
                <div className="">
                    <Image src="/contact.png" width={400} height={400}/>
                </div>
                <form className="flex flex-1 flex-col gap-5">
                    <input 
                        type="text" 
                        placeholder="name" 
                        className="p-5 border-3 outline-0 font-bold text-xl"
                        style={{backgroundColor: "transparent", color: COLORS.light_gray, borderColor: COLORS.light_gray}}
                    />
                    <input 
                        type="text" 
                        placeholder="email" 
                        className="p-5 border-3 outline-0 font-bold text-xl"
                        style={{backgroundColor: "transparent", color: COLORS.light_gray, borderColor: COLORS.light_gray}}
                    />
                    <textarea 
                        placeholder="message" 
                        cols="30"
                        className="p-5 border-3 outline-0 font-bold text-xl"
                        style={{backgroundColor: "transparent", color: COLORS.light_gray, borderColor: COLORS.light_gray}}
                    />
                    <Button url={"/"} text={"Send"} />
                </form>
            </div>
        </div>
    )
}

export default Contact