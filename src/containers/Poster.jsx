import React from 'react'
import { Heading } from "@components"

const Poster = () => {
    return (
        <section className='w-full' >
            <div className='bg-blue-500 relative '>
                <div className='w-full h-[60vh] overflow-hidden absolute'>
                    <img src='https://miegacoan.com/images/DIVIDER/div2.jpg' className='object-cover w-full h-full' width={20} height={20} alt='poster mie gacoan' />
                    <div className='bg-dark-999/70 mix-blend-multiply left-0 right-0 top-0 bottom-0 absolute z-10' />
                </div>
                <div className='max-w-[60rem] mx-auto w-full relative h-[60vh] z-40' >
                    <div className='flex flex-col justify-center items-center w-full h-full' >
                        <small className='capitalize ml-16 -mt-10 absolute font-bold text-white/70'>ada yang baru nih!</small>
                        <Heading title={"menu"} className={"border-none text-7xl"} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Poster