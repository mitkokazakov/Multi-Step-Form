"use client"
import React, { useEffect, useState } from 'react'
import StepsNavigation from './StepsNavigation'
import StepsContainer from './StepsContainer'

const FormWrapper = () => {

  

    const initialData = {
        name: '',
        email: '',
        phone: ''
    }

    const [step, setStep] = useState<number>(localStorage.getItem('step') == null ? 1 : Number(localStorage.getItem('step')))
    const [data, setData] = useState(initialData);

    // useEffect(() => {
    //   setStep(localStorage.getItem('step') == null ? 1 : Number(localStorage.getItem('step')))
    // },[])

    
  return (
    <div className='w-full h-full bg-white flex flex-col relative lg:flex-row lg:w-[800px] lg:h-[600px] lg:justify-center lg:items-center lg:p-4 lg:rounded-xl lg:gap-10 xl:w-[1000px] xl:h-[600px]'>
      
      <StepsNavigation handleStep={setStep} step={step}/>

      <StepsContainer handleStep={setStep} step={step}/>
    </div>
  )
}

export default FormWrapper
