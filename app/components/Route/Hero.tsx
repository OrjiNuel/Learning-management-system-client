import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { BiSearch } from "react-icons/bi";

type Props = {};

const Hero: FC<Props> = (props) => {
  return (
    <div className="w-full flex gap-32 items-center justify-center min-h-screen">
      <div className="relative w-1/2 h-1/2 rounded-full hero_animation top-[10px] 1000px:top-[unset] 1500px:h-[700px] 1500px:w-[700px] 1100px:h-[600px] 1100px:w-[600px]">
        {/* Circular shape for the first image */}
        <div className="rounded-full overflow-hidden">
          <Image
            src={require("../../../public/assets/banner-img-1.png")}
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="flex flex-col items-center text-center 1000px:text-left">
        <h2 className="dark:text-white text-[#000000c7] text-[30px] px-3 w-full 1000px:text-[70px] font-[600] font-Josefin py-2 1000px:leading-[75px] 1500px:w-[80%]">
          Improve Your Online Learning Experience Better Instantly
        </h2>
        <br />
        <p className="dark:text-[#edfff4] text-[#000000ac] font-Josefin font-[600] text-[18px] 1500px:!w-[70%]">
          We have 40k+ Online courses & 500K+ Online registered students. Find
          your desired courses from them.
        </p>
        <br />
        <br />
        <div className="w-[80%] h-[50px] bg-transparent relative">
          <input
            type="search"
            placeholder="Search Courses..."
            className="bg-transparent border dark:border-none dark:bg-[#575757] dark:placeholder:text-[#ffffffdd] rounded-[5px] p-2 w-full h-full outline-none text-[#0000004e] dark:text-[#ffffffe6] text-[20px] font-[500] font-Josefin"
          />
          <div className="absolute flex items-center justify-center w-[50px] cursor-pointer h-[50px] right-0 top-0 bg-[#39c1f3] rounded-r-[5px]">
            <BiSearch className="text-white" size={30} />
          </div>
        </div>
        <br />
        <br />
        <div className="w-[80%] flex items-center">
          <Image
            src={require("../../../public/assets/client-3.jpg")}
            alt=""
            className="rounded-full ml-[-20px] w-12 h-12"
          />
          <Image
            src={require("../../../public/assets/client-1.jpg")}
            alt=""
            className="rounded-full ml-[-20px] w-12 h-12"
          />
          <Image
            src={require("../../../public/assets/client-2.jpg")}
            alt=""
            className="rounded-full ml-[-20px] w-12 h-12"
          />
          <p className="font-Josefin dark:text-[#edfff4] text-[#000000b3] pl-3 text-[18px] font-[600]">
            500K+ people already trusted us.{" "}
            <Link
              href="/courses"
              className="dark:text-[#46e256] text-[crimson]"
            >
              View Courses
            </Link>{" "}
          </p>
        </div>
        <br />
      </div>
    </div>
  );
};

export default Hero;
