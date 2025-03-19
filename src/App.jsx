import './App.css'
import { Link } from 'react-router-dom';


function App() {

  return (
    <div className='w-10/12 h-[70vh] bg-[url("./assets/arkaplan.jpg")] text-amber-100 m-auto mt-1 flex flex-col justify-center bg-amber-100 rounded-bl-4xl rounded-br-4xl items-center'>
      <h1 className='text-6xl'>"Lezzetli Anlar Burada!"</h1>
      <h3 className='text-3xl mt-25'>Masanız Sizi Bekliyor!</h3>
      <h3 className='text-3xl'>Kolayca Rezervasyon Yapın ve Keyfini Çıkarın.</h3>
      <Link to='Rezervasyon' className='w-3/12  bg-gray-900 border-4 border-amber-100 py-5 rounded-xl my-10 text-center text-2xl'>Rezervasyon Yap</Link>
    </div>
  )
}

export default App
