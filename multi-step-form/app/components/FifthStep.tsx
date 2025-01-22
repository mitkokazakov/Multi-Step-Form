
"use client";
import "aos/dist/aos.css";
import AOS from "aos";
import React, { useEffect } from "react";
import Image from "next/image";


const FifthStep = () => {

    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
      }, []);

  return (
    <div
      data-aos="flip-down"
      className="w-full third-step flex flex-col justify-between items-center relative bg-transparent lg:flex lg:flex-col lg:justify-center lg:bg-white"
    >
      <div className="w-[90%]  bg-white rounded-xl mx-auto -mt-24 flex flex-col justify-center items-center gap-5 px-5 py-20 lg:mt-0 lg:w-full lg:py-14">
        <div className="w-full flex flex-col justify-center items-center gap-10 lg:gap-5">

            <Image src={'/icon-thank-you.svg'} height={100} width={100} alt="Thank you"></Image>

            <h1 className="text-3xl font-bold text-indigo-900">Thank you!</h1>

            <p className="text-slate-400 text-center px-3 text-lg">Thanks for confirming your subscription! We hope you have fun using our platform. if you evere need support, please feel free to email us at support@loremgmail.com.</p>
        </div>
      </div>
    </div>
  );
};

export default FifthStep;
