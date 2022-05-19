import Routes from './routes';
import './Global.css';
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='app'>
      <ToastContainer 
        position="top-center"
        autoClose={5000}
      />
      <Routes />
    </div>
  );
}

export default App;


