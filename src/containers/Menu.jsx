import React, { useState } from 'react'
import { FaRupiahSign } from 'react-icons/fa6'

const Menu = ({ data }) => {
    console.log(data)
    return (
        <div className='w-full mt-40'>
            <div className='max-w-[60rem] mx-auto grid grid-cols-4 gap-5'>
                {data.data.map((item) => (
                    <div className='bg-white/10 w-full h-full rounded-md overflow-hidden'>
                        <div className='w-full h-[13rem] overflow-hidden' >
                            <img className='object-cover object-center w-full h-full' src={item.image} />
                        </div>
                        <div className='px-3 py-1'>
                            <p>{item.title}</p>
                            <p className='flex items-center gap-1 font-semibold' > <FaRupiahSign /> {item.price.toLocaleString('id-ID')} \-</p>
                            <p>{item.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Menu