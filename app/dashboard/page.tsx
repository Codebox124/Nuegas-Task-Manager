import React from 'react'
import DashLayout from './layout'
import { IoNotificationsOutline } from "react-icons/io5";
import Profile from '../../public/Profil.png'
import Image from 'next/image';
export default function page() {
    return (

        <div className='flex  justify-between '>
            <div>
                <h2 className='text-3xl font-bold mb-2'>Hi, Skylar Dias</h2>
                <span className='text-xs'>Let's finish your task today!</span>
            </div>
            <div className='flex gap-10 items-center'>
                <div className='text-xl'>
                    <IoNotificationsOutline />
                </div>
                <div>
                    <Image src={Profile} height={50} width={50} alt='' />

                </div>
            </div>
        </div>

    )
}
