import React from 'react'
import { Button, Heading, Paragraf } from '@components'

const Info = () => {
    return (
        <section className='w-full'>
            <div className='max-w-[60rem] mx-auto px-[1rem] lg:px-0'>
                <div className=' flex flex-col justify-center md:grid grid-cols-3 items-center gap-5 mt-10 md:mt-0'>
                    <div className='order-1 md:order-2'>
                        <img className='rounded-md w-full' height={20} width={20} src='https://miegacoan.com/images/ABOUT/makan.jpg' alt='poster clent' />
                    </div>
                    <div className='col-span-2 order-2 md:order-1 text-center flex flex-col gap-5'>
                        <Heading title={"Deliciousness in Every Bite!"} />
                        <Paragraf value={`"Tingkatkan level kelezatanmu dengan sajian yang selalu membuatmu kembali lagi dan lagi. Temukan rahasia di balik setiap gigitan, sensasi yang membuat lidahmu bergoyang! Yuk, nikmati dan rasakan sendiri kenikmatannya."`} />
                        <div>
                            <Button title={"Yu, cobain sekarang!"} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Info