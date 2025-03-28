'use client'
import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import CodeEditor from '@/components/CodeEditor'
import ResponseCodeEditor from '@/components/ResponseCodeEditor'

const Dash = () => {

    const [url, setUrl] = useState('');
    const [instructions, setInstructions] = useState('');
    const [schema, setSchema] = useState(``);
    const [docs, setDocs] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        try {
            setLoading(true)
            const res = await axios.post(`${process.env.NEXT_PUBLIC_URL_PROD_URL}/api/get-response`, {
                url,
                instructions,
                schema,
                docs
            })
            //@ts-expect-error wwell idk what im doing
            setResponse(res?.data.data)
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className='bg-neutral-900 w-full h-screen flex text-white'>
            <div className='ml-[60px] overflow-y-scroll md:ml-0 w-full h-full flex flex-col justify-start px-3 pt-2 items-center'>
                <h1 className='text-3xl font-mono font-semibold mb-3'>Play-Ground</h1>
                <div className='flex md:flex-row flex-col gap-2 md:gap-3.5 w-full'>
                    <div className='flex justify-center items-start flex-col gap-0.5 w-full'>
                        <span className='text-base font-mono font-semibold pl-1'>URL</span>
                        <input value={url} onChange={(e) => setUrl(e.target.value)} className='bg-neutral-900 border w-full pl-3 p-2 font-mono font-light rounded-md border-neutral-800 focus:border-neutral-500 focus:outline-none ring-0' type="text" placeholder='https://example.com' />
                    </div>
                    <div className='flex justify-center items-start flex-col gap-0.5 w-full'>
                        <span className='text-base font-mono font-semibold pl-1'>INSTRUCTION</span>
                        <input value={instructions} onChange={(e) => setInstructions(e.target.value)} className='bg-neutral-900 border w-full pl-3 p-2 font-mono font-light rounded-md border-neutral-800 focus:border-neutral-500 focus:outline-none ring-0' type="text" placeholder='Remove the empty fields and add an ID' />
                    </div>
                </div>
                <div className='flex flex-col gap-0.5 w-full mt-2'>
                    <span className='text-base font-mono font-semibold pl-1'>SCHEMA (optional)</span>
                    <div className='overflow-y-hidden h-fit w-full rounded-md border border-neutral-800'>
                        <CodeEditor value={schema} onChange={(e) => setSchema(e)} />
                    </div>
                </div>
                <div className='flex justify-center mt-2 items-start flex-col gap-0.5 w-full'>
                    <span className='text-base font-mono flex justify-center items-center gap-1 font-semibold pl-1'>DOCS-LINK <span className='p-0.5 text-xs font-mono font-light rounded-md text-red-400 border border-red-500'>EXP</span> (optional)</span>
                    <div className='flex md:flex-row flex-col justify-between items-center gap-2 w-full'>
                        <input value={docs} onChange={(e) => setDocs(e.target.value)} className='border bg-neutral-900 w-full pl-3 p-2 font-mono font-light rounded-md border-neutral-800 focus:border-neutral-500 focus:outline-none ring-0' type="text" placeholder='https://example.com/docs' />
                        <button onClick={handleSubmit} className='bg-neutral-500 hover:bg-neutral-600 w-full md:w-fit transition-all duration-300 ease-out cursor-pointer text-white md:px-6 py-2 rounded-md font-mono font-semibold'>Submit</button>
                    </div>
                </div>
                <div className='h-[1px] mb-0.5 mt-3 w-full bg-neutral-800'></div>
                <div className='flex flex-col gap-0.5 w-full h-full'>
                    <span className='text-lg font-mono font-semibold pl-1'>RESPONSE</span>
                    <div className='overflow-y-hidden mt-1 h-full w-full rounded-md border border-neutral-800'>
                        {
                            loading ? (
                                <div className='h-[290px] w-full'>
                                    <div className='mt-0 w-full h-full flex justify-center items-center'>
                                        <div className='w-fit h-full flex justify-center items-center'>
                                            <div className='animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-neutral-300'></div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className='h-full'>
                                    <ResponseCodeEditor code={response} />
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dash