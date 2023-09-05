import PropTypes from'prop-types'
import './edit.css'

export default function Edit({peli, conseguirPeliculas, setEdit, setListState}) {
  
    const titleComponent = 'Editar Pelicula'    

    const saveEdit = (e, id) =>{
        e.preventDefault()

        let target = e.target

        const peliAlmacenadas = conseguirPeliculas();
        const index = peliAlmacenadas.findIndex(peli => peli.id === id)

        let peliUpdate = {
            id,
            titulo: target.titulo.value,
            descripcion: target.descripcion.value
        }

        peliAlmacenadas[index] = peliUpdate

        localStorage.setItem('pelis', JSON.stringify(peliAlmacenadas))

        setListState(peliAlmacenadas)
        setEdit(0)    
    }
  
    return (
    <div className="edit_form">
    <h3 className="title">{titleComponent}</h3>
    <form className='edit-container' onSubmit={e => saveEdit(e, peli.id)} >
        <input type="text"
               name="titulo"
               className="titulo_editado"
               defaultValue={peli.titulo} />
        <textarea name="descripcion"
                  defaultValue={peli.descripcion} 
                  className="descripcion_editada"></textarea> 

        <input type="submit" className="editar" value='Actualizar' />                
    </form>
    </div>
  )
}

Edit.propTypes = {
    peli:PropTypes,
    conseguirPeliculas: PropTypes,
    setEdit: PropTypes,
    setListState: PropTypes
}