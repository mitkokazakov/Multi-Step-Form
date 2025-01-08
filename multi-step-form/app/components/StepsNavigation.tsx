"use client"
import React from 'react'

const StepsNavigation = ({handleStep, step}: {handleStep: React.Dispatch<React.SetStateAction<any>>, step: number}) => {
  return (
    <div className='h-56 w-full steps-navigation lg:h-full lg:w-[40%] lg:rounded-xl lg:pl-10'>
      <div className='w-full flex justify-center items-start gap-10 py-10 lg:flex-col'>
        <div className='flex justify-center items-center gap-5'>
            <button className={`w-10 h-10 rounded-full ${step == 1 ? 'bg-teal-300' : 'bg-transparent'} border-[1px] border-white text-white font-bold`} onClick={() => {handleStep(1)}}>1</button>

            <div className=' hidden lg:flex lg:flex-col lg:justify-center lg:items-start lg:text-white'>
                <p className='text-sm text-gray-400'>STEP 1</p>

                <h4 className='text-sm font-bold tracking-widest'>YOUR INFO</h4>
            </div>
        </div>

        <div className='flex justify-center items-center gap-5'>
            <button className={`w-10 h-10 rounded-full ${step == 2 ? 'bg-teal-300' : 'bg-transparent'} border-[1px] border-white text-white font-bold`} onClick={() => {handleStep(2)}}>2</button>

            <div className=' hidden lg:flex lg:flex-col lg:justify-center lg:items-start lg:text-white'>
                <p className='text-sm text-gray-400'>STEP 2</p>

                <h4 className='text-sm font-bold tracking-widest'>SELECT PLAN</h4>
            </div>
        </div>

        <div className='flex justify-center items-center gap-5'>
            <button className={`w-10 h-10 rounded-full ${step == 3 ? 'bg-teal-300' : 'bg-transparent'} border-[1px] border-white text-white font-bold`} onClick={() => {handleStep(3)}}>3</button>

            <div className=' hidden lg:flex lg:flex-col lg:justify-center lg:items-start lg:text-white'>
                <p className='text-sm text-gray-400'>STEP 3</p>

                <h4 className='text-sm font-bold tracking-widest'>ADD-ONS</h4>
            </div>
        </div>

        <div className='flex justify-center items-center gap-5'>
            <button className={`w-10 h-10 rounded-full ${step == 4 ? 'bg-teal-300' : 'bg-transparent'} border-[1px] border-white text-white font-bold`} onClick={() => {handleStep(4)}}>4</button>

            <div className=' hidden lg:flex lg:flex-col lg:justify-center lg:items-start lg:text-white'>
                <p className='text-sm text-gray-400'>STEP 4</p>

                <h4 className='text-sm font-bold tracking-widest'>SUMMARY</h4>
            </div>
        </div>
      </div>
    </div>
  )
}

export default StepsNavigation
