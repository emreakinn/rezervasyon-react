import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Rezervasyon from './Rezervasyon.jsx'
import RezervasyonTakip from './RezervasyonTakip.jsx'
import Iletisim from './Iletisim.jsx'
import { ReservationsProvider } from './context/ReservationsContext.jsx'

createRoot(document.getElementById('root')).render(
  <ReservationsProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="Rezervasyon" element={<Rezervasyon />} />
        <Route path="RezervasyonTakip" element={<RezervasyonTakip />} />
        <Route path="Iletisim" element={<Iletisim />} />
      </Routes>
    </BrowserRouter>
  </ReservationsProvider>
)
