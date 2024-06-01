import React from 'react'
import Img_hover from '../components/Img.hover'
import Svg from "../assets/layer.main.svg"
import Button from "../components/Button"
import Heading from '../components/Heading'
import Paragraf from '../components/Paragraf'

const About = () => {
    return (
        <section className='relative w-full'>
            <div className='h-[7rem] sm:h-[8rem] md:h-[10rem] lg:h-[12rem] overflow-hidden'>
                <img src={Svg} className='object-cover w-full h-full object-top' />
            </div>
            <div className='py-10 max-w-[60rem] mx-auto flex flex-col justify-center items-center gap-10 px-[1rem] lg:px-0'>
                <Heading title={"about"} className={"md:inline hidden"} />
                <div className='md:grid grid-cols-2 gap-5'>
                    <div className='grid grid-cols-2 gap-3 pb-10 lg:pb-0'>
                        <Img_hover
                            className={"mt-10"}
                            url={"https://miegacoan.com/images/KOTA/SOLO2.jpg"}
                            title={"solo"}
                        />
                        <Img_hover
                            url={"https://miegacoan.com/images/GALERI/New3.png"}
                            title={"makasar"}
                        />
                        <Img_hover
                            url={"https://miegacoan.com/images/KOTA/SEMARANG1.jpg"}
                            title={"semarang"}
                        />
                        <Img_hover
                            className={"-mt-10"}
                            url={"https://miegacoan.com/images/KOTA/CIREBON.jpg"}
                            title={"cirebon"}
                        />
                    </div>
                    <div className='w-full flex justify-center items-center md:hidden'>
                        <Heading className={"inline"} title={"about"} />
                    </div>
                    <div className='mt-8 lg:mt-4'>
                        <Paragraf
                            value={
                                <span>"Mie Gacoan" adalah merk dagang dari jaringan restoran mie pedas terkemuka di Indonesia, anak perusahaan PT Pesta Pora Abadi. Berdiri sejak 2016, kini menjadi market leader terutama di Jawa Timur, Jawa Tengah, Jawa Barat, dan Kepulauan Bali, dengan rencana ekspansi nasional. Dengan konsep bersantap modern dan harga terjangkau, "Mie Gacoan" telah meraih apresiasi tinggi dari puluhan ribu pelanggan setiap bulannya. Rasakan sensasi berbeda dan nikmati makanan lezat kami, hanya di "Mie Gacoan"
                                    <br />
                                    <br /> - tempat makan favorit untuk mahasiswa, pelajar, dan keluarga. Ayo kunjungi dan rasakan pengalaman bersantap yang memikat!
                                </span>
                            }
                        />
                        <Button className={"mt-9"} title={"pesan sekarang"} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About