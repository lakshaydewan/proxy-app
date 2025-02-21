'use client'
import React from 'react'
import { Copy } from "lucide-react";

const ClipBoard = ({ keyValue }: { keyValue: string }) => {

    const [copied, setCopied] = React.useState(false);

    return (
        <div className='relative w-fit bg-neutral-800 rounded-md font-mono text-sm flex items-end justify-between'>
            {
                copied && <div className='absolute -top-8 text-xs font-mono bg-neutral-500 border border-neutral-50 p-1 rounded-lg right-1.5 flex items-center gap-2'>
                    Copied!
                </div>
            }
            <button
                onClick={() => {
                    setCopied(true)
                    setTimeout(() => {
                        setCopied(false)
                    }, 4000)
                    window.navigator.clipboard.writeText(keyValue)
                }}
                className="text-neutral-400 hover:text-white transition"
            >
                <Copy className="w-5 h-5" />
            </button>
        </div>
    )
}

export default ClipBoard