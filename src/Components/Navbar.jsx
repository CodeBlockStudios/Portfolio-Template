import React, { useState } from "react"
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { Link } from 'react-scroll'
import './Navbar.css'


let Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Experience", link: "/" },
    { name: "Projects", link: "/" },
]

const Navbar = () => {

    const [open, setOpen] = useState(false)
    const [click] = useState(false)

    return (
        <div className='fixed w-full top-0 left-0 bg-primarycolor'>
            <div className='items-center py-4 navlg:px-10 navlg:flex navlg:justify-between'>

                {/* Logo */}

                <Link to={"Home"} smooth={true} duration={500}>
                    <div className='px-7 cursor-pointer navlg:px-0'>
                        <img src='images/logo.png' alt='Logo' class='h-8 navlg:object-contain navlg:h-11 transition-all duration-100'></img>
                    </div>
                </Link>

                {/* Burger Menu Icon */}
                <div className="text-3xl absolute right-5 top-4 cursor-pointer navlg:hidden">
                    <button onClick={() => setOpen(!open)}>
                        {open ? (<HiX size='1em' color="rgb(194 65 12)" />)
                            : (<HiMenuAlt3 size='1em' color="rgb(229 231 235)" />)}
                    </button>
                </div>

                {/* Menu Items */}
                <ul class={click ? 'navmenu active' : 'nav-menu'} 
                className={`absolute z-[-1] w-full text-center bg-primarycolor pb-5
                navlg:flex navlg:items-center navlg:pb-0 navlg:static navlg:z-auto navlg:w-auto navlg:pl-0
                transition-all duration-500 ${open ? 'top-16' : 'top-[-490px]'}`}>
                    {
                        Links.map((Nav) => (
                            <li key={Nav.name} className="text-2xl my-7 navlg:ml-8 navlg:my-0">
                                <Link onClick={() => setOpen(false)} to={Nav.name} spy={true} smooth={true} duration={500} activeClass='active'>{Nav.name}</Link>
                            </li>
                        ))
                    }
                    <Link to="Contact" smooth={true} duration={500}
                        className='cursor-pointer bg-buttoncolor text-fontprimary py-2 px-6 
                    rounded-sm navlg:ml-8 hover:bg-buttonhover duration-200 text-2xl'>
                        Contact
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Navbar