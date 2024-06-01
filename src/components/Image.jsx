import React from 'react'
import Button from './Button'

const Image = ({ title, text, img }) => (
    <div className='relative h-48 overflow-hidden rounded-md group/image '>
        <img className='w-full h-full object-cover object-center' src={img} alt={`poster ${title}`} />
        <div className='absolute top-0 p-3 w-full h-full bg-dark-999/70 translate-y-56 group-hover/image:translate-y-0 transition-transform duration-700 ease-in-out'>
            <h2 className='text-2xl font-bold text-center translate-y-56 group-hover/image:translate-y-0 transition-transform duration-500 ease-in-out delay-100'>{title}</h2>
            <p className='text-base font-thin text-center translate-y-56 group-hover/image:translate-y-0 transition-transform duration-500 ease-in-out delay-300'>{text}</p>
            <div className='w-full flex justify-center items-center mt-10 translate-y-56 group-hover/image:translate-y-0 transition-transform duration-500 ease-in-out delay-500'>
                <Button className={"inline absolute"} title={"beli sekarang"} />
            </div>
        </div>
    </div>
)

export default Image