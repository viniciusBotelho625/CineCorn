import React, { useEffect, useState } from 'react'
import './style.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify'

export default function Favorite() {

    const [films, setFilms] = useState([]) 
    const baseImg = 'https://image.tmdb.org/t/p/original'

    


    useEffect(() =>{
        const myListFavorite = localStorage.getItem("@cinecorn")

        setFilms(JSON.parse(myListFavorite) || [])
 
    }, []);

    function deleteFilm(id) {
        let filterFilms = films.filter((film) => {
            return (film.id !== id)
        })

        try {
            setFilms(filterFilms)
            localStorage.setItem("@cinecorn", JSON.stringify(filterFilms))
            toast.success("Filme removido com sucesso")
        } catch (error) {
            toast.error("Falha ao remover filme, tente novamente!")
        }
        
    }

    return(
        <div className='container-favorite'>
            <div className='header-favorite'>
                <h2>Favoritos</h2>
                <p>Total: 0</p>
            </div> 
            {films.length === 0 && <span>Você não tem nenhum filme salvo</span>}
            <ul>
                {films.map((film) => {
                    return(
                        <li className='row-list' key={film.id}>
                            <div>
                                <img src={baseImg + film.poster_path} alt={film.title } />
                            </div>
                            <p>{film.title}</p>
                            <span onClick={() => deleteFilm(film.id)}>
                                <FontAwesomeIcon icon={faTrashCan}/>
                            </span>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

