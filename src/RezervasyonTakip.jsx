import React, { useContext } from 'react'
import { ReservationsContext } from './context/ReservationsContext';

function RezervasyonTakip() {

    const { reservations } = useContext(ReservationsContext);

    return (
        <div className='lg:w-10/12 w-full h-[70vh] bg-[url("./assets/arkaplan.jpg")] text-amber-100 m-auto mt-1 flex flex-col justify-center bg-amber-100 rounded-bl-4xl rounded-br-4xl items-center'>
            <h1 className="text-4xl mb-5">Rezervasyon Takip</h1>
            {reservations.length === 0 ? (
                <p>Henüz rezervasyon yok.</p>
            ) : (

                <div className="max-h-[450px] overflow-y-auto lg:w-8/12 w-full border-2 bg-gray-900 border-amber-100 text-center">
                    <table className='w-full'>
                        <thead className='border-b-2 border-amber-100'>
                            <tr>
                                <th className='py-2'>Tarih</th>
                                <th className='py-2'>İsim Soyisim</th>
                                <th className='py-2'>Telofon</th>
                                <th className='py-2'>Masa</th>
                            </tr>
                        </thead>
                        {reservations.map((reserve, index) => (
                            <tbody key={index}>
                                <tr>
                                    <td className='py-2'>{reserve.date}</td>
                                    <td className='py-2'>{reserve.name} {reserve.surname}</td>
                                    <td className='py-2'>{reserve.phone}</td>
                                    <td className='py-2'>{reserve.table}</td>
                                </tr>
                            </tbody>
                        ))}
                    </table>
                </div>
            )}
        </div>
    )
}

export default RezervasyonTakip

