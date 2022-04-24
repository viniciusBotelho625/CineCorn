import React, { useEffect, useState } from "react";
import api from '../../services/api';
import './style.css';

export default function Home() {

    const [films, setFilms]  = useState([]);
    const baseImg = 'https://image.tmdb.org/t/p/original'
    useEffect(() => {
        async function loadFilms() {
            const resp =  await api.get('popular')
            setFilms(resp.data.results)
            console.log(resp.data.results)
        }

        loadFilms();
    }, []);
    
    return(
        
        <div className="container">
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