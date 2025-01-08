import React from 'react'

const SecondStep = ({handleStep, step}: {handleStep: React.Dispatch<React.SetStateAction<any>>, step: number}) => {
  return (
    <div className='w-full h-full'>
      Second Step
    </div>
  )
}

export default SecondStep
