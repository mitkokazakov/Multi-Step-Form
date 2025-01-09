"use client"
import React from 'react'
import FirstStep from './FirstStep'
import SecondStep from './SecondStep'

const StepsContainer = ({handleStep, step}: {handleStep: React.Dispatch<React.SetStateAction<any>>, step: number}) => {
  return (
    <div className='w-full h-full bg-slate-200 lg:w-[60%] lg:bg-white'>
      

      {
        step == 1 ? <FirstStep step={step} handleStep={handleStep}/> : null
      }

      {
        step == 2 ? <SecondStep step={step} handleStep={handleStep}/>: null
      }
    </div>
  )
}

export default StepsContainer
