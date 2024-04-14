import './App.css';
import profile from './profile-user.png';
import cart from './shopping-cart.png';
import search from "./search.png";
import { ProductoOxxo } from './product';
import datos from './datos';

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
    <div className="relative">
      <header className="fixed w-full z-50">

        {/* Parte gris-roja con el logo */}
        <div className="h-24 bg-gray-700 flex items-center justify-center">
          <div className='w-3/6 h-5/6 bg-red-600 rounded-xl ml-3' />
          <div className='h-5/6 w-40 rounded-xl mx-3'>
            <button className='w-full h-full rounded-xl'>
              <img className='h-full w-full rounded-xl' src='https://www.oxxo.com/img/logo-r.png' />
            </button>
          </div>
          <div className='w-6/12 h-5/6 bg-red-600 rounded-xl mr-3 flex items-center justify-end'>
            <button className="w-14 mr-5">
              <img className="w-full" src={cart}></img>
            </button>
            {/*<button className='w-14 mr-5'>
              <img className='w-full' src={profile} />
            </button>*/}
          </div>
        </div>

        {/* parte amarilla, aquí van las opciones */}
        <div className='h-10 bg-yellow-400 shadow-lg flex items-center'>
          <div className="hidden sm:ml-3 sm:block">
            <div className="flex space-x-1 items-center">
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

      </header>

      {/* Aquí va toda la parte de las cards y demas cosas */}
      <body className="relative z-40 pt-32">
        <div className="w-full h-96 flex justify-center items-center fixed z-30 bg-transparent">
          <input className="w-6/12 py-4 px-10 text-xl font-medium rounded-s-lg shadow-lg drop-shadow-lg border-red-600 border-2" placeholder="Busca tu producto aquí" />
          <button className="w-32 h-16 rounded-e-lg bg-black flex items-center justify-center shadow-lg drop-shadow-lg">
            <img className="h-full p-3" src={search} />
          </button>
        </div>
        <div className="w-full h-96 flex justify-center items-center relative z-20 bg-transparent" />
        {/* Aca van las cards, quita el h-lvh porque ese tamaño de height es solo de ejemplo, el chiste es que se ajusta a la cantidad de cards en la pagina */}
        <div className="h-auto w-full py-4 bg-gray-700 relative z-40 flex flex-wrap justify-evenly ">
          {datos.map((item) => (
            <ProductoOxxo clave={item.clave} precio={item.precio} imagen={item.imagen} descripcion={item.descripcion}></ProductoOxxo>
          ))}
        </div>
      </body>

      {/* Pie de pagina, una parte de información al final */}
      <footer className='bg-black h-auto w-full text-white text-center p-7'>
          <img className='h-10 rounded-lg mx-auto block' src='https://www.oxxo.com/img/logo-r.png' />
          <h2>Alejandro Jimenez Ramirez</h2>
          <h2>Rafael Carrillo Alcantar</h2>
      </footer>
    </div>
  )
}