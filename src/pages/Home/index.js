import React, { useEffect, useState } from "react";
import api from '../../services/api';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

export default function Home() {

    const [films, setFilms]  = useState([]);
    const [initalFilms, setInitalFilms]  = useState([]);
    const [loading, setLoading] = useState(true);
   

    const baseImg = 'https://image.tmdb.org/t/p/original'


    useEffect(() => {
        async function loadFilms() {
            try {
                const resp =  await api.get('movie/popular', {
                    params: {
                        language: 'pt-BR',
                        page: 1,
                    }
                })
                setFilms(resp.data.results)
                setInitalFilms(resp.data.results)
                setLoading(false)
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
        
        const filterFilms = films
            .filter(({title}) => title.toLowerCase().includes(target.value.toLowerCase()))

        setFilms(filterFilms)
    }

  
    if(loading) {
        return(
            <div className="spinner">
                <div className="loading"></div>
                <div className="messege">
                    <p>Carregando...</p>
                </div>
            </div>
        )
    }
    return(
        <div className="container">
            <div className="input-header">
                <span className="search">
                    <FontAwesomeIcon icon={faSearch}/>
                </span>
                <input type="search" 
                    className='input-search'
                    onChange={handleChange}
                />
            </div>
            <div className="list-films">
                {films.map((film) => {
                    return(
                        <Link to={`/filme/${film.id}`}>
                            <article key={film.id}>
                                <img src={baseImg + film.poster_path} alt={film.title }/>
                                <div className="rodape-info">
                                    <strong>{film.title.substr(0, [29])}</strong>
                                    <strong>Média: {film.vote_average}</strong>                               
                                </div>
                            </article>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}