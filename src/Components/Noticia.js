import React from 'react';
import '../index.css';
import PropTypes from 'prop-types';



const Noticia = ({noticia}) => {
    
    //Extrar los datos del objeto noticia

    const {urlToImage, url, title, description, source} = noticia;

    return(

        //Otro tipo de card

        /* <div className="">
            <div className="col s12 m6 l4">
                <div className="card large">
                    <div className="card-image">
                        <img src={urlToImage} alt={title}/>
                        <span className="card-title">{source.name}</span>
                    </div>

                    <div className="card-content">
                        <TituloH3>{title}</TituloH3>
                        <p>{description}</p>
                    </div>

                    <div className="card-action">
                        <a 
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="waves-effect waves-light btn"
                        >Ver Noticia Completa</a>
                    </div>
                </div>
            </div>
        </div> */
        <div className=""> 
            <div className="col s12 m6">
                <div className="card medium">
                    <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" src={urlToImage} alt="Noticia sin imagen"/>
                    </div>
                    <div className="card-content">
                        <span className="card-title activator black-text">{title.substring(0,75)}</span>
                        <p><a 
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            >{`Ir a ${source.name}`}
                            </a>
                            <i className="material-icons activator right">more_vert</i>
                        </p>
                        

                    </div>
                    <div className="card-reveal activator">
                        <span className="card-title grey-text text-darken-4">{title}<i className="material-icons right">close</i></span>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

Noticia.propTypes = {
    noticia: PropTypes.object.isRequired
}

export default Noticia;