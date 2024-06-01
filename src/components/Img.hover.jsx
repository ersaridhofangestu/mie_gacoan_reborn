import React from 'react'
import Svg from "../assets/layer.svg"

const Img_hover = ({ title, className, url }) => {
    return (
        <div className={`relative w-full h-60 rounded-md  overflow-hidden mix-blend-exclusion group/img ${className}`}>
            <img className='object-cover w-full h-full' src={url} alt={`image  ${title}`} />
            <div className='absolute bottom-0 rounded-tl-3xl w-full overflow-hidden pt-5 opacity-85 translate-y-28 group-hover/img:translate-y-0 transition-transform duration-500 ease-in-out'>
                <img src={Svg} alt='' />
                <div className='bg-blue-999 px-4 pb-3'>
                    <p className='capitalize text-center font-bold text-dark-999'>{title}</p>
                </div>
            </div>
        </div>
    )
}

export default Img_hover