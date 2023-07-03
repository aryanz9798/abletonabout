
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Dropdown from "./Dropdown";


const Footer = () => {
    return (
        <div className=" container mx-auto">
            <div className=" border-t-gray border-2 mt-[10rem]"></div>
            <div className="  ml-[5rem] mt-[10rem]">
                <Image
                    src={"/image/ableton-wordmark.c025e3df71b3.svg"}
                    alt="/"
                    height={200}
                    width={200}
                />
            </div>
            <div className=" flex mt-[4rem] ml-[5rem] flex-col h-20   w-48   ">
                <a className=" p-2" href="/">
                    Register Live or Push
                </a>
                <a className=" p-2" href="/">
                    About Ableton
                </a>
                <a className=" p-2" href="/">
                    Jobs
                </a>
            </div>
            <div className=" text-center -mt-[5rem] w-48 m-auto ">
                <h1 className=" text-xl font-extrabold">Education</h1>
            </div>
            <div className=" text-center flex flex-col  ">
                <Link className=" pt-2" href="/">
                    Offers for students and teachers
                </Link>
                <Link className=" pt-2" href="/">
                    Ableton for the Classroom
                </Link>
                <Link className=" pt-2 " href="/">
                    Ableton for Colleges and Universities
                </Link>
            </div>
            <div className=" text-center  w-48  float-right -mt-[7rem] mr-[5rem]">
                <h1 className="text-xl font-extrabold">Sign up to our newsletter</h1>
                <h1>
                    Enter your email address to stay up to date with the latest offers,
                    <br /> tutorials, downloads, surveys and more.
                </h1>
                <div class="relative mt-8">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                            aria-hidden="true"
                            className="w-5 h-5 text-gray-500 dark:text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                        </svg>
                    </div>
                    <input
                        type="text"
                        id="email-address-icon"
                        className=" border  text-sm rounded-lg focus:ring-blue-500  block w-full pl-10 p-2.5  "
                        placeholder=" your email@.com"
                    />
                </div>
            </div>
            <div>
                <h1 className=" ml-20 mt-16 text-xl font-bold">Community</h1>
                <div className="  flex flex-col ml-16  h-20   w-48  ">
                    <Link className=" pt-2" href="/">
                        Offers for students and teachers
                    </Link>
                    <Link className=" pt-2" href="/">
                        Ableton for the Classroom
                    </Link>
                    <Link className=" pt-2 " href="/">
                        Ableton for Colleges and Universities
                    </Link>
                </div>
            </div>
            <div>
                <h1 className="3-[3rem] text-xl font-bold text-center ml-[16rem] -mt-[7rem]  ">
                    Language and Location
                </h1>
            </div>
            <div >
                <Dropdown/>
            </div>
            <div className=" ml-16">
            <Link
            href='/'>Contact Us</Link>
            <Link className="p-2"
            href='/'>Press Resources</Link>
            <Link className="p-2"
            href='/'>Legal Info</Link>
            <Link className="p-2"
            href='/'>Privacy Policy</Link>
            <Link className="p-2"
            href='/'>Cookie Settings</Link>
            <Link className="p-2"
            href='/'>Imprint</Link>
            <div className=" float-right flex pb-28">
                <h1 className="mr-11 mt-[0.55rem]"> made in berlin</h1>               
                <Image
                className=" "
                src={"/image/ableton-hallmark.ef5355379032.svg"}
                alt="/"
                height={70}
                width={70}  
                />

            </div>       
            </div>
        </div>
    );
};

export default Footer;
