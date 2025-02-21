'use client'
import React from 'react'
import { Trash, CheckCircle, XCircle } from "lucide-react";
import { deleteApiKey } from '../app/actions';
import { changeStatus } from '../app/actions';
import ClipBoard from './ClipBoard';

interface Key {
    id: string;
    projectName: string;
    key: string;
    status: string;
    createdAt: Date;
}

const Keys_Display = ({ keys }: { keys: Key[] }) => {

    const handleDeleteKey = async (keyId: string) => {
        try {
          await deleteApiKey(keyId);
          alert("Key deleted successfully!");
        } catch (error) {
          console.error("Failed to delete key:", error);
          alert("Error deleting key.");
        }
      };

  return (
    <div className='flex flex-col gap-0.5 mt-4 w-full'>
          {
            keys.length === 0 && <div className='text-center font-mono font-semibold text-neutral-400 text-lg'>No keys found</div>
          }
          {
            keys.map((key, index) => (
              <div
                key={index}
                className="flex justify-between items-center w-full p-4 bg-neutral-800 rounded-lg shadow-md"
              >
                <div className="flex flex-col">
                  <span className="text-lg font-mono font-semibold text-white">{key.projectName}</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    {key.status === "ACTIVE" ? (
                      <CheckCircle onClick={() => changeStatus(key.id, "INACTIVE")} className="text-green-400 cursor-pointer w-5 h-5" />
                    ) : (
                      <XCircle onClick={() => changeStatus(key.id, "ACTIVE")} className="text-red-500 cursor-pointer w-5 h-5" />
                    )}
                    <span className="text-sm text-neutral-400">
                      {key.status === "ACTIVE" ? "Active" : "Inactive"}
                    </span>
                  </div>
                  <ClipBoard keyValue={key.key} />
                  <button
                    onClick={() => handleDeleteKey(key.id)}
                    className="text-red-500 hover:text-red-400 transition"
                  >
                    <Trash className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))
          }
        </div>
  )
}

export default Keys_Display;