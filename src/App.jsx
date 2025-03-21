import './App.css'
import { Link } from 'react-router-dom';


function App() {

  return (
    <div className='lg:w-10/12 w-full h-[70vh] bg-[url("./assets/arkaplan.jpg")] text-amber-100 mx-auto mt-1 flex flex-col justify-center bg-amber-100 rounded-bl-4xl rounded-br-4xl items-center'>
      <h1 className='lg:text-6xl text-3xl'>"Lezzetli Anlar Burada!"</h1>
      <h3 className='lg:text-3xl text-lg mt-25'>Masanız Sizi Bekliyor!</h3>
      <h3 className='lg:text-3xl text-lg'>Kolayca Rezervasyon Yapın ve Keyfini Çıkarın.</h3>
      <Link to='Rezervasyon' className='lg:w-3/12 w-6/12 bg-gray-900 border-4 border-amber-100 py-5 rounded-xl my-10 text-center lg:text-2xl'>Rezervasyon Yap</Link>
    </div>
  )
}

export default App
