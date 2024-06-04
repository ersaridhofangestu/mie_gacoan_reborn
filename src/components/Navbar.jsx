import React, { useEffect, useState } from 'react'
import { navbar } from '@helpers'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { Link } from 'react-router-dom'

const Navbar = ({ location }) => {
    const [onclick, setOnclick] = useState(false)
    const [bg, setBg] = useState(false)
    const handleClick = () => setOnclick(!onclick)

    useEffect(() => {
        handleBg()
        handleScroll()

    }, [onclick, bg])

    const handleScroll = () => {
        const targetElement = document.querySelector('#navbar-menu')
        if (onclick && targetElement) {
            disableBodyScroll(targetElement)
        } else {
            enableBodyScroll(targetElement)
        }
    }

    const handleBg = () => {
        window.addEventListener("scroll", () => {
            setBg(window.scrollY > 10);
        });
        return () => {
            window.removeEventListener("scroll", () => {
                setBg(window.scrollY > 10);
            });
        };
    }

    return (
        <header className={`fixed top-0 w-full z-50 transition-colors duration-300 ease-in-out ${window.innerWidth >= 768 ? (bg && "bg-dark-999 border-white/70  border-b-2 ") : "bg-dark-999 border-white/70  border-b-2"}`}>
            <nav className='max-w-[60rem] mx-auto py-5 px-[1rem] lg:px-0 '>
                <div className='flex justify-between items-center'>
                    <img
                        src='https://miegacoan.com/images/logo-full.png'
                        alt='icon mie gacoan'
                        width={80}
                        height={80}
                    />
                    {window.innerWidth >= 768 ? <Dekstop /> : <Mobile onclick={handleClick} click={onclick} />}
                </div>
                <div id='navbar-menu' className={`fixed mt-6 w-screen h-[100vh] ${onclick ? "translate-x-0" : "translate-x-[100%] "} left-0 flex justify-end transition-all duration-500 ease-in-out lg:hidden z-50 `}>
                    <div className={`blur-sm bg-dark-999/70 w-screen h-[100vh] `} />
                    <div className={`absolute bg-dark-999 w-[90%] h-[100vh] ${onclick ? "translate-x-0  delay-200" : "translate-x-[100%] "} transition-all duration-500 ease-in-out `}>
                        <ul className='flex justify-center items-center flex-col mt-10 gap-5'>
                            {navbar.map((nav, index) => (
                                <li key={index} onClick={() => setOnclick(false)}
                                    className={`uppercase font-semibold cursor-pointer under_line
                                    ${location.pathname == nav.link && "active border-b-2 border-pink-999"}`}>
                                    {nav.title}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header >
    )
}

export const Dekstop = () => (
    <ul className='flex items-center justify-around w-1/2'>
        {navbar.map((nav, index) => (
            <li key={index}
                className={`uppercase font-semibold cursor-pointer under_line ${location.pathname == nav.link && "active border-b-2 border-pink-999"}`}>
                <Link to={nav.link}>{nav.title}</Link>
            </li>
        ))}
    </ul>
)

export const Mobile = ({ onclick, click }) => (
    <label className="hamburger" >
        <input type="checkbox" onChange={onclick} checked={click} />
        <svg viewBox="0 0 32 32">
            <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
            <path className="line" d="M7 16 27 16"></path>
        </svg>
    </label>
)

export default Navbar