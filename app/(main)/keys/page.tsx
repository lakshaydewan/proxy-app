'use server'
import React from 'react'
import Keys_Display from '../../../components/keys'

const Keys = async () => {
  
  return (
    <div className='w-full h-screen flex bg-neutral-900 text-white'>
      <div className='ml-[60px] md:ml-0 w-full h-full flex flex-col justify-start px-3 pt-2 items-center'>
        <h1 className='text-3xl font-mono font-semibold mb-3'>Keys</h1>
        <div className='w-full h-full flex overflow-y-scroll flex-col justify-start px-3 items-center'>
          <Keys_Display />
        </div>
      </div>
    </div>
  )
}

export default Keys