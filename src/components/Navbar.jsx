import React from 'react'
import { Link } from 'react-router-dom';
import { SiCafepress } from "react-icons/si";


function Navbar() {
    return (
        <div className='lg:w-10/12 w-full bg-gray-900 m-auto py-5 rounded-tl-4xl rounded-tr-4xl flex justify-around items-center text-amber-100'>
            <div>
                <Link to='/'><SiCafepress className='lg:text-6xl text-3xl' /></Link>
            </div>
            <div className='flex lg:gap-15 gap-3 lg:text-2xl text-xs font-bold'>
                <Link to='/'>Anasayfa</Link>
                <Link to='Rezervasyon'>Rezervasyon</Link>
                <Link to='RezervasyonTakip'>Rezervasyon Takip</Link>
                <Link to='Iletisim'>İletişim</Link>
            </div>
        </div>
    )
}

export default Navbar