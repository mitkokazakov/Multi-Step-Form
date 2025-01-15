"use client";
import React, { useState } from "react";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import FourthStep from "./FourthStep";

const StepsContainer = ({step, handleStep}: {step: number, handleStep: React.Dispatch<React.SetStateAction<any>>}) => {

  

  const initialData: DataProps = {
    name: localStorage.getItem('name') == null ? '' : localStorage.getItem('name') as string,
    email: localStorage.getItem('email') == null ? '' : localStorage.getItem('email') as string,
    phone: localStorage.getItem('phone') == null ? '' : localStorage.getItem('phone') as string,
    planDuration: localStorage.getItem('planDuration') == 'false' ? 'Monthly' : 'Yearly',
    planType: localStorage.getItem('planType') == null ? '' : localStorage.getItem('planType') as string,
    planPrice: localStorage.getItem('planPrice') == null ? 0 : Number(localStorage.getItem('planType')),
    onlineService: localStorage.getItem('onlineService') == 'false' ? 0 : Number(localStorage.getItem('onlineService')),
    largerStorage: localStorage.getItem('largerStorage') == 'false' ? 0 : Number(localStorage.getItem('largerStorage')),
    customProfile: localStorage.getItem('customProfile') == 'false' ? 0 : Number(localStorage.getItem('customProfile')),
    totalPrice: 0
  };

  const [data, setData] = useState(initialData);

  console.log(data);

  return (
    <div className="w-full h-full bg-slate-200 lg:w-[60%] lg:bg-white">
      {step == 1 ? (
        <FirstStep step={step} handleStep={handleStep} handleData={setData} />
      ) : null}

      {step == 2 ? <SecondStep step={step} handleStep={handleStep} handleData={setData}/> : null}

      {step == 3 ? <ThirdStep step={step} handleStep={handleStep} handleData={setData}/> : null}

      {step == 4 ? <FourthStep handleStep={handleStep} data={data}/> : null}
    </div>
  );
};

export default StepsContainer;
