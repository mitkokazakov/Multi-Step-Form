"use client";
import "aos/dist/aos.css";
import AOS from "aos";
import React, { useEffect } from "react";

const FourthStep = ({
  handleStep,
}: {
  handleStep: React.Dispatch<React.SetStateAction<any>>;
}) => {

    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
      }, []);
      
  return (
    <div
      data-aos="flip-down"
      className="w-full third-step flex flex-col justify-between items-center relative bg-transparent lg:flex lg:flex-col lg:justify-between lg:bg-white"
    >
      <div className="w-[90%]  bg-white rounded-xl mx-auto -mt-24 flex flex-col justify-center items-start gap-5 px-5 py-10 lg:mt-0 lg:w-full">
        <h1 className="text-3xl font-extrabold tracking-widest">
          Finishing up
        </h1>
        <p className="text-xl lg:text-base text-gray-400">
          Double-check everything looks OK before confirming.
        </p>

        <div className="w-full bg-gray-100 rounded-xl px-5 py-4">

            <div className="w-full flex flex-col border-b-[1px] border-b-slate-300 py-2 pb-3 mb-3 lg:mb-5 lg:pb-5">
                    <p className=" text-blue-800 font-bold text-lg">Arcade (Monthly)</p>

                    <div className="w-full flex justify-between items-center">
                        <p className=" underline text-gray-400 text-lg">Change</p>
                        <p className=" text-blue-800 font-bold text-lg">$9/mo</p>
                    </div>
            </div>

            <div className="w-full flex justify-between items-center mb-3">
                <p className="text-slate-400 text-lg">Online service</p>
                <p className=" font-semibold text-blue-600 text-lg">+$1/mo</p>

            </div>

            <div className="w-full flex justify-between items-center">
                <p className="text-slate-400 text-lg">Larger storage</p>
                <p className=" font-semibold text-blue-600 text-lg">+$1/mo</p>

            </div>
        </div>

        <div className="w-full flex justify-between items-center px-5 text-lg">
          <p className="text-slate-400">Total (per month)</p>
          <p className="font-extrabold text-blue-800 tracking-widest">+$12/mo</p>
        </div>
      </div>

      <div className="w-full h-24 mt-5 bg-white flex justify-end items-center lg:static lg:px-5">
        <div className="w-[90%]  flex justify-between items-center mx-auto lg:w-full lg:justify-between">
          <button
            className="text-gray-400 font-bold tracking-widest"
            onClick={() => {
              handleStep((prev: number) => {
                return prev - 1;
              });
            }}
          >
            Go Back
          </button>

          <button className="bg-violet-700 text-white text-xl px-6 py-2 rounded-md lg:text-base">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default FourthStep;
