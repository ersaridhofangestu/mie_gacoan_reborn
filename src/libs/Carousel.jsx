import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { carousel } from "@helpers"
import { Button } from '@components';

const Carousel_ = () => {
    return (
        <section className='relative  h-screen flex justify-center items-center '>
            <img className='absolute h-full w-full object-cover' width={20} height={20} src="https://miegacoan.com/images/HEADER/HEADER.jpg" alt="poster mie gacoan " />
            <div className=' absolute w-full h-full bg-dark-999/70 mix-blend-multiply' />
            <Carousel className='w-[20rem] md:w-[27rem] mx-auto' showArrows={false} autoPlay={true} infiniteLoop={true} showThumbs={false} showStatus={false} showIndicators={false} >
                {carousel.map((lineText, index) => (
                    <div key={index}>
                        <img src='https://miegacoan.com/images/logo-full.png' className="scale-[.6]" alt='logo mie gacoan ' height={20} width={20} />
                        <img src={lineText.src} height={20} width={20} alt={lineText.alt} className='-mt-5 lg:-mt-10' />
                        <Button className="mt-5 lg:-mt-5" title={"pesan sekarang"} />
                    </div>
                ))}
            </Carousel>
        </section>
    )
}

export default Carousel_