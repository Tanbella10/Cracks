import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./pages/HomePage" 
import NormaPage from './pages/normaPage'
import ObjetivoPage from './pages/ObjetivoPage'
import Botones from './componets/Botones';
import Encuesta from './pages/Encuesta'
import Equipo from './pages/Equipo';
import Conceptos from './pages/Conceptos'; 
import './App.css'


function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<HomePage/>} />
        <Route path='/normas' element = {<NormaPage/>} />
        <Route path='/Objetivos' element= {<ObjetivoPage/>}/>
        <Route path='/category' element= {<Botones/>}/>
        <Route path='/encuesta' element= {<Encuesta/>}/>
        <Route path='/Nosotras' element= {<Equipo/>}/>
        <Route path='/Concetos' element= {<Conceptos/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
