import React, { useState, useEffect } from 'react';
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
        if (contador < 99) {
            setContador(contador + 1);
        }
    };

    const decrementarContador = () => {
        if (contador > 0) {
            setContador(contador - 1);
        } else {
        }
    };

    const cero = () => {
        setContador(0);
    }

    return (
        <div className='relative bg-white hover:bg-yellow-400 rounded-3xl m-1 hover:text-white '>
            {contador == 0 ?
                <>
                    <button className="z-40 bg-transparent border-spacing-0 p-2 text-center inline-block mx-1 my-1 cursor-pointer rounded-3xl relative" onClick={incrementarContador} id={props.clave}>
                        <img className="rounded-3xl p-4" src={props.imagen} alt="Producto" />
                        <h2>{props.precio}</h2>
                        <h3>{props.descripcion}</h3>
                    </button>
                </>
                :
                <>
                    <button className='w-10 h-10  top-8 right-8 bg-red-600 hover:bg-slate-400 from-neutral-50 rounded-full p-2 m-0 leading-none font-extrabold text-center flex items-center justify-center cursor-pointer z-50 absolute' onClick={cero}>X</button>
                    <button className='w-10 h-10  top-8 right-20 bg-red-600 hover:bg-slate-400 from-neutral-50 rounded-full p-2 m-0 leading-none font-extrabold text-center flex items-center justify-center cursor-pointer z-50 absolute' onClick={decrementarContador}>---</button>


                    <button className="z-40 bg-transparent border-spacing-0 p-2 text-center inline-block mx-1 my-1 cursor-pointer rounded-3xl relative" onClick={incrementarContador} id={props.clave}>
                        <img className="rounded-3xl p-4" src={props.imagen} alt="Producto" />
                        <h2 className="w-10 h-10 absolute top-8 left-8 bg-slate-400 rounded-full p-2 m-0">{contador}</h2>
                        <h2>{props.precio}</h2>
                        <h3>{props.descripcion}</h3>
                    </button>
                </>
            }
        </div>
    );
};
