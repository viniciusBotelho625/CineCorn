import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Home from './pages/Home';
import Favorite from './pages/Favorite';
import Header from './components/Header';

const Rotas = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route path="/favorite" element={<Favorite />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;