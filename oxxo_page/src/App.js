import './App.css';
import profile from './profile-user.png'

export default function App() {
  return (
    <div>
      {/* Parte gris-roja con el logo */}
      <header className="h-24 bg-gray-700 flex items-center justify-center">
        <div className='w-3/6 h-5/6 bg-red-600 rounded-xl ml-3' />
        <img className='h-5/6 w-36 rounded-xl mx-10' src='https://www.oxxo.com/img/logo-r.png' />
        <div className='w-6/12 h-5/6 bg-red-600 rounded-xl mr-3 flex items-center justify-end'>
          <button className='w-14 mr-5'>
            <img className='w-full' src={profile}></img>
          </button>
        </div>
      </header>
      {/* parte amarilla, aquí van las opciones */}
      <div className='h-10 bg-yellow-400 shadow-lg'>

      </div>
      {/* Aquí va toda la parte de las cards y demas cosas */}
      <body>

      </body>
      {/* Pie de pagina, una parte de información al final */}
      <footer className='bg-black'>

      </footer>
    </div>
  )
}