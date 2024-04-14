import React, { useState , useEffect} from 'react';
import './App.css';

export const ProductoOxxo = (props) => {
    
    const [contador, setContador] = useState(() => {
        const productoGuardado = localStorage.getItem(props.clave);
        return productoGuardado ? parseInt(productoGuardado) : 0;
    });

    useEffect(() => {
        localStorage.setItem(props.clave, contador.toString());
    }, [contador]);

    const incrementarContador = () => {
        if (contador < 100) {
            setContador(contador + 1);
        }

    };

    const decrementarContador = () => {
        if (contador > 0) {
            setContador(contador - 1);
        }
    };

    return (
        <div>
            <button className="bg-white border-spacing-0 text-black p-2 text-center inline-block mx-1 my-1 shadow cursor-pointer rounded-3xl relative" onClick={incrementarContador} id={props.clave}>
                <img className="rounded-3xl p-4" src={props.imagen} alt="Producto" />
                <h2 className="w-10 h-10 absolute top-8 left-8 bg-slate-400 rounded-full p-2 m-0">{contador}</h2>
                <h2 className="w-10 h-10 absolute top-8 right-8 bg-red-600 rounded-full p-2 m-0 leading-none font-extrabold text-center tracking-tight" onClick={decrementarContador}>---</h2>
                <h2>{props.precio}</h2>
                <h3>{props.descripcion}</h3>
            </button>
            
        </div>
    );
};
