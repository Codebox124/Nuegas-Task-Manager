'use client'
import Image from "next/image"
import Logo from "../../public/logo.png"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MdDashboard } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";
import { IoMdPerson } from "react-icons/io";
import { TbMessage } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";

export default function DashLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname()
    return (
        <div className="flex">
            <aside className="w-[15%] p-8 bg-white flex flex-col justify-between  shadow-lg  h-screen">
                <div className="flex justify-center grow-0">
                    <Image src={Logo} alt="logo" width={200} />
                </div>
                <div className=" flex flex-col gap-4 grow mt-10 ">
                    <Link className={`bg-white w-full px-4 rounded-xl text-[#8E92BC] py-4 items-center flex gap-3 ${pathname === '/dashboard' ? 'bg-[#F5F5F7] text-black font-bold' : ''}`} href='/dashboard'
                    >
                        <div className="text-xl"><MdDashboard /></div>
                        <span className="">Overview</span>


                    </Link>
                    <Link className={`bg-white w-full px-4 rounded-xl text-[#8E92BC] py-4 items-center flex gap-3 ${pathname === '/dashboard/task' ? 'bg-[#F5F5F7] text-black font-bold' : ''}`} href='/dashboard/task'
                    >
                        <div className="text-xl"><IoBookOutline /></div>
                        <span className="">Task</span>


                    </Link>
                    <Link className={`bg-white w-full px-4 rounded-xl text-[#8E92BC] py-4 items-center flex gap-3 ${pathname === '/dashboard/mentors' ? 'bg-[#F5F5F7] text-black font-bold' : ''}`} href='/dashboard/mentors'
                    >
                        <div className="text-xl"><IoMdPerson /></div>
                        <span className="">Mentors</span>


                    </Link>
                    <Link className={`bg-white w-full px-4 rounded-xl text-[#8E92BC] py-4 items-center flex gap-3 ${pathname === '/dashboard/message' ? 'bg-[#F5F5F7] text-black font-bold' : ''}`} href='/dashboard/message'
                    >
                        <div className="text-xl"><TbMessage /></div>
                        <span className="">Message</span>


                    </Link>
                    <Link className={`bg-white w-full px-4 rounded-xl text-[#8E92BC] py-4 items-center flex gap-3 ${pathname === '/dashboard/settings' ? 'bg-[#F5F5F7] text-black font-bold' : ''}`} href='/dashboard/settings'
                    >
                        <div className="text-xl"><IoSettingsOutline /></div>
                        <span className="">Settings</span>


                    </Link>



                </div>
                <div className="w-full h-[200px] bg-slate-800 px-4 flex flex-col justify-center items-center rounded-xl text-white text-center ">
                    <div className="bg-slate-800 -mt-16 h-[50px] w-[50px] rounded-full border-2 grid items-center justify-center border-white">
                        <span className="text-center text-3xl">?</span>

                    </div>
                    <div className="mt-9">
                        <p className="text-xl mb-3">Help Center</p>
                        <span className="text-xs">Having Trouble in Learning.
                            Please contact us for more questions.
                        </span>
                    </div>

                </div>


            </aside>
            <main className="grow p-10 bg-[#F5F5F7]">

                {children}
            </main>
        </div>
    )
}
