import { createContext, useState } from "react";

export const ReservationsContext = createContext();

export const ReservationsProvider = ({ children }) => {
    const [reservations, setReservations] = useState([]);

    const addReservation = (reservation) => {
        setReservations([...reservations, reservation]);
    };

    return (
        <ReservationsContext.Provider value={{ reservations, addReservation }}>
            {children}
        </ReservationsContext.Provider>
    );
};
