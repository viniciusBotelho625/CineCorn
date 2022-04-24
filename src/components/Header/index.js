import React from "react";
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartCircleCheck} from '@fortawesome/free-solid-svg-icons'
import './style.css'

export default function Header() {
    return(
        <header>
            <div>
                <Link to="/" className="logo" >
                    <img src={Logo} alt="logo"/>
                    <p>CineCorn</p>
                </Link>
            </div>
            <div>
                <span>
                    <FontAwesomeIcon icon={faHeartCircleCheck}/>
                </span>
            </div>
        </header>
    );
}