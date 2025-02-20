'use server'
import React from 'react'
import Sidebar from '../../components/SideBar'
import { SignedIn, UserButton } from '@clerk/nextjs'
import { prisma } from '../../lib/prisma'
import { currentUser } from '@clerk/nextjs/server'
import Keys_Display from '../../components/keys'

async function getKeys(userId: string) {
  return prisma.apiKey.findMany({
    where: { clerkUserId: userId },
    orderBy: { createdAt: "desc" }
  })
}

const Keys = async () => {
  const userId = await currentUser()
  const keys = await getKeys(userId?.id as string)

  return (
    <div className='w-full h-screen flex bg-neutral-900 text-white'>
      <div className=''>
        <Sidebar />
      </div>
      <div className='ml-[60px] md:ml-0 w-full h-full flex flex-col justify-start px-3 pt-2 items-center'>
        <h1 className='text-3xl font-mono font-semibold mb-3'>Keys</h1>
        <div className='w-full h-full flex overflow-y-scroll flex-col justify-start px-3 items-center'>
          <Keys_Display keys={keys} />
        </div>
        <div className='w-fit h-fit flex justify-center items-center absolute top-2 right-4'>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </div>
  )
}

export default Keys