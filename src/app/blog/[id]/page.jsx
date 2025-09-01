import Image from "next/image";
import React from "react";

const BlogPost = () => {
    return(
        <div className="">
            <div className="flex ">
                <div className="flex flex-1 flex-col gap-9">
                    <h1 className="text-3xl text-bold">
                        Lorem ipsum dolor sit amet consectetur adipi...
                    </h1>
                    <p className="">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis turpis est, quis posuere dolor vulputate in. Aliquam aliquet mollis orci, sit amet congue dui efficitur eu.
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
                    Nullam quis suscipit nunc. Cras varius, lorem ut euismod venenatis, nunc arcu mattis est, non ornare urna lorem et leo. Morbi dapibus enim ac dapibus facilisis. Praesent congue interdum sapien, in congue tortor fermentum id. Nullam metus mi, accumsan quis blandit sollicitudin, volutpat eu massa. 
                    <br/>
                    <br/>
                    Pellentesque pulvinar nulla urna, ac vehicula nulla auctor at. Vivamus cursus, velit at faucibus feugiat, leo odio malesuada lacus, vitae porttitor nisl elit vestibulum arcu. Quisque feugiat ligula at lacus scelerisque hendrerit eu sit amet sem. Fusce feugiat libero eget lectus vestibulum, a congue leo commodo. Etiam mi lectus, rhoncus sit amet volutpat sit amet, interdum at nibh. 
                    <br/>
                    <br/>
                    Vestibulum risus sem, imperdiet ac ligula nec, luctus ultricies purus. Sed sodales consequat nunc tincidunt maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque volutpat, purus vitae lacinia vulputate, justo ligula imperdiet eros, quis volutpat elit libero eget arcu. Cras dui sem, vulputate nec tortor non, dignissim iaculis orci.
                </p>
            </div>
        </div>
    )
}

export default BlogPost