import { useState } from "react";
import { saveStorage } from "../helpers/SaveStorage";
import PropTypes from 'prop-types'

export default function Add({setListState}) {

    const titulo = 'Añadir titulo'
    const [ peliState, setPeliState] = useState({
        titulo:'',
        descripcion:''
    })

    const handleClick = e => {
        e.preventDefault()
        
        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value        

        let peli = {
            id: new Date().getTime(),
            titulo,
            descripcion
        }
        setPeliState(peli)
        setListState(items => {
            return [...items, peli]
        })
        
        saveStorage('pelis', peli)
    }

    return (
        <div className="add">
            <h3 className="title">{titulo}</h3>

            {peliState && peliState.titulo}

            <form onSubmit={handleClick}>
                <input type="text" id="titulo" name="titulo" placeholder="Titulo" />
                <textarea id="descripcion" name="descripcion" placeholder="Descripcion"></textarea>
                <input id='save' type="submit" value="Guardar" />
            </form>
        </div>
    )
}

Add.propTypes = {
    setListState: PropTypes
}