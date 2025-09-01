import Square from "@/components/portifolio/Square";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Portifolio = () => {
    return(
        <div>
            <h1 className="text-3xl font-bold mt-5">Choose a gallery</h1>
            <div className="flex gap-12">
                
                <Square urlLink="/portifolio/illustrations" urlImage="/illustration.png" text="Illustrations" alt="imagem illustration" />
                
                <Square urlLink="/portifolio/websites" urlImage="/websites.jpg" text="Websites" alt="imagem computer" />
                
                <Square urlLink="/portifolio/application" urlImage="/apps.jpg" text="Application" alt="imagem cellphone" />
                
            </div>
        </div>
    )
}

export default Portifolio