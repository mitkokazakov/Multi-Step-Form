"use client"
import React from 'react'
import StepsNavigation from './StepsNavigation'
import FirstStep from './FirstStep'
import StepsContainer from './StepsContainer'

const FormWrapper = () => {
  return (
    <div className='w-full h-full bg-white flex flex-col relative lg:flex-row lg:w-[800px] lg:h-[600px] lg:justify-center lg:items-center lg:p-4 lg:rounded-xl lg:gap-10'>
      
      <StepsNavigation />

      <StepsContainer />
    </div>
  )
}

export default FormWrapper
