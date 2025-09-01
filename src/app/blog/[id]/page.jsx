import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

async function getData(id){
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        cache: 'no-store'
    });
    
    if(!res.ok){
        return notFound();
    }
    
    return res.json();
}

export async function generateMetadata({ params }){

    const post = await getData(params.id)
    return {
        title: post.title,
        description: post.body
    }
}


const BlogPost = async ({params}) => {
    const { id } = await params;
    const data = await getData(id)
    
    return(
        <div className="">
            <div className="flex ">
                <div className="flex flex-1 flex-col gap-9">
                    <h1 className="text-3xl text-bold">
                        {data.title}
                    </h1>
                    <p className="">
                        {data.body}
                    </p>
                    <div className="flex items-center gap-2">
                        <Image
                            src="/logo_face.svg"
                            alt=""
                            width={40}
                            height={40}
                            className=""
                        />
                        <span className="">John Doe</span>
                    </div>
                </div>
                <div className="">
                    <Image 
                        src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
                        alt=""
                        width={600}
                        height={0}
                        sizes="100vw"
                        className="max-h-[300px] object-cover"
                    />
                </div>
            </div>
            
            <div className="mt-5">
                <p className="font-bold">
                    {data.body}
                </p>
            </div>
        </div>
    )
}

export default BlogPost