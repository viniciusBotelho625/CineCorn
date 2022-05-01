import React, { useEffect, useState } from "react";
import api from '../../services/api';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function Home() {

    const [films, setFilms]  = useState([]);
    const [initalFilms, setInitalFilms]  = useState([]);
    // const [search, setSearch] = useState('');

    const baseImg = 'https://image.tmdb.org/t/p/original'


    useEffect(() => {
        async function loadFilms() {
            try {
                const resp =  await api.get('popular')
                setFilms(resp.data.results)
                setInitalFilms(resp.data.results)
            } catch (error) {
                console.log(error)
            }
            
        }

        loadFilms();
    }, []);

    const handleChange = ({ target }) => {
        if(!target.value) {
            setFilms(initalFilms)
            return
        }

        
        
        const filterFilms = films.filter(({title}) => title.includes(target.value))

        setFilms(filterFilms)
    }
  
    
    return(
        <div className="container">
            <div className="input-header">
                <span className="search">
                    <FontAwesomeIcon icon={faSearch}/>
                </span>
                <input type="search" 
                    className='input-search'
                    // value={search}
                    onChange={handleChange}
                />
            </div>
            <div className="list-films">
                {films.map((film) => {
                    return(
                        <article key={film.id}>
                            <img src={baseImg + film.poster_path} alt={film.title }/>
                            <div className="rodape-info">
                                <strong>{film.title}</strong>
                                <strong>Média: {film.vote_average}</strong>                               
                            </div>
                        </article>
                    );
                })}
            </div>
        </div>
    );
}