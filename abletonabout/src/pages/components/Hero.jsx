import Link from "next/link";
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <div className=" bg-hero-bg  bg-no-repeat bg-cover bg-center w-[70rem] h-[40rem] mx-auto"></div>
      <div>
        <h1 className=" text-center pt-11 text-2xl font-bold">
          We make
          <Link href="/" className=" text-blue">
            {" "}
            Live,
          </Link>
          <Link href="/" className=" text-blue">
            {" "}
            Push
          </Link>
          and
          <Link href="/" className=" text-blue">
            {" "}
            Link
          </Link>
          — unique software and hardware for <br /> music creation and
          performance. With these products, our <br /> community of users
          creates amazing things.
        </h1>
        <h1 className=" text-center pt-6 text-base font-semibold">
          Ableton was founded in 1999 and released the first version of Live in
          2001. Our products are used by a <br /> community of dedicated
          musicians, sound designers, and artists from across the world.
        </h1>
      </div>
      <div className=" flex  flex-row-reverse  items-center">
        <div className=" bg-lightyellow h-[44rem] w-[50rem] float-right mt-28 flex items-center  ">
          <Image
            className=" items-center p-4  ml-[10.25rem]  "
            src={"/image/photo-2.jpg"}
            alt="/"
            height={500}
            width={500}
          />
        </div>
        <div className="  h-full mr-auto mt-4 w-[50rem]  ml-20 grid  items-center">
          <Image
            className=" h-[30rem] w-[50rem] ml-10"
            src={"/image/photo-1.jpg"}
            alt="/"
            height={800}
            width={500}
          />
        </div>
      </div>
      <div className="mt-[10rem] text-center">
        <h1 className=" font-medium text-lg">
          Making music isn’t easy. It takes time, effort, and learning. But{" "}
          <br /> when you’re in the flow, it’s incredibly rewarding.
        </h1>
        <h1 className=" font-thin text-base  pt-3">
          We feel the same way about making Ableton products. The driving force
          behind Ableton is our passion for <br /> what we make, and the people
          we make it for.
        </h1>
      </div>
      <div className=" flex items-center h-[50rem] w-[50rem]  m-auto">
        <Image
          src={"/image/pexels-edward-eyer-811838.jpg"}
          alt="/"
          height={800}
          width={800}
        />
        <h1 className="mt-[38rem] -ml-[49rem] font-thin text-xs">
          به دلیل لوپ کپچا ویدیو یوتیوب حذف شد
        </h1>
      </div>
      <div className=" text-center">
        <h1 className=" font-bold text-lg">
          We are more than 350 people from 30 different countries divided
          <br /> between our headquarters in Berlin and our offices in Los
          Angeles <br /> and Tokyo.
        </h1>
        <h1 className=" mt-3 text-base font-light">
          Most of us are active musicians, producers, and DJs, and many of us
          use Live and Push every day. We <br /> come from a wide range of
          cultural and professional backgrounds. Some of us have PhDs, some are
          self-
          <br />
          taught, and most of us are somewhere in between. What connects us is
          the shared belief that each of us
          <br /> has the skills and knowledge to contribute to something big:
          helping to shape the future of music culture.
        </h1>
      </div>
      <div className="flex container mx-auto">
        <div className=" mt-5 bg-sabzkhiyar w-[50rem] h-[50rem]">
          <div className=" flex items-center ml-11 p-6  mt-14">
            <Image
              src={"/image/photo-3.jpg"}
              alt="/"
              height={500}
              width={500}
            />
          </div>
          <div>
            <Image
              className=" ml-14 pt-2"
              src={"/image/photo-4.jpg"}
              alt="/"
              height={500}
              width={500}
            />
          </div>
        </div>
        <div>
          <Image
            className=" mt-[10rem]"
            src={"/image/photo-5.jpg"}
            alt="/"
            height={500}
            width={500}
          />
        </div>
      </div>
      <div className="text-center pt-4 mt-5">
        <h1 className="font-bold text-lg">
          We believe it takes focus to create truly outstanding instruments.
          <br /> We only work on a few products and we strive to make them
          great.
        </h1>
        <h1 className="mt-3 text-sm font-light">
          Rather than having a one-size-fits-all process, we try to give our
          people what they need to work their <br /> magic and grow. We’ve
          learned that achieving the best results comes from building teams that
          are richly <br /> diverse, and thus able to explore problems from a
          wider set of perspectives. We don’t always agree with <br /> each
          other, but opinion and debate are valued and openly encouraged.
        </h1>
      </div>
      <div className=" flex ml-[19.5rem] mt-[7rem]   ">
        <Image
          className=" items-center"
          src={"/image/32Bit_2.jpg"}
          alt="/"
          height={1000}
          width={1000}
        />
      </div>
      <div className=" container mx-auto text-center mt-8 p-2">
        <h1 className="font-bold text-lg">
          We’re passionate about what we do, but we’re equally passionate <br />{" "}
          about improving who we are.
        </h1>
        <h1 className="text-base font-light mt-1 pt-3">
          We work hard to foster an environment where people can grow both
          personally and professionally, and <br /> we strive to create a wealth
          of opportunities to learn from and with each other.
        </h1>
        <h1 className="text-base font-light mt-1 pt-3">
          Alongside an internal training program, employees are actively
          supported in acquiring new knowledge and skills, and <br /> coached on
          applying these in their daily work. In addition, staff-organized
          development and <br /> music salons are a chance to discuss new
          technologies, production techniques and best practices.{" "}
        </h1>
      </div>
      <div className="container mx-auto flex">
        <div className=" bg-sorati w-[50rem] h-[35rem] bg-center ml-[23.5rem] flex items-center ">
          <div className="-ml-[10rem] mt-[5rem]">
            <Image
              className=" "
              src={"/image/photo-6-a.jpg"}
              alt="/"
              height={600}
              width={600}
            />
          </div>
          <div className="pl-3 ml-5">
            <Image
              className=" ml-[14rem]"
              src={"/image/photo-7.jpg"}
              alt="/"
              height={800}
              width={800}
            />
          </div>
        </div>
      </div>
      <div className=" text-center">
        <h1 className=" mt-14 p-4 font-bold text-xl">
          We want our employees to love it here. Since we’re looking for <br/>
          exceptional talent from around the world, we will do everything we <br/> can
          to make your transition as easy as possible.
        </h1>
        <h1 className="text-base font-light mt-1 pt-3">If you're joining us in Berlin, we'll help with relocation and paperwork. We’ll even provide you with free <br/> German or English lessons. Plus, working in Germany means you can expect comprehensive health<br/> insurance for you and your family, as well as generous maternity and paternity leave. Office hours are<br/> flexible, but it’s not all work; we have several company and team outings throughout the year as well as a<br/> variety of fun, informal small-group activities.</h1>
      </div>
      <div className="flex">
        <div className=" mt-[7rem]">
            <Image
              className=" ml-[6.75rem]"
              src={"/image/photo-8.jpg"}
              alt="/"
              height={800}
              width={750}            
            />
        </div>
        <div className=" bg-yasi w-[35rem] h-[31.2rem] mt-28">
            <h1 className=" text-center mt-[48%] font-bold text-2xl pb-3">We’re really proud of the work<br/> we’ve done so<br/> far. But there’s so much more to come. If you’d like <br/> to be a part of it, please join us.</h1>
            <Link className=" text-blue ml-[29%] text-2xl font-extrabold mt-16" href='/'  > See latest jobs </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
