import React from 'react'
import '@fontsource/inter'; // Importing Poppins font
const RotationCard = () => {
    return (
        <div className='flex items-center justify-center min-h-screen'>
            <div className="relative w-80 h-auto rounded-xl bg-black/10 backdrop-blur-md border border-white/20 shadow-lg overflow-hidden hover:rotate-y-20 transition-transform duration-500 ease-in-out cursor-pointer">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/60 to-transparent opacity-20 pointer-events-none"></div>

                <div className="relative z-10 p-4 text-white">
                    <h2 className="text-lg font-semibold py-4 ml-2">Glossy Card</h2>
                    <p className="text-white/80 py-2 ml-2 text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium facilis nesciunt quae commodi laboriosam maxime ex neque consequatur! Unde quisquam explicabo esse culpa molestiae, suscipit cupiditate harum ea voluptates earum repudiandae natus doloremque nam? Rerum quo impedit similique neque consequatur quasi libero? Earum quasi nam ducimus aperiam, quae vitae consequatur.</p>
                </div>
            </div>

        </div>
    )
}

export default RotationCard;