import Button from "@/components/button/Button";
import React from "react";
import Image from "next/image";
import { COLORS } from "@/style/colors";

const About = () => {
    return(
        <div className="">
            <div className="relative ">
                <Image
                    src="/meeting.jpg"
                    alt="Meeting"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full max-h-[300px] object-cover"
                />
                <div className="absolute bottom-5 left-5 p-3 font-bold" style={{backgroundColor: COLORS.bg_logout_navbar, color: COLORS.white}}>
                    <h1 className="">
                        Digital Storytellers
                    </h1>
                    <h2 className="">
                        Handcrafting award winnig digital experiences
                    </h2>
                </div>
            </div>
            <div className="flex  gap-8 items-stretch">
                <div className="flex flex-1 mt-12 flex-col gap-8">
                    <h1 className="text-3xl  font-bold">Who Are We?</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis turpis est, quis posuere dolor vulputate in. Aliquam aliquet mollis orci, sit amet congue dui efficitur eu. Quisque pharetra neque eu arcu venenatis, vel convallis odio placerat. Vivamus vel iaculis purus, dignissim egestas turpis. Sed dictum tristique leo lobortis vulputate. Sed in sodales sem. Aenean pretium semper convallis. Ut ultricies, nulla id varius rutrum, urna massa feugiat neque, viverra blandit nisi purus ut tortor.
                        <br/>
                        <br/>
                        Nunc elementum iaculis augue, vitae accumsan magna luctus sit amet. Vivamus ullamcorper suscipit orci molestie maximus. Mauris in purus dignissim, lacinia ex et, eleifend sapien. Nullam hendrerit nec dolor ut lacinia.
                    </p>
                </div>
                <div className="flex flex-1 mt-12 flex-col gap-8">
                    <h1 className="text-3xl font-bold">What We Do?</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis turpis est, quis posuere dolor vulputate in. Aliquam aliquet mollis orci, sit amet congue dui efficitur eu. 
                        <br/>
                        <br/> - Dynamic Websites
                        <br/>
                        <br/> - Fast and Handy Mobile
                        <br/>
                        <br/> - Mobile Apps
                    </p>
                    <Button url="contact" text="Contact" />
                </div>
            </div>
        </div>
    )
}

export default About