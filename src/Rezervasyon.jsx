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

    const { addReservation } = useContext(ReservationsContext);

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
        }
    }

    return (
        <div className='w-10/12 h-[70vh] bg-[url("./assets/arkaplan.jpg")] text-amber-100 m-auto mt-1 flex flex-col justify-center bg-amber-100 rounded-bl-4xl rounded-br-4xl items-center'>
            <h1 className='text-6xl'>"Lezzetli Anlar Burada!"</h1>

            <form action="" method="post" className='flex flex-col gap-5 my-10 w-4/12'>

                {step === 1 && (

                    <div className='flex flex-col items-center gap-10'>
                        <h3 className='text-3xl'>Rezervasyon Tarihi Belirle</h3>
                        <input
                            type="date"
                            id="tarih"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className='w-3/6 tarih flex justify-center border-4 border-amber-100 bg-gray-900 py-5 rounded-2xl outline-none'
                        />
                    </div>
                )}
                {step === 2 && (
                    <div className='flex flex-wrap justify-evenly gap-5'>
                        <h3 className='text-3xl'>Rezervasyon Bilgilerini Doldur</h3>
                        <input
                            type="text"
                            id="isim"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder='Adınız'
                            className='w-5/12 border-4 border-amber-100 bg-gray-900 py-5 pl-5 rounded-2xl outline-none'
                        />
                        <input
                            type="text"
                            id="soyad"
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
                            placeholder='Soy Adınız'
                            className='w-5/12 border-4 border-amber-100 bg-gray-900 py-5 pl-5 rounded-2xl outline-none'
                        />
                        <input
                            type="text"
                            id="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder='Telefon Numaranız'
                            className='w-5/12 border-4 border-amber-100 bg-gray-900 py-5 pl-5 rounded-2xl outline-none'
                        />
                        <input
                            type="text"
                            id="Masa"
                            value={table}
                            onChange={(e) => setTable(e.target.value)}
                            placeholder='Masa Numarası'
                            className='w-5/12 border-4 border-amber-100 bg-gray-900 py-5 pl-5 rounded-2xl outline-none'
                        />
                    </div>


                )}

            </form>
            {error && <p className='text-green-500'>{error}</p>}
            {step === 1 && (
                <button
                    onClick={handleİleri}
                    className='w-2/12 bg-gray-900 border-4 border-amber-100 py-5 rounded-xl text-center text-2xl cursor-pointer'
                >
                    İleri
                </button>
            )}
            {step === 2 &&
                <button
                    onClick={handleTamamla}
                    className='w-2/12 bg-gray-900 border-4 border-amber-100 py-5 rounded-xl text-center text-xl cursor-pointer'
                >
                    Rezervasyonu Tamamla
                </button>}
        </div>
    )
}

export default Rezervasyon