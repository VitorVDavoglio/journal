import React from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Blog Page",
    description: "This is Blog Page Home",
};

async function getData(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        cache: 'no-store'
    });
    
    if(!res.ok){
        throw new Error('Failed to fetch data');
    }
    
    return res.json();
}

const Blog = async () => {
    
    const data = await getData();
    
    return(
        <div className="">
            {data.map((item) => (
                <Link href={`/blog/${item.id}`} className="" key={item.id}>
                    <div className="flex gap-12 mt-12 mb-24">
                        <div>
                            <Image 
                                src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
                                alt=""
                                width={400}
                                height={250}
                                className="relative"
                            />
                        </div>
                        <div className="flex flex-1 flex-col gap-5 content-center">
                            <h1 className="text-4xl font-bold">{item.title}</h1>
                            <p>{item.body}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Blog