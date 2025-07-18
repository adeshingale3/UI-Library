import { Instagram, Linkedin, Twitter } from 'lucide-react'
import React from 'react'


const TeamMemberCard = () => {
    return (
        <div className='h-80 w-60 rounded-4xl shadow-lg m-10 overflow-hidden z-10 relative'>
            <div className='flex h-full w-full z-20 absolute mask-b-from-20% mask-b-to-98%'>
                <img src='/images/Adesh.jpeg' className='object-cover h-full w-full brightness-110' />
            </div>
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-white/20 to-transparent z-30 flex items-end px-4 pb-2">
                <div className="flex justify-between items-center w-full mb-4">
                    
                    <div className="flex flex-col">
                        <h2 className="text-white text-[12px] font-semibold">Adesh Ingale</h2>
                        <h2 className="text-white text-[10px] ">Frontend Developer</h2>
                    </div>

                    
                    <div className="flex items-end gap-2">
                        <a href="#"><Instagram color="white" size={19} /></a>
                        <a href="#"><Twitter color="white" size={20} /></a>
                        <a href="#"><Linkedin color="white" size={20} /></a>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default TeamMemberCard