"use client";
import React, { useEffect, useState } from "react";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import FourthStep from "./FourthStep";
import FifthStep from "./FifthStep";

const StepsContainer = ({step, handleStep}: {step: number, handleStep: React.Dispatch<React.SetStateAction<number>>}) => {

  

  // const initialData: DataProps = {
  //   name: localStorage.getItem('name') == null ? '' : localStorage.getItem('name') as string,
  //   email: localStorage.getItem('email') == null ? '' : localStorage.getItem('email') as string,
  //   phone: localStorage.getItem('phone') == null ? '' : localStorage.getItem('phone') as string,
  //   planDuration: localStorage.getItem('planDuration') == 'false' || localStorage.getItem('planDuration') == null ? 'Monthly' : 'Yearly',
  //   planType: localStorage.getItem('planType') == null ? 'Arcade' : localStorage.getItem('planType') as string,
  //   planPrice: localStorage.getItem('planPrice') == null ? 9 : Number(localStorage.getItem('planPrice')),
  //   onlineService: localStorage.getItem('onlineService') == 'false' || localStorage.getItem('onlineService') == null ? 0 : Number(localStorage.getItem('onlineService')),
  //   largerStorage: localStorage.getItem('largerStorage') == 'false' || localStorage.getItem('largerStorage') == null ? 0 : Number(localStorage.getItem('largerStorage')),
  //   customProfile: localStorage.getItem('customProfile') == 'false' || localStorage.getItem('customProfile') == null ? 0 : Number(localStorage.getItem('customProfile')),
  //   totalPrice: 0
  // };

  // const initialData: DataProps = {
  //   name: localStorage.getItem('name') || '',
  //   email: localStorage.getItem('email') || '',
  //   phone: localStorage.getItem('phone') || '',
  //   planDuration: localStorage.getItem('planDuration') || '' || localStorage.getItem('planDuration') == 'false' ? 'Monthly' : 'Yearly',
  //   planType: localStorage.getItem('planType') || 'Arcade',
  //   planPrice: localStorage.getItem('planPrice') == null ? 9 : Number(localStorage.getItem('planPrice')),
  //   onlineService: localStorage.getItem('onlineService') == 'false' || localStorage.getItem('onlineService') == null ? 0 : Number(localStorage.getItem('onlineService')),
  //   largerStorage: localStorage.getItem('largerStorage') == 'false' || localStorage.getItem('largerStorage') == null ? 0 : Number(localStorage.getItem('largerStorage')),
  //   customProfile: localStorage.getItem('customProfile') == 'false' || localStorage.getItem('customProfile') == null ? 0 : Number(localStorage.getItem('customProfile')),
  //   totalPrice: 0
  // };

  const [data, setData] = useState<DataProps>({
      name: '',
      email: '',
      phone: '',
      planDuration: '',
      planType: '',
      planPrice: 0,
      onlineService: 0,
      largerStorage: 0,
      customProfile:0,
      totalPrice: 0
  });

  // console.log(data);

  // console.log(localStorage.getItem('name'));

  useEffect(() => {
    const initialData: DataProps = {
      name: localStorage.getItem('name') == null ? '' : localStorage.getItem('name') as string,
      email: localStorage.getItem('email') == null ? '' : localStorage.getItem('email') as string,
      phone: localStorage.getItem('phone') == null ? '' : localStorage.getItem('phone') as string,
      planDuration: localStorage.getItem('planDuration') == 'false' || localStorage.getItem('planDuration') == null ? 'Monthly' : 'Yearly',
      planType: localStorage.getItem('planType') == null ? 'Arcade' : localStorage.getItem('planType') as string,
      planPrice: localStorage.getItem('planPrice') == null ? 9 : Number(localStorage.getItem('planPrice')),
      onlineService:  localStorage.getItem('onlineServicePrice') == null ? 0 : Number(localStorage.getItem('onlineServicePrice')),
      largerStorage:  localStorage.getItem('largerStoragePrice') == null ? 0 : Number(localStorage.getItem('largerStoragePrice')),
      customProfile:  localStorage.getItem('customProfilePrice') == null ? 0 : Number(localStorage.getItem('customProfilePrice')),
      totalPrice: 0
    };

    setData(initialData);
  },[step])
  

  return (
    <div className="w-full h-full bg-slate-200 lg:w-[60%] lg:bg-white">
      {step == 1 ? (
        <FirstStep handleStep={handleStep} handleData={setData} />
      ) : null}

      {step == 2 ? <SecondStep handleStep={handleStep} handleData={setData}/> : null}

      {step == 3 ? <ThirdStep handleStep={handleStep} handleData={setData}/> : null}

      {step == 4 ? <FourthStep handleStep={handleStep} data={data}/> : null}

      {step == 5 ? <FifthStep /> : null}
    </div>
  );
};

export default StepsContainer;
