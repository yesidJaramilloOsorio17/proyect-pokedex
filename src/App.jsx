

import './App.css'
import Pokedex from './components/Pokedex'
import Item from './components/Item'
import Home from './components/Home'
import { HashRouter, Routes, Route } from 'react-router-dom'
import ProtectedRoutes from './components/ProtectedRoutes.jsx'

function App() {


  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />} />
           <Route path='/pokedex' element={<Pokedex />} />
          <Route element={<ProtectedRoutes />}>
           
            <Route path='/pokedex/:id' element={<Item />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
