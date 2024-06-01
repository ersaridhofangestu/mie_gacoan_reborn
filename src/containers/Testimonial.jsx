import React, { useState } from 'react'
import { FaBackspace, FaRegSadCry, FaRegSmile, FaStar, FaUserAstronaut } from "react-icons/fa";
import { IoTriangle } from 'react-icons/io5';
import { MdCreate } from 'react-icons/md';
import Button from "../components/Button"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { FaUser } from 'react-icons/fa6';

const Testimonial = () => {
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")
    const [create, setCreate] = useState(false)
    const [icon, setIcon] = useState(null)
    const items = [1, 2, 3, 4, 5]
    const [notive, setNotive] = useState("")

    const depeloper = {
        yourName: "ersa ridho fangestu",
        yourMessage: "testing doang !!",
        yourTime: "2024-06-01",
        yourType: "depeloper",
        yourIcon: < FaUserAstronaut className='scale-125' />
    }

    const [testimonial, setTestimonial] = useState([depeloper])

    const handleClick = (e) => {
        e.preventDefault()
        if (name != "") {
            if (message != "") {
                inputValue()
                setNotive("testimonial selesai")
                setIcon(<FaRegSmile fill='green' size={30} />)
                setTimeout(() => {
                    inputReset()
                    setNotive("")
                    setIcon(null)
                    setCreate(false)
                }, 3000);
            } else {
                setNotive("silakan tulisak pesan nya")
                setIcon(<FaRegSadCry fill='red' size={30} />)
                setTimeout(() => {
                    setNotive("")
                    setIcon(null)
                }, 3000);


            }
        } else {
            setNotive("silakan masukan nama anda")
            setIcon(<FaRegSadCry fill='red' size={30} />)
            setTimeout(() => {
                setNotive("")
                setIcon(null)
            }, 3000);
        }

    }


    const inputValue = () => {
        let users = {
            yourName: name,
            yourMessage: message,
            yourTime: new Date().toISOString().substring(0, 10),
            yourType: "customer",
            yourIcon: <FaUser />
        }
        return setTestimonial([...testimonial, users])
    }

    const inputReset = () => {
        setMessage("")
        setName("")

    }

    console.log(create)

    return (
        <section className='w-full relative overflow-hidden' style={{
            backgroundImage: `url(https://miegacoan.com/images/DIVIDER/div2.jpg)`, backgroundSize: "cover", backgroundPosition: "center"
        }}>
            <div className={`absolute ${notive != "" && "translate-y-0"} -translate-y-32 transition-transform duration-300 ease-in-out text-white z-40 w-full flex justify-center `} >
                <div className='bg-dark-999 w-72 p-3 my-4 flex items-center gap-5 capitalize opacity-85 rounded-md'>
                    {icon}
                    <p>{notive}</p>
                </div>
            </div>
            <div className='absolute top-0  w-full h-full bg-dark-999/70 mix-blend-multiply z-10' />
            <div className='relative max-w-[60rem] mx-auto z-20'>
                <div className='float-end mt-10 bg-dark-999 w-10 h-10 rounded-full flex justify-center items-center scale-110 absolute right-0 top-10 group/create z-40 mx-5 lg:mx-none '>
                    <button onClick={() => setCreate(!create)} >
                        {!create ?
                            <MdCreate size={20} fill='orange' />
                            :
                            <FaBackspace size={20} fill='red' />}
                    </button>
                    <div className='absolute bg-dark-999 mt-28 px-3 py-1 capitalize rounded-full justify-center items-center group-hover/create:flex hidden'>
                        <IoTriangle className='fill-dark-999 absolute -mt-10 ' size={20} />
                        {!create ?
                            "create"
                            :
                            "cancle"
                        }
                    </div>
                </div>
                {!create ? (
                    <div className='max-w-[40rem] mx-auto h-full relative py-32'>
                        <div className=' flex justify-center items-center w-full h-full'>
                            <Carousel className="w-full" showArrows={true} autoPlay={true} infiniteLoop={true} showThumbs={false} showStatus={false} showIndicators={true} >
                                {testimonial?.map((test, index) => (
                                    <div key={index} className='mb-20 flex flex-col justify-start'  >
                                        <div className='flex justify-center items-center bg-dark-999 p-3 rounded-full w-14 h-14 mx-auto '>
                                            {test.yourIcon}
                                        </div>
                                        <p className='font-bold capitalize'>{test.yourName}</p>
                                        <div className='flex items-center justify-center gap-3'>
                                            <div className='flex items-center gap-1 text-orange-500'>
                                                {items.map((item) => (
                                                    <FaStar key={item} />
                                                ))}
                                            </div>
                                            <p>{test.yourTime}</p>
                                        </div>
                                        <p className='font-semibold flex justify-center gap-1 capitalize'>positive:
                                            <span className='font-thin'>{test.yourType}</span>
                                        </p>
                                        <p>
                                            {test.yourMessage}
                                        </p>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </div>
                ) : (
                    <div className='py-32 max-w-[40rem] mx-auto h-full relative'>
                        <form onSubmit={(e) => handleClick(e)} className='grid grid-col-2 gap-5' >
                            <p className='text-2xl capitalize font-semibold text-center opacity-85'>create testimonial</p>
                            <input checked={name} value={name} type='text' placeholder='enter your name' className='bg-dark-999/80 py-3 rounded-xl px-6 focus:outline-blue-999 focus:outline-double outline-dashed outline-none '
                                onChange={(e) => setName(e.target.value)}
                            />
                            <textarea placeholder='message' value={message} checked={message} className='bg-dark-999/80 py-3 rounded-xl px-6 focus:outline-blue-999 focus:outline-double outline-dashed outline-none' rows={5}
                                onChange={(e) => setMessage(e.target.value)} />
                            <div className='flex w-full justify-center items-center'>
                                <Button title={"create"} />
                            </div>
                        </form>
                    </div>
                )}



            </div>
        </section >
    )
}

export default Testimonial