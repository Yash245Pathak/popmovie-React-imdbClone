import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Singlemovie from './Singlemovie';
import Error from './Error'

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="main">
          <div className="heading">
            <h1>POPMOVIE.COM</h1>
          </div>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='movie/:id' element={<Singlemovie />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
