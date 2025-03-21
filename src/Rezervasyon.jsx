import { useContext, useState } from 'react'
import './App.css'
import { ReservationsContext } from './context/ReservationsContext'


function Rezervasyon() {

    const [date, setDate] = useState('')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [phone, setPhone] = useState('')
    const [table, setTable] = useState('')
    const [step, setStep] = useState(1)
    const [error, setError] = useState('')

    const { reservations, addReservation } = useContext(ReservationsContext);

    const handleİleri = () => {
        if (step === 1 && date === '') {
            setError('Tarih Giriniz')
        } else if (step === 2 && name === '' && surname === '' & phone === '' && table === '') {
            setError('Tüm Bilgileri Doldurunuz ')
        } else {
            setError('')
            setStep(step + 1)
        }
    }

    const handleTamamla = () => {
        if (name && surname && phone && table) {
            if (!isNaN(phone) && phone.length == 10 && !isNaN(table) && Number(table) <= 10) {

                const reserveEdildi = reservations.some((reservation) => reservation.date === date && reservation.table === table)

                if (reserveEdildi) {
                    setError('Daha önce bu tarihte bu masa rezerve edildi')
                    return
                }

                addReservation({
                    id: Date.now(),
                    date: date,
                    name: name,
                    surname: surname,
                    phone: phone,
                    table: table
                })
                setName('')
                setSurname('')
                setPhone('')
                setTable('')
                setError('Rezervasyonunuz Oluşturuldu!')
            } else {
                setError('Telefon numarası yanlış girildi. Masa numarası 10 dan düşük olmalı')
            }
        } else {
            setError('Bütün bilgileri eksiksiz doldurun')
        }
    }

    return (
        <div className='lg:w-10/12 w-full h-[70vh] bg-[url("./assets/arkaplan.jpg")] text-amber-100 m-auto mt-1 flex flex-col justify-center bg-amber-100 rounded-bl-4xl rounded-br-4xl items-center'>
            <h1 className='lg:text-6xl text-3xl'>"Lezzetli Anlar Burada!"</h1>

            <form action="" method="post" className='flex flex-col gap-5 my-10 lg:w-8/12 xl:w-6/12 w-10/12'>

                {step === 1 && (

                    <div className='flex flex-col items-center gap-10'>
                        <h3 className='lg:text-3xl text-lg'>Rezervasyon Tarihi Belirle</h3>
                        <input
                            type="date"
                            id="tarih"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className='lg:w-3/6 w-3/6 flex justify-center border-4 border-amber-100 bg-gray-900 py-5 rounded-2xl outline-none'
                        />
                    </div>
                )}
                {step === 2 && (
                    <div className='flex flex-wrap justify-evenly gap-5'>
                        <h3 className='md:text-3xl lg:text-2xl xl:text-4xl text-2xl'>Rezervasyon Bilgilerini Doldur</h3>
                        <input
                            type="text"
                            id="isim"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder='Adınız'
                            className='w-5/12 border-4 border-amber-100 bg-gray-900 py-5 lg:pl-5 pl-2 rounded-2xl outline-none lg:placeholder:text-md placeholder:text-sm'
                        />
                        <input
                            type="text"
                            id="soyad"
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
                            placeholder='Soy Adınız'
                            className='w-5/12 border-4 border-amber-100 bg-gray-900 py-5 lg:pl-5 pl-2 rounded-2xl outline-none lg:placeholder:text-md placeholder:text-sm'
                        />
                        <input
                            type="text"
                            id="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder='Telefon Numaranız'
                            className='w-5/12 border-4 border-amber-100 bg-gray-900 py-5 lg:pl-5 pl-2 rounded-2xl outline-none lg:placeholder:text-md placeholder:text-sm'
                        />
                        <input
                            type="text"
                            id="Masa"
                            value={table}
                            onChange={(e) => setTable(e.target.value)}
                            placeholder='Masa Numarası'
                            className='w-5/12 border-4 border-amber-100 bg-gray-900 py-5 lg:pl-5 pl-2 rounded-2xl outline-none lg:placeholder:text-md placeholder:text-sm'
                        />
                    </div>


                )}

            </form>
            {error && <p className='text-green-500'>{error}</p>}
            {step === 1 && (
                <button
                    onClick={handleİleri}
                    className='lg:w-3/12 w-4/12 bg-gray-900 border-4 border-amber-100 py-5 rounded-xl text-center lg:text-2xl text-lg cursor-pointer'
                >
                    İleri
                </button>
            )}
            {step === 2 &&
                <button
                    onClick={handleTamamla}
                    className='lg:w-4/12 w-6/12 bg-gray-900 border-4 border-amber-100 py-5 rounded-xl text-center lg:text-xl text-md cursor-pointer'
                >
                    Rezervasyonu Tamamla
                </button>}
        </div>
    )
}

export default Rezervasyon