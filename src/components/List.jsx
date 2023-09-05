import { useEffect, useState } from "react"
import PropTypes from 'prop-types'
import Edit from "./Edit"

export default function List({listState, setListState}) {

  // const [listState,setListState] = useState([])

  const [ edit, setEdit] = useState(0)
  
  useEffect(() => {
    conseguirPeliculas()
  },[])

  const conseguirPeliculas = () => {
    let peliculas = JSON.parse(localStorage.getItem('pelis'))

    setListState(peliculas)
    
    return peliculas
  }

  const handleClick = (id) => {
    let pelis_almacenadas = conseguirPeliculas();
    
    let new_array_pelis = pelis_almacenadas.filter(peli => peli.id != parseInt(id))

    setListState(new_array_pelis)

    localStorage.setItem('pelis', JSON.stringify(new_array_pelis))
  }

  return (
    <>
    {listState != null && listState.map(peli => {
      return(
        <article key={peli.id} className="peli-item">
                <h3 className="title">{peli.titulo}</h3>
                <p className="description">{peli.descripcion}</p>

                <button className="edit" onClick={() => setEdit(peli.id)}>Editar</button>
                <button className="delete" onClick={() => handleClick(peli.id)}>Borrar</button>

                {edit == peli.id && (
                  <Edit peli={peli} conseguirPeliculas={conseguirPeliculas}
                        setEdit={setEdit} setListState={setListState}      
                  />
                )}
            </article>            
      )
    })}
     
    </>
  )
}

List.propTypes = {
  listState: PropTypes,
  setListState: PropTypes
}