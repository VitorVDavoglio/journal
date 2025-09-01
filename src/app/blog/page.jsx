import React from "react";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
    return(
        <div className="">
            <Link href="/blog/testId" className="">
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
                        <h1 className="text-4xl font-bold">Test</h1>
                        <p>Desc</p>
                    </div>
                </div>
            </Link>
            
            <Link href="/blog/test2Id" className="">
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
                        <h1 className="text-4xl font-bold">Test</h1>
                        <p>Desc 2</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Blog