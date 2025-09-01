import Button from "@/components/button/Button";
import { COLORS } from "@/style/colors";
import Image from "next/image";
import React from "react";

const Category = async ({params}) => {
    
    const { category } = await params;
    
    return(
        <div>
            <h1 className="text-3xl font-bold" style={{color: COLORS.bg_logout_navbar}}>
                {category}
            </h1>
            
            <div className="flex gap-12 mt-12 mb-24">
                <div className="flex flex-1 flex-col gap-5 content-center">
                    <h1 className="text-4xl font-bold">Test</h1>
                    <p>Desc</p>
                    <Button text="See More" url="" />
                </div>
                
                <div>
                    <Image 
                        src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
                        alt=""
                        width={500}
                        height={500}
                        className="relative"
                    />
                </div>
            </div>
            
            <div className="flex gap-12 mt-12 mb-24 flex-row-reverse">
                <div className="flex flex-1 flex-col gap-5 content-center">
                    <h1 className="text-4xl font-bold">Creative Portfolio</h1>
                    <p>Desc</p>
                    <Button text="See More" url="" />
                </div>
                
                <div>
                    <Image 
                        src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
                        alt=""
                        width={500}
                        height={500}
                        className="relative"
                    />
                </div>
            </div>
        </div>
    )
}

export default Category