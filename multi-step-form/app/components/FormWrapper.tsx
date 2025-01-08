"use client"
import React, { useState } from 'react'
import StepsNavigation from './StepsNavigation'
import FirstStep from './FirstStep'
import StepsContainer from './StepsContainer'

const FormWrapper = () => {

    const initialData = {
        name: '',
        email: '',
        phone: ''
    }

    const [step, setStep] = useState(1);
    const [data, setData] = useState(initialData);

    
  return (
    <div className='w-full h-full bg-white flex flex-col relative lg:flex-row lg:w-[800px] lg:h-[600px] lg:justify-center lg:items-center lg:p-4 lg:rounded-xl lg:gap-10'>
      
      <StepsNavigation handleStep={setStep} step={step}/>

      <StepsContainer step={step} handleStep={setStep}/>
    </div>
  )
}

export default FormWrapper
