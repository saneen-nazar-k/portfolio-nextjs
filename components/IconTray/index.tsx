import Link from 'next/link';
import React from 'react';
import { FaFacebookSquare, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa'


function IconTray() {
    return (
        <div className='flex text-center'>
            {/* <span className='p-3 text-4xl hover:text-red-600'><FaFacebookSquare /></span> */}
            {/* <span className='p-3 text-4xl hover:text-red-600'><FaTwitter /></span> */}
            <Link className='p-3 text-white' target='_blank' href="https://www.linkedin.com/in/saneennazar"><span className='text-4xl hover:text-red-600'><FaLinkedinIn /></span></Link>
            <Link className='p-3 text-white' target='_blank' href="https://www.github.com/saneen-nazar-k"><span className='text-4xl hover:text-red-600'><FaGithub /></span></Link>
            <Link className='p-3 text-white' target='_blank' href="https://www.instagram.com/saneennazar"><span className='text-4xl hover:text-red-600'><FaInstagram /></span></Link>
        </div>
    );
}

export default IconTray;