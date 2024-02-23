import Link from 'next/link'
import React from 'react'
import { FaTwitter ,FaFacebookF,FaInstagram,FaLinkedin} from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";

export default function Contact() {
  return (
    <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.4233054892406!2d-0.1896228247841325!3d5.651740532679043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9c7df7ee1d55%3A0xab57119b8037bb51!2sBalme%20Library!5e0!3m2!1sen!2sgh!4v1708085182936!5m2!1sen!2sgh" 
       className='w-full h-[50vh]' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
       <div>
        <h2>GET IN TOUCH</h2>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nobis atque consequuntur expedita praesentium eligendi impedit autem eaque aspernatur
             maxime sequi minus illum!
        </p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse id iusto facere enim ea distinctio voluptatem error, hic numquam officia aut optio,
             iure voluptatibus autem in magni debitis, consequatur dolore.</p>
       </div>
       <div>
        <form action="" className='flex flex-col'>
            <input type="text" placeholder='contact name' required />
            <input type="email" placeholder='Email address' required />
            <input type="text" placeholder='MESSAGE' required/>
            <button>SEND MESSAGE</button>
        </form>
        <h2>SOCIAL CHANNELS</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto beatae repellat, aliquam velit minima, numquam dolor itaque voluptate mollitia illum 
            incidunt laborum alias aspernatur sint quidem cum possimus nam laboriosam!</p>
        <div className='flex'>
        <Link href='/'>
        <FaTwitter/>
        </Link>
        <Link href='/'>
            <FaFacebookF/>
        </Link>
        <Link href='/'>
            <TiSocialGooglePlus/>
        </Link>
        <Link href='/'>
            <FaInstagram/>
        </Link>
        <Link href='/'>
            <FaLinkedin/>
        </Link>
        </div>
       </div>
    </div>
  )
}
