import React from 'react'
import { Link, Links } from 'react-router-dom';
import { SiCafepress } from "react-icons/si";


function Navbar() {
    return (
        <div className='w-10/12 bg-gray-900 m-auto py-5 rounded-tl-4xl rounded-tr-4xl flex justify-around items-center text-amber-100'>
            <div>
                <Link to='/'><SiCafepress size={75} /></Link>
            </div>
            <div className='flex gap-15 text-2xl font-bold'>
                <Link to='/'>Anasayfa</Link>
                <Link to='Rezervasyon'>Rezervasyon</Link>
                <Link to='RezervasyonTakip'>Rezervasyon Takip</Link>
                <Link to='Iletisim'>İletişim</Link>
            </div>
        </div>
    )
}

export default Navbar