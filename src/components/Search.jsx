import { useState } from "react"
import PropTypes from 'prop-types'

export default function Search({ listState, setListState }) {
    const [busqueda, setBusqueda] = useState('')
    const [noEncontrado, setNoEncontrado] = useState(false)

    const buscarPeli = (e) => {
        setBusqueda(e.target.value)

        let pelis_encontradas = listState.filter(peli => {
            return peli.titulo.toLowerCase().includes(busqueda.toLocaleLowerCase())
        })

        if (busqueda.length <= 1 || pelis_encontradas <= 0) {
            pelis_encontradas = JSON.parse(localStorage.getItem('pelis'))
            setNoEncontrado(true)
        } else {
            setNoEncontrado(false)
        }
        setListState(pelis_encontradas)
    }

    return (
        <>
            <div className="search">
                <h3 className="title">Buscador: {busqueda} </h3>
                {(noEncontrado == true && busqueda.length > 2) && <span className="no-encontrado">No se ha encontrado ninguna pelicula</span>}
                <form >
                    <input type="text" id="search_field" name="busqueda"
                        autoComplete="off" onChange={buscarPeli}
                    />
                    <button>Buscar</button>
                </form>
            </div>
        </>
    )
}

Search.propTypes = {
    listState: PropTypes,
    setListState: PropTypes
}