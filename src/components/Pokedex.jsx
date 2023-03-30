import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import GetPokemons from './GetPokemons';

const Pokedex = () => {
    const userName = useSelector(state => state.userName)
    const navigate = useNavigate();
    const [pokemons, setPokemons] = useState([])
    const [search, setSearch] = useState("")
    const [suggestion, setSuggestion] = useState([])

    useEffect(() => {
        getAllPokemons();
    }, [])

    const getAllPokemons = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1279`)
            .then(res => setPokemons(res.data))
    }
    

    return (
        <div className='pokedex'>
            <div>
                 <button onClick={() => navigate(-1)}  style={{backgroundColor:"grey"}}>Regresar</button>
            </div>
           <div className='center'>
              <h1 >Pokedex</h1><h2>bienvenid@ <span className='title'>{userName}</span>, <br /> <span>Ahora puedes buscar tu pokemon favorito </span> </h2>
            
           </div>
           <div className='list'>
            
                <input type="text" className='button' placeholder='Name o id' value={search} onChange={(e => setSearch(e.target.value))} />
            <button className='button' onClick={() => navigate(`/pokedex/${search}`)}>Search</button>
            
             </div>
            
            <GetPokemons pokemons={pokemons} setPokemons={setPokemons} />
        </div>
    );
};

export default Pokedex;