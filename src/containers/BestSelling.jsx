import React from 'react'
import { Heading, Image, Paragraf } from '@components'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsiveCarousel, bestSelling } from "@helpers"

const BestSelling = () => {

    return (
        <section className='w-full z-10'>
            <div className='max-w-[60rem] mx-auto p-[1rem] lg:px-0'>
                <div className='flex flex-col justify-center items-center gap-5'>
                    <Heading className={"inline"} title={"Best Selling"} />
                    <Paragraf
                        value={`"Kelezatan yang tak terlupakan dalam setiap suapan. Temukan rasa yang baru dan penuh kejutan."`}
                    />
                </div>
                <Carousel responsive={responsiveCarousel} className='mt-8 gap-5' itemClass={"px-3"} >
                    {bestSelling.map((best, index) => (
                        <Image img={best.img} text={best.text} title={best.title} key={index} />
                    ))}
                </Carousel >
            </div>
        </section>
    )
}

export default BestSelling