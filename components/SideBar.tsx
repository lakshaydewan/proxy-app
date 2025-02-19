'use client'
import { KeyRound, BookOpen, Database, Play, LogOut } from "lucide-react"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react"

export default function Sidebar() {

    const [isOpen, setIsOpen] = useState(true);
    const url = usePathname();

    const menuItems = [
        { name: "Data Proxy", link: "/dashboard", icon: Database, current: true },
        { name: "Runs", link: "/keys", icon: Play, current: false },
        { name: "API Keys", link: "/get-api-key", icon: KeyRound, current: false },
        { name: "Documentation", link: "/docs", icon: BookOpen, current: false },
    ]

    return (
        <div
            className={`${isOpen ? "w-64" : "w-[60px] md:w-20"
                } fixed top-0 left-0 md:static flex h-full z-30 bg-neutral-900 flex-col border-r md:pr-0 border-neutral-800 transition-all duration-300`}
        >
            <div className="flex h-16 items-center justify-between px-4">
                <div className="flex items-center">
                    {isOpen && <span className="ml-3 text-lg font-mono text-white font-semibold">PROXY_AI</span>}
                </div>
                <button onClick={() => setIsOpen(!isOpen)} className="text-gray-400 hover:text-white focus:outline-none">
                    {isOpen ? "←" : "→"}
                </button>
            </div>
            <nav className="mt-5 flex-1 space-y-1 px-2">
                {menuItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.link}
                        className={`group flex items-center rounded-lg px-2 py-2 text-sm font-medium ${item.link === url ? "bg-gray-800 text-white" : "text-gray-300 hover:bg-gray-800 hover:text-white"
                            }`}
                    >
                        <item.icon className="mr-3 h-5 w-5" />
                        {isOpen && <span>{item.name}</span>}
                    </Link>
                ))}
            </nav>
            <div className="border-t p-2 w-full border-neutral-800">
                <a
                    href="#"
                    className="group flex items-center rounded-lg px-2 py-2 text-sm font-medium text-blue-400 hover:bg-gray-800"
                >
                    <span className="mr-2">⭐</span>
                    {isOpen && <span>Upgrade Plan</span>}
                </a>
                <button className="mt-1 flex w-full items-center rounded-lg px-2 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white">
                    <LogOut className="mr-3 h-5 w-5" />
                    {isOpen && <span>Sign Out</span>}
                </button>
            </div>
        </div>
    )
}

