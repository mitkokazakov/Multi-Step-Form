"use client";
import "aos/dist/aos.css";
import AOS from "aos";
import React, { useEffect } from "react";

const emailRegexPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const FourthStep = ({
  handleStep,
  data,
  handleData
}: {
  handleStep: React.Dispatch<React.SetStateAction<number>>;
  data: DataProps;
  handleData: React.Dispatch<React.SetStateAction<DataProps>>
}) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });

    CheckIfThirdStepDataIsUpdated();
  }, []);

  function ValidateEmail(currentEmail: string) {
    return emailRegexPattern.test(currentEmail);
  }

  function CheckIfThirdStepDataIsUpdated(){

    if(data.onlineService == 0 || data.largerStorage == 0 || data.customProfile == 0){

      const onlineServiceLocal = localStorage.getItem("onlineService");
      const largerStorageLocal = localStorage.getItem("largerStorage");
      const customProfileLocal = localStorage.getItem("customProfile");

      let onlineServicePrice = 0;
      let largerStoragePrice = 0;
      let customProfilePrice = 0;

      if(onlineServiceLocal != null && onlineServiceLocal == 'true'){
        onlineServicePrice = data.planDuration == 'Monthly' ? 1 : 10
      }

      if(largerStorageLocal != null && largerStorageLocal == 'true'){
        largerStoragePrice = data.planDuration == 'Monthly' ? 2 : 20
      }

      if(customProfileLocal != null && customProfileLocal == 'true'){
        customProfilePrice = data.planDuration == 'Monthly' ? 2 : 20
      }

      handleData((prev: DataProps) => ({
        ...prev,
        onlineService: onlineServicePrice,
        largerStorage: largerStoragePrice,
        customProfile: customProfilePrice
      }));
    }
  }

  async function CheckAllDataAndSaveIt(){

    // if(data.name.length < 3 || data.phone.length < 6 || !ValidateEmail(data.email)){
    //   handleStep((prev: number) => {
    //     localStorage.setItem("step", (prev - 3).toString());
    //     return prev - 3
    //   })
    //   return;
    // }

    if(data.name.length < 3){
      localStorage.setItem("nameError", "Name should be at least 3 character long!");

      handleStep((prev: number) => {
        localStorage.setItem("step", (prev - 3).toString());
        return prev - 3
      })
      return;
    }

    if(!ValidateEmail(data.email)){
      localStorage.setItem("emailError", "Please provide a valid email address!");

      handleStep((prev: number) => {
        localStorage.setItem("step", (prev - 3).toString());
        return prev - 3
      })
      return;
    }

    if(data.phone.length < 6){
      localStorage.setItem("phoneError", "Phone should be at least 6 symbols!");

      handleStep((prev: number) => {
        localStorage.setItem("step", (prev - 3).toString());
        return prev - 3
      })
      return;
    }




    const response = await fetch('/api/savedata', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log('Data saved successfully');
      handleStep((prev: number) => {
        localStorage.setItem("step", (prev + 1).toString());
        return prev + 1;
      })
    } else {
      console.error('Error saving data');
    }

  }

  console.log(data);
  

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
            <p className=" text-blue-800 font-bold text-lg">
              {data.planType} ({data.planDuration})
            </p>

            <div className="w-full flex justify-between items-center">
              <p className=" underline text-gray-400 text-lg cursor-pointer" onClick={() => {handleStep((prev: number) => {
                return prev - 2;
              });}}>Change</p>
              <p className=" text-blue-800 font-bold text-lg">
                ${data.planPrice}/{data.planDuration == 'Monthly' ? 'mo' : 'yr'}
              </p>
            </div>
          </div>

          {data.onlineService != 0 ? (
            <div className="w-full flex justify-between items-center mb-1">
              <p className="text-slate-400 text-lg">Online service</p>
              <p className=" font-semibold text-blue-600 text-lg">+${data.onlineService}/{data.planDuration == 'Monthly' ? 'mo' : 'yr'}</p>
            </div>
          ) : null}

          {data.largerStorage != 0 ? (
            <div className="w-full flex justify-between items-center mb-1">
              <p className="text-slate-400 text-lg">Larger storage</p>
              <p className=" font-semibold text-blue-600 text-lg">+${data.largerStorage}/{data.planDuration == 'Monthly' ? 'mo' : 'yr'}</p>
            </div>
          ) : null}

          {data.customProfile != 0 ? (
            <div className="w-full flex justify-between items-center mb-1">
              <p className="text-slate-400 text-lg">Customizable profile</p>
              <p className=" font-semibold text-blue-600 text-lg">+${data.customProfile}/{data.planDuration == 'Monthly' ? 'mo' : 'yr'}</p>
            </div>
          ) : null}
        </div>

        <div className="w-full flex justify-between items-center px-5 text-lg">
          <p className="text-slate-400">Total (per month)</p>
          <p className="font-extrabold text-violet-800 tracking-widest">
            +${data.planPrice + data.onlineService + data.largerStorage + data.customProfile}/{data.planDuration == 'Monthly' ? 'mo' : 'yr'}
          </p>
        </div>
      </div>

      <div className="w-full h-24 mt-5 bg-white flex justify-end items-center lg:static lg:px-5">
        <div className="w-[90%]  flex justify-between items-center mx-auto lg:w-full lg:justify-between">
          <button
            className="text-gray-400 font-bold tracking-widest"
            onClick={() => {
              handleStep((prev: number) => {
                localStorage.setItem('step', (prev - 1).toString());
                return prev - 1;
              });
            }}
          >
            Go Back
          </button>

          <button className="bg-violet-700 text-white text-xl px-6 py-2 rounded-md lg:text-base" onClick={CheckAllDataAndSaveIt}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default FourthStep;
