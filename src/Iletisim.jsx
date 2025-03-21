import React from 'react'

function Iletisim() {
    return (
        <div className='lg:w-10/12 w-full h-[70vh] bg-[url("./assets/arkaplan.jpg")] text-amber-100 m-auto mt-1 flex flex-col justify-center bg-amber-100 rounded-bl-4xl rounded-br-4xl items-center'>
            <h1 className='lg:text-6xl text-4xl'>İletişim</h1>
            <form action="" method="post" className='flex flex-col gap-5 my-10 lg:w-8/12 w-10/12'>
                <div className='flex justify-center'>
                    <input
                        type="text"
                        id="isim"
                        placeholder='Ad'
                        className='lg:w-2/6 w-3/6 border-4 border-amber-100 bg-gray-900 py-5 pl-5 rounded-2xl outline-none' />

                    <input
                        type="text"
                        id="soyisim"
                        placeholder='Soyad'
                        className='lg:w-2/6 w-3/6 border-4 border-amber-100 bg-gray-900 py-5 pl-5 rounded-2xl outline-none' />
                </div>
                <div className='flex justify-center'>
                    <textarea name="" id="" rows={8} cols={30} placeholder='Yazınız...' className='lg:min-w-4/6 min-w-6/6 max-h-60 min-h-60 bg-gray-900 border-4 border-amber-100 rounded-2xl p-2'>
                    </textarea>
                </div>
                <div className='flex justify-center'>
                    <button className='lg:w-4/12 w-6/6 bg-gray-900 border-4 border-amber-100 py-5 rounded-xl text-2xl cursor-pointer'>İleri</button>
                </div>
            </form>
        </div>
    )
}

export default Iletisim