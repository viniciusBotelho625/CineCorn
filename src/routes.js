import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Home from './pages/Home';
import Header from './components/Header';

const Rotas = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route exact path="/" element={Home}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;