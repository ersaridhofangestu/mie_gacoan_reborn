import React from 'react'
import { FaFacebookF, FaInstagram, FaPhone, FaTiktok, FaTwitter } from 'react-icons/fa';
import { FaMapLocationDot } from 'react-icons/fa6';
import { MdOutlineEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Footer = () => {

  return (
    <footer className=' w-full py-10 opacity-85'>
      <div className='max-w-[60rem] mx-auto px-[1rem] lg:px-0'>
        <div className='flex items-center justify-between border-b-2 border-white/50 capitalize'>
          Hubungi kami untuk informasi lebih lanjut!
          <div className='flex items-center gap-3 sosmed'>
            <div class="card">
              <Link to={"/"} aria-disabled={true} class="socialContainer containerOne" href="#">
                <FaInstagram className="socialSvg instagramSvg" size={30} />
              </Link>

              <Link to={"/"} className="socialContainer containerTwo" href="#" aria-disabled={true}>
                <FaTwitter className='socialSvg twitterSvg' />
              </Link>

              <Link to={"/"} className="socialContainer containerThree" href="#" aria-disabled={true}>
                <FaFacebookF size={30} className="socialSvg linkdinSvg" />
              </Link>

              <a class="socialContainer containerFour group/icon" href="#" aria-disabled={true}>
                <FaTiktok className='socialSvg whatsappSvg group-hover/icon:text-black' />
              </a>
            </div>
          </div>
        </div>
        <div className='flex flex-col sm:grid grid-cols-3 mt-5 gap-10'>
          <div className='flex flex-col gap-3'>
            <img width={60} src='https://miegacoan.com/images/logo-full.png' alt='logo mie gacoan' />
            <p>Kami selalu siap mendengar dari Anda! Jangan ragu untuk menghubungi kami dengan pertanyaan, saran, atau pesanan khusus. Kami menantikan kehadiran Anda!</p>
          </div>
          <div className='flex flex-col gap-3'>
            <p className='font-bold uppercase text-2xl'>products</p>
            <div className='flex items-center gap-3'>
              <img width={35} src='https://miegacoan.vercel.app/static/media/ramenColor.38bc9dbf9ad9fd47976b.png' alt='mie' />
              <p className='capitalize font-semibold'>mie</p>
            </div>
            <div className='flex items-center gap-3'>
              <img width={35} src='https://miegacoan.vercel.app/static/media/dimsumColor.a5f735c7d492c808eece.png' alt='dimsum' />
              <p className='capitalize font-semibold'>dimsum</p>
            </div>
            <div className='flex items-center gap-3'>
              <img width={35} src='https://miegacoan.vercel.app/static/media/poinsettiaColor.cfe7ac06a5db5c9f68f8.png' alt='minuman' />
              <p className='capitalize font-semibold'>minuman</p>
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <p className='font-bold uppercase text-2xl'>contact</p>
            <div className='flex items-center gap-3'>
              <FaMapLocationDot size={20} />
              <p>locasi</p>
            </div>
            <div className='flex items-center gap-3'>
              <MdOutlineEmail size={20} />
              <p>exsample@gmail.com</p>
            </div>
            <div className='flex items-center gap-3'>
              <FaPhone size={20} />
              <p>+62 896 **** ****</p>
            </div>
          </div>
        </div>
        <p className='border-t-2 text-center mt-7 py-2'>&copy; 2022 <Link to={"/"} className='font-semibold hover:text-blue-999 transition-all duration-500 ease-in-out' >Ersa Ridho Fangestu</Link>. All Rights Reserved.</p>
      </div>
    </footer >
  )
}

export default Footer