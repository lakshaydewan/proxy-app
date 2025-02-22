'use client'
import { Trash, CheckCircle, XCircle } from "lucide-react";
import { deleteApiKey } from '../app/actions';
import { changeStatus } from '../app/actions';
import ClipBoard from './ClipBoard';
import { useState } from "react";
import { Loader } from "./Loader";
import { motion } from "motion/react";

interface Key {
  id: string;
  projectName: string;
  key: string;
  status: string;
  createdAt: Date;
}

const Keys_Display = ({ keys }: { keys: Key[] }) => {

  const [toastValue, setToastValue] = useState("");

  const handleDeleteKey = async (keyId: string) => {
    setToastValue("Deleting key");
    try {
      await deleteApiKey(keyId);
    } catch (error) {
      console.error("Failed to delete key:", error);
    }finally {
      setToastValue("");
    }
  };

  const handleChangeStatus = async (keyId: string, status: string) => {
    setToastValue("Changing status");
    try {
      await changeStatus(keyId, status);
    } catch (error) {
      console.error("Failed to change status:", error);
    }finally {
      setToastValue("");
    }
  };

  return (
    <div className='flex flex-col gap-0.5 mt-4 w-full'>
      {
        toastValue && <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5, ease: "backOut"}}
        className="flex absolute gap-2 border rounded-lg p-2 bg-neutral-800 top-4 z-30 left-[50%] -translate-x-[50%] justify-center items-center w-fit h-fit">
          <div className="text-center font-mono font-semibold text-sm text-neutral-100">{toastValue}</div>
          <Loader />
        </motion.div>
      }
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
                  <CheckCircle onClick={() => handleChangeStatus(key.id, "INACTIVE")} className="text-green-400 cursor-pointer w-5 h-5" />
                ) : (
                  <XCircle onClick={() => handleChangeStatus(key.id, "ACTIVE")} className="text-red-500 cursor-pointer w-5 h-5" />
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