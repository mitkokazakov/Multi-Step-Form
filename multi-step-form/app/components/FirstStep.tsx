"use client"

import React, { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';

const FirstStep = ({handleStep, step}: {handleStep: React.Dispatch<React.SetStateAction<any>>, step: number}) => {

  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  },[])

  // absolute left-[50%]  translate-x-[-50%]   top-[-10%]

  return (
    <div  data-aos="flip-down" className="w-full first-step flex flex-col justify-between items-center relative bg-transparent lg:flex lg:flex-col lg:justify-between lg:bg-white">
      <div className="w-[90%]  bg-white rounded-xl mx-auto -mt-24 flex flex-col justify-center items-start gap-5 px-5 py-10 lg:mt-0 lg:w-full">
        <h1 className="text-3xl font-extrabold tracking-widest">
          Personal Info
        </h1>
        <p className="text-xl lg:text-base text-gray-400">
          Please provide your name, email address, and phone number
        </p>

        <div className="flex flex-col w-full gap-5">
          <div className="flex flex-col justify-center items-start gap-2 w-full">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="e.g. Stephen King"
              className="w-full px-4 py-3 outline-none border-gray-300 border-[1px] rounded-md font-bold tracking-widest"
            />
          </div>

          <div className="flex flex-col justify-center items-start gap-2 w-full">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="e.g. stephenking@gmail.com"
              className="w-full px-4 py-3 outline-none border-gray-300 border-[1px] rounded-md font-bold tracking-widest"
            />
          </div>


          <div className="flex flex-col justify-center items-start gap-2 w-full">
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              type="phone"
              placeholder="e.g. Stephen King"
              className="w-full px-4 py-3 outline-none border-gray-300 border-[1px] rounded-md font-bold tracking-widest"
            />
          </div>
        </div>
      </div>

      <div className="w-full h-24 mt-5 bg-white flex justify-end items-center lg:static lg:px-5">
        <div className="w-[90%]  flex justify-end items-center mx-auto lg:w-full">
          <button className="bg-blue-950 text-white text-xl px-6 py-2 rounded-md lg:text-base" onClick={() => {handleStep((prev: number) => { return prev + 1})}}>
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstStep;
