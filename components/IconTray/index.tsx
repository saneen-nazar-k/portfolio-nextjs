import React from 'react';
import { FaFacebookSquare, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa'


function IconTray() {
    return (
        <div className='flex text-center'>
            {/* <span className='p-3 text-4xl hover:text-red-600'><FaFacebookSquare /></span> */}
            {/* <span className='p-3 text-4xl hover:text-red-600'><FaTwitter /></span> */}
            <span className='p-3 text-4xl hover:text-red-600'><FaLinkedinIn /></span>
            <span className='p-3 text-4xl hover:text-red-600'><FaGithub /></span>
            <span className='p-3 text-4xl hover:text-red-600'><FaInstagram /></span>
        </div>
    );
}

export default IconTray;