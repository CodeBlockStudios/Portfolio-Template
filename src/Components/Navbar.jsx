import React, { useState } from "react"
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { link } from 'react-scroll'
function Navbar() {

    let Links = [
        { name: "Home", link: "/" },
        { name: "About", link: "/" },
        { name: "Experience", link: "/" },
        { name: "Projects", link: "/" },
    ]

    const [open, setOpen] = useState(false)

    return (
        <div className='sticky w-full top-0 left-0 bg-[#363636]'>
            <div className='items-center py-4 md:px-10 md:flex md:justify-between'>

                {/* Logo */}
                <div className='px-7 cursor-pointer md:px-0'>
                    <img src='../logo.png' alt='Logo' class='h-8 md:object-contain md:h-11 transition-all duration-100'></img>
                </div>

                {/* Burger Menu Icon */}
                <div className="text-3xl absolute right-5 top-4 cursor-pointer md:hidden">
                    <button onClick={() => setOpen(!open)}>
                        {open ? (<HiX size='1em' color="rgb(194 65 12)" />)
                            : (<HiMenuAlt3 size='1em' color="rgb(229 231 235)" />)}
                    </button>
                </div>

                {/* Menu Items */}
                <ul className={`absolute z-[-1] w-full text-center bg-[#363636] pb-5
                md:flex md:items-center md:pb-0 md:static md:z-auto md:w-auto md:pl-0
                transition-all duration-500 ${open ? 'top-16' : 'top-[-490px]'}`}>
                    {
                        Links.map((Nav) => (
                            <li key={Nav.name} className="text-2xl my-7 md:ml-8 md:my-0">
                                <a href={Nav.link} className='text-gray-200 hover:text-gray-400 duration-200'>{Nav.name}</a>
                            </li>
                        ))
                    }

                    <button
                        className='bg-orange-700 text-gray-200 py-2 px-6 
                    rounded md:ml-8 hover:bg-orange-800 duration-200 text-2xl'>
                        Contact
                    </button>

                </ul>
            </div>
        </div>
    )
}

export default Navbar