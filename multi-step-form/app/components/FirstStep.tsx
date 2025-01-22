"use client";

import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const emailRegexPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
    name:
      localStorage.getItem("name") == null
        ? ""
        : (localStorage.getItem("name") as string),
    email:
      localStorage.getItem("email") == null
        ? ""
        : (localStorage.getItem("email") as string),
    phone:
      localStorage.getItem("phone") == null
        ? ""
        : (localStorage.getItem("phone") as string),
  });

  const [errors, SetErrors] = useState({
    nameError: localStorage.getItem("nameError") == null ? "" : localStorage.getItem("nameError") as string,
    emailError: localStorage.getItem("emailError") == null ? "" : localStorage.getItem("emailError") as string,
    phoneError: localStorage.getItem("phoneError") == null ? "" : localStorage.getItem("phoneError") as string,
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  function HandleClickNext() {

    handleData((prev: DataProps) => ({
      ...prev,
      ...firstStepData,
    }));
  }

  function HandleInputsChange(e: React.ChangeEvent<HTMLInputElement>) {
    let currentInput = e.target.name;

    let currentInputValue = e.target.value;

    if (currentInput == "name") {
      if (currentInputValue.length < 3) {
        SetErrors((prev: FirstStepErrors) => ({
          ...prev,
          nameError: "Name should be at least 3 character long!",
        }));
      } else {
        SetErrors((prev: FirstStepErrors) => ({
          ...prev,
          nameError: "",
        }));
      }
    }

    if (currentInput == "email") {
      if (!ValidateEmail(currentInputValue)) {
        SetErrors((prev: FirstStepErrors) => ({
          ...prev,
          emailError: "Please provide a valid email address!",
        }));
      } else {
        SetErrors((prev: FirstStepErrors) => ({
          ...prev,
          emailError: "",
        }));
      }
    }

    if (currentInput == "phone") {
      if (currentInputValue.length < 6) {
        SetErrors((prev: FirstStepErrors) => ({
          ...prev,
          phoneError: "Phone should be at least 6 symbols!",
        }));
      } else {
        SetErrors((prev: FirstStepErrors) => ({
          ...prev,
          phoneError: "",
        }));
      }
    }

    SetFirstStepData((prev: FirstStepDataProps) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    localStorage.setItem(e.target.name, e.target.value);
  }

  function ValidateEmail(currentEmail: string) {
    return emailRegexPattern.test(currentEmail);
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

        <form className="flex flex-col w-full gap-5">
          <div className="flex flex-col justify-center items-start gap-2 w-full">
            <section className="w-full flex justify-between items-center">
            <label htmlFor="name">Name</label>
            {errors.nameError != "" ? (
              <span className="text-red-500 text-xs tracking-widest">
                {errors.nameError}
              </span>
            ) : null}
            </section>
            <input
              required
              id="name"
              type="text"
              name="name"
              placeholder="e.g. Stephen King"
              className={`w-full px-4 py-3 outline-none ${errors.nameError != '' ? 'border-red-500' : 'border-gray-300'} border-[1px] rounded-md font-bold tracking-widest`}
              onChange={HandleInputsChange}
              value={firstStepData.name}
            />
            
          </div>

          <div className="flex flex-col justify-center items-start gap-2 w-full">
            <section className="w-full flex justify-between items-center">
            <label htmlFor="email">Email Address</label>
            {errors.emailError != "" ? (
              <span className="text-red-500 text-xs tracking-widest">
                {errors.emailError}
              </span>
            ) : null}
            </section>
            <input
              required
              id="email"
              type="email"
              name="email"
              placeholder="e.g. stephenking@gmail.com"
              className={`w-full px-4 py-3 outline-none ${errors.emailError != '' ? 'border-red-500' : 'border-gray-300'} border-[1px] rounded-md font-bold tracking-widest`}
              onChange={HandleInputsChange}
              value={firstStepData.email}
            />
            
          </div>

          <div className="flex flex-col justify-center items-start gap-2 w-full">
            <section className="w-full flex justify-between items-center">
            <label htmlFor="phone">Phone Number</label>
            {errors.phoneError != "" ? (
              <span className="text-red-500 text-xs tracking-widest">
                {errors.phoneError}
              </span>
            ) : null}
            </section>
            <input
              required
              id="phone"
              type="phone"
              name="phone"
              placeholder="e.g. Stephen King"
              className={`w-full px-4 py-3 outline-none ${errors.phoneError != '' ? 'border-red-500' : 'border-gray-300'} border-[1px] rounded-md font-bold tracking-widest`}
              onChange={HandleInputsChange}
              value={firstStepData.phone}
            />
            
          </div>
        </form>
      </div>

      <div className="w-full h-24 mt-5 bg-white flex justify-end items-center lg:static lg:px-5">
        <div className="w-[90%]  flex justify-end items-center mx-auto lg:w-full">
          <button
            className="bg-blue-950 text-white text-xl px-6 py-2 rounded-md lg:text-base"
            onClick={() => {
              if ( firstStepData.name.length < 3) {
                SetErrors((prev: FirstStepErrors) => ({
                  ...prev,
                  nameError: "Name should be at least 3 character long!",
                }));

                return;
              }

              if (
                
                !ValidateEmail(firstStepData.email)
              ) {

                console.log('Email log');
                
                SetErrors((prev: FirstStepErrors) => ({
                  ...prev,
                  emailError: "Please provide a valid email address!",
                }));

                return;
              }

              if ( firstStepData.phone.length < 6) {
                SetErrors((prev: FirstStepErrors) => ({
                  ...prev,
                  phoneError: "Phone should be at least 6 symbols!",
                }));

                return;
              }

              HandleClickNext();
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

export default FirstStep;
