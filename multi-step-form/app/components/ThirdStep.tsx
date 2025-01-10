"use client";
import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const ThirdStep = ({
  handleStep,
  step,
}: {
  handleStep: React.Dispatch<React.SetStateAction<any>>;
  step: number;
}) => {
  const [onlineService, SetOnlineService] = useState(false);
  const [largerStorage, SetLargerStorage] = useState(false);
  const [customizeProfile, SetCustomizeProfile] = useState(false);

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
          Pick adds-on
        </h1>
        <p className="text-xl lg:text-base text-gray-400">
          Add-ons help enhance your gaming experience.
        </p>

        <div className="flex flex-col w-full gap-3 lg:flex-row">
          <div className={`w-full border-[1px] ${onlineService ? 'bg-violet-100 border-violet-600' : 'bg-white border-slate-300'} rounded-xl flex justify-between items-center px-4 py-3`}>
            <div className="flex justify-center items-center gap-5">
              <input type="checkbox" name="online" id="online" className="check w-5 h-5 p-2 accent-violet-700" onClick={() => {SetOnlineService(!onlineService)}}/>
              
              <div className="flex flex-col justify-center items-start">
                <p className="font-bold text-violet-700">Online service</p>
                <p className="text-gray-400">Acces to multiplayer games</p>
              </div>
            </div>

            <p>+$1/mo</p>
          </div>
        </div>

        <div className={`w-full border-[1px] ${largerStorage ? 'bg-violet-100 border-violet-600' : 'bg-white border-slate-300'} rounded-xl flex justify-between items-center px-4 py-3`}>
            <div className="flex justify-center items-center gap-5">
              <input type="checkbox" name="online" id="online" className="check w-5 h-5 p-2 accent-violet-700"  onClick={() => {SetLargerStorage(!largerStorage)}}/>
              
              <div className="flex flex-col justify-center items-start">
                <p className="font-bold text-violet-700">Online service</p>
                <p className="text-gray-400">Acces to multiplayer games</p>
              </div>
            </div>

            <p>+$1/mo</p>
          </div>

          <div className={`w-full border-[1px] ${customizeProfile ? 'bg-violet-100 border-violet-600' : 'bg-white border-slate-300'} rounded-xl flex justify-between items-center px-4 py-3`}>
            <div className="flex justify-center items-center gap-5">
              <input type="checkbox" name="online" id="online" className="check w-5 h-5 p-2 accent-violet-700"  onClick={() => {SetCustomizeProfile(!customizeProfile)}}/>
              
              <div className="flex flex-col justify-center items-start">
                <p className="font-bold text-violet-700">Online service</p>
                <p className="text-gray-400">Acces to multiplayer games</p>
              </div>
            </div>

            <p>+$1/mo</p>
          </div>


       
      </div>

      <div className="w-full h-24 mt-5 bg-white flex justify-end items-center lg:static lg:px-5">
        <div className="w-[90%]  flex justify-end items-center mx-auto lg:w-full lg:justify-between">
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

export default ThirdStep;
