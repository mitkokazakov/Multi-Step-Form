"use client";

import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";



const FirstStep = ({
  handleStep,
  step,
  handleData,
}: {
  handleStep: React.Dispatch<React.SetStateAction<any>>;
  step: number;
  handleData: React.Dispatch<React.SetStateAction<any>>;
}) => {
  const [firstStepData, SetFirstStepData] = useState({
    name: localStorage.getItem('name') == null ? '' : localStorage.getItem('name') as string,
    email: localStorage.getItem('email') == null ? '' : localStorage.getItem('email') as string,
    phone: localStorage.getItem('phone') == null ? '' : localStorage.getItem('phone') as string,
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  // console.log(firstStepData);
  

  function HandleClickNext() {
    handleData((prev: DataProps) => ({
      ...prev,
      ...firstStepData,
    }));
  }

  function HandleInputsChange(e: React.ChangeEvent<HTMLInputElement>){
    SetFirstStepData((prev: DataProps) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    localStorage.setItem(e.target.name, e.target.value);
  }

  return (
    <div
      data-aos="flip-down"
      className="w-full first-step flex flex-col justify-between items-center relative bg-transparent lg:flex lg:flex-col lg:justify-between lg:bg-white"
    >
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
              name="name"
              placeholder="e.g. Stephen King"
              className="w-full px-4 py-3 outline-none border-gray-300 border-[1px] rounded-md font-bold tracking-widest"
              onChange={HandleInputsChange}
              value={firstStepData.name}
            />
          </div>

          <div className="flex flex-col justify-center items-start gap-2 w-full">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="e.g. stephenking@gmail.com"
              className="w-full px-4 py-3 outline-none border-gray-300 border-[1px] rounded-md font-bold tracking-widest"
              onChange={HandleInputsChange}
              value={firstStepData.email}
            />
          </div>

          <div className="flex flex-col justify-center items-start gap-2 w-full">
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              type="phone"
              name="phone"
              placeholder="e.g. Stephen King"
              className="w-full px-4 py-3 outline-none border-gray-300 border-[1px] rounded-md font-bold tracking-widest"
              onChange={HandleInputsChange}
              value={firstStepData.phone}
            />
          </div>
        </div>
      </div>

      <div className="w-full h-24 mt-5 bg-white flex justify-end items-center lg:static lg:px-5">
        <div className="w-[90%]  flex justify-end items-center mx-auto lg:w-full">
          <button
            className="bg-blue-950 text-white text-xl px-6 py-2 rounded-md lg:text-base"
            onClick={() => {

              HandleClickNext();
              handleStep((prev: number) => {
                return prev + 1;
              });
            }}
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstStep;
