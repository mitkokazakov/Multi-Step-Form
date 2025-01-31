"use client"
import React, { useEffect, useState } from 'react'
import StepsNavigation from './StepsNavigation'
import StepsContainer from './StepsContainer'

const FormWrapper = () => {

  
    //const [step, setStep] = useState<number>(localStorage.getItem('step') == null ? 1 : Number(localStorage.getItem('step')))
    const [step, setStep] = useState<number>(0)

    useEffect(() => {
       const currentStep = localStorage.getItem('step') == null ? 1 : Number(localStorage.getItem('step'));

       setStep(currentStep);
    },[])

    
  return (
    <div className='w-full h-full bg-white flex flex-col relative lg:flex-row lg:w-[800px] lg:h-[600px] lg:justify-center lg:items-center lg:p-4 lg:rounded-xl lg:gap-10 xl:w-[1000px] xl:h-[600px]'>
      
      <StepsNavigation handleStep={setStep} step={step}/>

      <StepsContainer handleStep={setStep} step={step}/>
    </div>
  )
}

export default FormWrapper
