'use client'
import React from 'react'
import Sidebar from '../../components/SideBar'
import { SignedIn, UserButton, useUser } from '@clerk/nextjs'
import { createApiKey } from '../actions'
import { Eye, EyeOff } from "lucide-react";
import { Clipboard } from 'lucide-react'

const GetApiKey = () => {

  const user = useUser()
  const userID = user?.user?.id;
  const [projectName, setProjectName] = React.useState('');
  const [key, setKey] = React.useState('');
  const [loading, setloading] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  return (
    <div className='w-full bg-neutral-900 h-screen flex text-white'>
      <div className=''>
        <Sidebar />
      </div>
      <div className='ml-[60px] md:ml-0 w-full h-full flex flex-col justify-start px-3 pt-2 items-center'>
        <div className='w-fit h-fit flex justify-center items-center absolute top-2 right-4'>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
        <h1 className='text-3xl font-mono font-semibold mb-3'>Key Store</h1>
        <div className='flex flex-col gap-0.5 mt-4 w-full'>
          <span className='text-base font-mono font-semibold pl-1'>PROJECT NAME</span>
          <input value={projectName} onChange={e => setProjectName(e.target.value)} className='border bg-neutral-900 w-full pl-3 p-2 font-mono font-light rounded-md border-neutral-800 focus:border-neutral-500 focus:outline-none ring-0' type="text" placeholder='random-ai-startup' />
        </div>
        <div className='flex justify-center mt-2 items-start flex-col gap-0.5 w-full'>
          <button disabled={loading} onClick={async () => {
            if (!userID) {
              alert("Please sign in to generate API key")
              return
            }
            if (!projectName) {
              alert("Please enter project name")
              return
            }
            try {
              setloading(true)
              const res = await createApiKey(userID as string, projectName)
              setKey(res.key);
              setProjectName("");
            } catch (e: unknown) {
                console.error(e)
                alert("Error generating key")
            }
            finally {
              setloading(false)
            }
          }} className='bg-neutral-500 disabled:pointer-events-none disabled:opacity-50 hover:bg-neutral-600 w-full md:w-fit transition-all duration-300 ease-out cursor-pointer text-white md:px-6 py-2 rounded-md font-mono font-semibold'>GENERATE</button>
          {
            loading && <div className='mt-12 w-full h-full flex justify-center items-center'>
              <div className='w-fit h-fit flex justify-center items-center'>
                <div className='animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-neutral-300'></div>
              </div>
            </div>
          }
          {
            key && (
              <div className="mt-4 relative w-full p-3 py-5 bg-neutral-800 rounded-md font-mono text-sm flex items-end justify-between">
                {
                  copied && <div className='absolute -top-7 text-xs font-mono bg-neutral-500 border border-neutral-50 p-1 rounded-lg right-1.5 flex items-center gap-2'>
                      Copied!
                  </div>
                }
                <div className='absolute top-3 cursor-pointer right-1.5 flex items-center gap-2'>
                  <button onClick={() => {
                    setCopied(true)
                    setTimeout(() => {
                      setCopied(false)
                    }, 4000)
                    window.navigator.clipboard.writeText(key)}} className="text-neutral-400 hover:text-white focus:outline-none">
                    <Clipboard className="mr-2 h-4 w-4" />
                  </button>
                </div>
                <div className="flex flex-col gap-3 w-full">
                  <span className="text-neutral-400">Your API Key:</span>
                  <input
                    type={visible ? "text" : "password"}
                    className="text-green-400 bg-transparent break-all outline-none"
                    value={key}
                    readOnly
                  />
                </div>
                <button
                  onClick={() => setVisible(!visible)}
                  className="text-neutral-400 mb-0.5 hover:text-white focus:outline-none ml-2"
                >
                  {visible ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default GetApiKey