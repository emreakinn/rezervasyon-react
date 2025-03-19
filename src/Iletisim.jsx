import React from 'react'

function Iletisim() {
    return (
        <div className='w-10/12 h-[70vh] bg-[url("./assets/arkaplan.jpg")] text-amber-100 m-auto mt-1 flex flex-col justify-center bg-amber-100 rounded-bl-4xl rounded-br-4xl items-center'>
            <h1 className='text-6xl'>İletişim</h1>
            <form action="" method="post" className='flex flex-col gap-5 my-10 w-6/12'>
                <div className='flex justify-center'>
                    <input
                        type="text"
                        id="isim"
                        placeholder='Ad'
                        className='w-2/6 border-4 border-amber-100 bg-gray-900 py-5 pl-5 rounded-2xl outline-none' />

                    <input
                        type="text"
                        id="soyisim"
                        placeholder='Soyad'
                        className='w-2/6 border-4 border-amber-100 bg-gray-900 py-5 pl-5 rounded-2xl outline-none' />
                </div>
                <div className='flex justify-center'>
                    <textarea name="" id="" rows={8} cols={30} placeholder='Yazınız...' className='min-w-4/6 max-h-60 min-h-60 bg-gray-900 border-4 border-amber-100 rounded-2xl p-2'>
                    </textarea>
                </div>
                <div className='flex justify-center'>
                    <button className='w-4/12 bg-gray-900 border-4 border-amber-100 py-5 rounded-xl text-2xl cursor-pointer'>İleri</button>
                </div>
            </form>
        </div>
    )
}

export default Iletisim