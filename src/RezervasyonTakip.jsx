import React, { useContext } from 'react'
import { ReservationsContext } from './context/ReservationsContext';

function RezervasyonTakip() {

    const { reservations } = useContext(ReservationsContext);

    return (
        <div className="w-10/12 m-auto text-amber-100 mt-10">
            <h1 className="text-4xl mb-5">Rezervasyon Takip</h1>
            {reservations.length === 0 ? (
                <p>Henüz rezervasyon yok.</p>
            ) : (
                <ul>
                    {reservations.map((rez) => (
                        <li key={rez.id} className="border p-3 mb-2 bg-gray-800 rounded-lg">
                            <p><strong>Tarih:</strong> {rez.date}</p>
                            <p><strong>İsim:</strong> {rez.name} {rez.surname}</p>
                            <p><strong>Telefon:</strong> {rez.phone}</p>
                            <p><strong>Masa:</strong> {rez.table}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default RezervasyonTakip