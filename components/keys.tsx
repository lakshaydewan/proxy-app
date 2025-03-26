'use client'
import { Trash, CheckCircle, XCircle } from "lucide-react";
import { deleteApiKey, changeStatus } from '../app/actions';
import ClipBoard from './ClipBoard';
import { useEffect, useState } from "react";
import { Loader } from "./Loader";
import { motion } from "motion/react";
import { useUser } from "@clerk/nextjs";
import { getKeys } from "@/lib/actions";

interface Key {
  id: string;
  projectName: string;
  key: string;
  status: string;
  createdAt: Date;
}

const Keys_Display = () => {
  const [toastValue, setToastValue] = useState("");
  const [keys, setKeys] = useState<Key[]>([]);
  const [noKeys, setNoKeys] = useState(false);
  const { user } = useUser();

  useEffect(() => {
    if (!user?.id) return;
    async function fetchKeys() {
      try {
        const data = await getKeys(user?.id as string);
        if (data.length === 0) setNoKeys(true);
        setKeys(data);
      } catch (error) {
        console.error("Failed to fetch keys:", error);
      }
    }
    fetchKeys();
  }, [user?.id]);

  const handleDeleteKey = async (keyId: string) => {
    setToastValue("Deleting key...");
    try {
      await deleteApiKey(keyId);
      setKeys((prevKeys) => prevKeys.filter((key) => key.id !== keyId));
    } catch (error) {
      console.error("Failed to delete key:", error);
    } finally {
      setToastValue("");
    }
  };

  const handleChangeStatus = async (keyId: string, status: string) => {
    setToastValue("Changing status...");
    try {
      await changeStatus(keyId, status);
      setKeys((prevKeys) =>
        prevKeys.map((key) =>
          key.id === keyId ? { ...key, status } : key
        )
      );
    } catch (error) {
      console.error("Failed to change status:", error);
    } finally {
      setToastValue("");
    }
  };

  return (
    <div className='flex flex-col gap-0.5 mt-4 w-full'>
      {toastValue && (
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.5, ease: "backOut" }}
          className="flex absolute gap-2 border rounded-lg p-2 bg-neutral-800 top-4 z-30 left-[50%] -translate-x-[50%] justify-center items-center w-fit h-fit"
        >
          <div className="text-center font-mono font-semibold text-sm text-neutral-100">{toastValue}</div>
          <Loader />
        </motion.div>
      )}
      {
        noKeys ? (
          <div className="flex justify-center items-center w-full h-full">
            <div className='text-center font-mono font-semibold text-neutral-400 text-lg'>
              No keys found
            </div>
          </div>
        ) : (
          <>
            {keys.length === 0 ? (
              <div className='w-full justify-center items-center flex p-4'>
                <Loader />
              </div>
            ) : (
              keys.map((key) => (
                <div key={key.id} className="flex justify-between items-center w-full p-4 bg-neutral-800 rounded-lg shadow-md">
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
                    <button onClick={() => handleDeleteKey(key.id)} className="text-red-500 hover:text-red-400 transition">
                      <Trash className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </>
        )
      }
    </div>
  );
};

export default Keys_Display;
