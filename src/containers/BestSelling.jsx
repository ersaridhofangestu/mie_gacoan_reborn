import React from 'react'
import Heading from '../components/Heading'
import Paragraf from '../components/Paragraf'
import Image from '../components/Image'
import { bestSelling } from '../data/bestSelling'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const BestSelling = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 30000, min: 1024 },
            items: 3,
            slidesToSlide: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 676 },
            items: 2,
            slidesToSlide: 2
        },
        mobile: {
            breakpoint: { max: 676, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };
    return (
        <section className='w-full z-10'>
            <div className='max-w-[60rem] mx-auto p-[1rem] lg:px-0'>
                <div className='flex flex-col justify-center items-center gap-5'>
                    <Heading className={"inline"} title={"Best Selling"} />
                    <Paragraf
                        value={`"Kelezatan yang tak terlupakan dalam setiap suapan. Temukan rasa yang baru dan penuh kejutan."`}
                    />
                </div>
                <Carousel responsive={responsive} className='mt-8 gap-5' itemClass={"px-3"} >
                    {bestSelling.map((best, index) => (
                        <Image img={best.img} text={best.text} title={best.title} key={index} />
                    ))}
                </Carousel >
            </div>
        </section>
    )
}

export default BestSelling