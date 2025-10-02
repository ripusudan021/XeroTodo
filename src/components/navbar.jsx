import React from 'react'
import clearIcon from '../assets/clear.svg';



function Navbar({ deletetodos }) {
    return (
        <div className='flex justify-around my-2 py-2 text-white sticky top-0 bg-black z-10'>
            <div className='text-lg cursor-pointer font-bold'>
                <span className=''>XERO</span><span className='text-[#e64a26] '>TODO</span></div>
            <button onClick={deletetodos} className='cursor-pointer hover:font-semibold '><img className='w-6 h-6' src={clearIcon} alt="Logout" /></button>
        </div>
    )
}

export default Navbar
