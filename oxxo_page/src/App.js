import './App.css';
import profile from './profile-user.png'

const navigation = [
  { name: 'Inicio', href: '#', current: true },
  { name: 'Promociones', href: '#', current: false },
  { name: 'Una wea', href: '#', current: false },
  { name: 'Otra wea', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function App() {
  return (
    <div>
      {/* Parte gris-roja con el logo */}
      <header className="h-24 bg-gray-700 flex items-center justify-center">
        <div className='w-3/6 h-5/6 bg-red-600 rounded-xl ml-3' />
        <div className='h-5/6 w-40 rounded-xl mx-3'>
          <button className='w-full h-full rounded-xl'>
            <img className='h-full w-full rounded-xl' src='https://www.oxxo.com/img/logo-r.png' />
          </button>
        </div>

        <div className='w-6/12 h-5/6 bg-red-600 rounded-xl mr-3 flex items-center justify-end'>
          <button className='w-14 mr-5'>
            <img className='w-full' src={profile}></img>
          </button>
        </div>
      </header>
      {/* parte amarilla, aquí van las opciones */}
      <div className='h-10 bg-yellow-400 shadow-lg flex items-center'>
        <div className="hidden sm:ml-3 sm:block">
          <div className="flex space-x-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current ? 'bg-red-600 text-white' : 'text-white bg-yellow-600 hover:bg-gray-700 hover:text-white',
                  'rounded-md px-3 py-2 text-sm font-medium w-32 text-center'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
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