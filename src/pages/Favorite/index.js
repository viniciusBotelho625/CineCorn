import React, { useEffect, useState } from 'react'
import './style.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

export default function Favorite() {

    const [films, setFilms] = useState([]) 
    const baseImg = 'https://image.tmdb.org/t/p/original'

   
    
    useEffect(() =>{
        const myListFavorite = localStorage.getItem("@cinecorn")

        setFilms(JSON.parse(myListFavorite) || [])
 
    }, [])


    return(
        <div className='container-favorite'>
            <div className='header-favorite'>
                <h2>Favoritos</h2>
                <p>Total: </p>
            </div> 
            <ul>
                {films.map((film) => {
                    return(
                        <li className='row-list' key={film.id}>
                            <div>
                                <img src={baseImg + film.poster_path} alt={film.title } />
                            </div>
                            <p>{film.title}</p>
                            <span>
                                <FontAwesomeIcon icon={faTrashCan}/>
                            </span>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

