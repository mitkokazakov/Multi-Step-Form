"use client"
import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Image from "next/image";

const SecondStep = ({
  handleStep,
  step,
}: {
  handleStep: React.Dispatch<React.SetStateAction<any>>;
  step: number;
}) => {

  const [monthlYearly, setMonthlyYearly] = useState(false);

  const [activeChoice, SetActiveChoice] = useState(0);
   
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  function HandleClickChoice(choice: number){
    SetActiveChoice(choice);
  }

  return (
    <div
      data-aos="flip-down"
      className="w-full second-step flex flex-col justify-between items-center relative bg-transparent lg:flex lg:flex-col lg:justify-between lg:bg-white"
    >
      <div className="w-[90%]  bg-white rounded-xl mx-auto -mt-24 flex flex-col justify-center items-start gap-5 px-5 py-10 lg:mt-0 lg:w-full">
        <h1 className="text-3xl font-extrabold tracking-widest">
          Select your plan
        </h1>
        <p className="text-xl lg:text-base text-gray-400">
          You have the option of monthly or yearly billing.
        </p>

        <div className="flex flex-col w-full gap-3 lg:flex-row">
          <div className={`w-full cursor-pointer flex justify-start items-start gap-5 p-6 border-[1px] ${activeChoice == 1 ? 'border-violet-600 bg-violet-50' : 'border-gray-300'} rounded-xl lg:flex-col lg:justify-between lg:p-4 lg:w-1/3 lg:gap-10`} onClick={() => {
            HandleClickChoice(1);
          }}>
            <div>
              <Image
                src={"/icon-arcade.svg"}
                width={60}
                height={60}
                alt="arcade icon"
                className="lg:w-[40px] lg:h-[40px]"
              />
            </div>

            <div className="flex flex-col justify-center items-start gap-1">
              <h6 className="text-lg font-bold">Arcade</h6>
              <p className="text-gray-400">{monthlYearly ? '$90/yr' : '$9/mo'}</p>
              <p className={`text-sm text-blue-900 duration-300 ${monthlYearly == true ? 'opacity-1' : 'opacity-0 hidden'}`}>2 months free</p>
            </div>
          </div>

          <div className={`w-full cursor-pointer flex justify-start items-start gap-5 p-6 border-[1px] ${activeChoice == 2 ? 'border-violet-600 bg-violet-50' : 'border-gray-300'} rounded-xl lg:flex-col lg:justify-between lg:p-4 lg:w-1/3 lg:gap-10`}  onClick={() => {
            HandleClickChoice(2);
          }}>
            <div>
              <Image
                src={"/icon-advanced.svg"}
                width={60}
                height={60}
                alt="arcade icon"
                className="lg:w-[40px] lg:h-[40px]"
              />
            </div>

            <div className="flex flex-col justify-center items-start gap-1">
              <h6 className="text-lg font-bold">Advanced</h6>
              <p className="text-gray-400">{monthlYearly ? '$120/yr' : '$12/mo'}</p>
              <p className={`text-sm text-blue-900 duration-300 ${monthlYearly == true ? 'opacity-1' : 'opacity-0 hidden'}`}>2 months free</p>
            </div>
          </div>

          <div className={`w-full cursor-pointer flex justify-start items-start gap-5 p-6 border-[1px] ${activeChoice == 3 ? 'border-violet-600 bg-violet-50' : 'border-gray-300'} rounded-xl lg:flex-col lg:justify-between lg:p-4 lg:w-1/3 lg:gap-10`}  onClick={() => {
            HandleClickChoice(3);
          }}>
            <div>
              <Image
                src={"/icon-pro.svg"}
                width={60}
                height={60}
                alt="arcade icon"
                className="lg:w-[40px] lg:h-[40px]"
              />
            </div>

            <div className="flex flex-col justify-center items-start gap-1">
              <h6 className="text-lg font-bold">Pro</h6>
              <p className="text-gray-400">{monthlYearly ? '$150/yr' : '$15/mo'}</p>
              <p className={`text-sm text-blue-900 duration-300 ${monthlYearly == true ? 'opacity-1' : 'opacity-0 hidden'}`}>2 months free</p>
            </div>
          </div>
        </div>

        <div className="w-full bg-gray-100 rounded-xl flex justify-center items-center px-8 py-5">
          <div className="flex items-center space-x-4">
            <span className={`${monthlYearly == false ? 'text-blue-700' : 'text-gray-400'} font-bold`}>Monthly</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" onChange={() => {setMonthlyYearly(!monthlYearly)}} className="sr-only peer" />
              <div className="w-16 h-6 py-2 bg-blue-900 rounded-full peer-border-none peer-bg-blue-900 peer-checked:after:translate-x-10 peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:border after:rounded-full after:h-4 after:w-4 after:transition-all  peer-checked:bg-blue-900"></div>
            </label>
            <span className={`${monthlYearly == true ? 'text-blue-700' : 'text-gray-400'} font-bold`}>Yearly</span>
          </div>
        </div>
      </div>

      <div className="w-full h-24 mt-5 bg-white flex justify-end items-center lg:static lg:px-5">
        <div className="w-[90%]  flex justify-between items-center mx-auto lg:w-full lg:justify-between">
        <button className="text-gray-400 font-bold tracking-widest" onClick={() => {handleStep((prev: number) => {
                return prev - 1;
              });}}>Go Back</button>

          <button
            className="bg-blue-950 text-white text-xl px-6 py-2 rounded-md lg:text-base"
            onClick={() => {
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

export default SecondStep;
