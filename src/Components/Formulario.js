import React from 'react';
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';
import PropTypes from 'prop-types';

const Formulario = ({setCategoria}) => {

    //opciones para el select de la categoría de noticia
    //value para la API y label para el usuario

    const OPCIONES = [
        {value: 'general', label: 'General'},
        {value: 'business', label: 'Economía'},
        {value: 'entertainment', label: 'Entretenimiento'},
        {value: 'health', label: 'Salud'},
        {value: 'science', label: 'Ciencia'},
        {value: 'sports', label: 'Deportes'},
        {value: 'technology', label: 'Tecnología'},
    ]

    //Utilizar Custom Hook

    const [categoria, SelectNoticias] = useSelect('general', OPCIONES);

    //Cuando hacen submit al form, pasar categoría a app.js con setCategoria
    const buscarNoticias = e => {
        e.preventDefault();

        setCategoria(categoria);
    }

    return(
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={buscarNoticias}
                >
                    <h2 className={styles.heading}>Encuentra Noticias por Categoría</h2>

                    <SelectNoticias/>

                    <div className="input-field col s12">
                        <input
                            type="submit"
                            className={`${styles.btn_block} btn-large amber darken-2`}
                            value="Buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

Formulario.propTypes = {
    setCategoria: PropTypes.func.isRequired
}

export default Formulario;