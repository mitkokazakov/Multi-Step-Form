"use client";
import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const ThirdStep = ({
  handleStep,
  handleData,
}: {
  handleStep: React.Dispatch<React.SetStateAction<number>>;
  handleData: React.Dispatch<React.SetStateAction<DataProps>>;
}) => {
  // const [onlineService, SetOnlineService] = useState(localStorage.getItem('onlineService') == 'true');
  // const [largerStorage, SetLargerStorage] = useState(localStorage.getItem('largerStorage') == 'true');
  // const [customizeProfile, SetCustomizeProfile] = useState(localStorage.getItem('customProfile') == 'true');

  const [onlineService, SetOnlineService] = useState<boolean>(false);
  const [largerStorage, SetLargerStorage] = useState<boolean>(false);
  const [customizeProfile, SetCustomizeProfile] = useState<boolean>(false);

  const [planDuration, SetPlanDuration] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });

    console.log("Hello from third");

    //console.log(localStorage.getItem('onlineService'));
    
    
    SetOnlineService(localStorage.getItem('onlineService') == null || localStorage.getItem('onlineService') == 'false' ? false : true);
    SetLargerStorage(localStorage.getItem('largerStorage') == null || localStorage.getItem('largerStorage') == 'false' ? false : true);
    SetCustomizeProfile(localStorage.getItem('customProfile')== null || localStorage.getItem('customProfile') == 'false' ? false : true)

    

    let planDur = localStorage.getItem("planDuration");

    if (planDur == null || planDur == undefined || planDur == "" || planDur == 'false') {
      planDur = "Monthly";
    }
    else{
      planDur = "Yearly"
    }

    SetPlanDuration(planDur);

    //HandleDataUpdate();
  }, []);

 

  function HandleDataUpdate() {

     const onlineServicePrice = planDuration == "Monthly" ? 1 : 10;
     const largerStoragePrice = planDuration == "Monthly" ? 2 : 20;
     const customizeProfilePrice = planDuration == "Monthly" ? 2 : 20;

    console.log(onlineServicePrice);
    console.log(onlineService);
    
    

    handleData((prev: DataProps) => ({
      ...prev,
      onlineService: onlineService == true ? onlineServicePrice : 0,
      largerStorage: largerStorage == true ? largerStoragePrice : 0,
      customProfile: customizeProfile == true ? customizeProfilePrice : 0
    }));

    localStorage.setItem("onlineService", JSON.stringify(onlineService));
    localStorage.setItem("largerStorage", JSON.stringify(largerStorage));
    localStorage.setItem("customProfile", JSON.stringify(customizeProfile));

    localStorage.setItem("onlineServicePrice", JSON.stringify(onlineService == true ? onlineServicePrice : 0));
    localStorage.setItem("largerStoragePrice", JSON.stringify(largerStorage == true ? largerStoragePrice : 0));
    localStorage.setItem("customProfilePrice", JSON.stringify(customizeProfile == true ? customizeProfilePrice : 0));
  }

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
          <div
            className={`w-full border-[1px] ${
              onlineService
                ? "bg-violet-100/30 border-violet-600"
                : "bg-white border-slate-300"
            } rounded-xl flex justify-between items-center px-4 py-3`}
          >
            <div className="flex justify-center items-center gap-5">
              <input
                type="checkbox"
                name="service"
                id="service"
                className="check w-5 h-5 p-2 accent-violet-700"
                checked={onlineService}
                onChange={() => {
                  SetOnlineService((prev:boolean) => {
                    const onlineServicePrice = planDuration == 'Monthly' ? 1 : 10;
                  localStorage.setItem("onlineServicePrice", JSON.stringify(onlineServicePrice));
                    localStorage.setItem("onlineService", JSON.stringify(!prev));
                    return !prev;
                  });
                }}
              />

              <div className="flex flex-col justify-center items-start">
                <p className="font-bold text-violet-700">Online service</p>
                <p className="text-gray-400">Acces to multiplayer games</p>
              </div>
            </div>

            <p>{planDuration == "Monthly" ? "+$1/mo" : "+$10/yr"}</p>
          </div>
        </div>

        <div
          className={`w-full border-[1px] ${
            largerStorage
              ? "bg-violet-100/30 border-violet-600"
              : "bg-white border-slate-300"
          } rounded-xl flex justify-between items-center px-4 py-3`}
        >
          <div className="flex justify-center items-center gap-5">
            <input
              type="checkbox"
              name="storage"
              id="storage"
              className="check w-5 h-5 p-2 accent-violet-700"
              checked={largerStorage}
              onChange={() => {
                SetLargerStorage((prev: boolean) => {
                  const largerStoragePrice = planDuration == 'Monthly' ? 2 : 20;
                  localStorage.setItem("largerStoragePrice", JSON.stringify(largerStoragePrice));
                  localStorage.setItem("largerStorage", JSON.stringify(!prev));
                  return !prev;
                });
              }}
            />

            <div className="flex flex-col justify-center items-start">
              <p className="font-bold text-violet-700">Larger storage</p>
              <p className="text-gray-400">Extra 1TB of cloud save</p>
            </div>
          </div>

          <p>{planDuration == "Monthly" ? "+$2/mo" : "+$20/yr"}</p>
        </div>

        <div
          className={`w-full border-[1px] ${
            customizeProfile
              ? "bg-violet-100/30 border-violet-600"
              : "bg-white border-slate-300"
          } rounded-xl flex justify-between items-center px-4 py-3`}
        >
          <div className="flex justify-center items-center gap-5">
            <input
              type="checkbox"
              name="customProfile"
              id="customProfile"
              className="check w-5 h-5 p-2 accent-violet-700"
              checked={customizeProfile}
              onChange={() => {
                SetCustomizeProfile((prev: boolean) => {
                  const customProfilePrice = planDuration == 'Monthly' ? 2 : 20;
                  localStorage.setItem("customProfilePrice", JSON.stringify(customProfilePrice));
                  localStorage.setItem("customProfile", JSON.stringify(!prev));
                  return !prev;
                });
              }}
            />

            <div className="flex flex-col justify-center items-start">
              <p className="font-bold text-violet-700">Customizable profile</p>
              <p className="text-gray-400">Custom theme on your profile</p>
            </div>
          </div>

          <p>{planDuration == "Monthly" ? "+$2/mo" : "+$20/yr"}</p>
        </div>
      </div>

      <div className="w-full h-24 mt-5 bg-white flex justify-end items-center lg:static lg:px-5">
        <div className="w-[90%]  flex justify-between items-center mx-auto lg:w-full lg:justify-between">
          <button
            className="text-gray-400 font-bold tracking-widest"
            onClick={() => {

              //HandleDataUpdate();

              handleStep((prev: number) => {
                localStorage.setItem('step', (prev - 1).toString());
                return prev - 1;
              });
            }}
          >
            Go Back
          </button>

          <button
            className="bg-blue-950 text-white text-xl px-6 py-2 rounded-md lg:text-base"
            onClick={() => {

              HandleDataUpdate();

              handleStep((prev: number) => {
                localStorage.setItem('step', (prev + 1).toString());
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
