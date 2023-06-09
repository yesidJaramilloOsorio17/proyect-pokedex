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
                 <button onClick={() => navigate(-1)}  style={{backgroundColor:"red"}}>Back</button>
            </div>
           <div className='center'>
              <h1 >Pokedex</h1><h2 className='description w '>Welcome, {userName}<span className='title'>&#160;</span> <br />  </h2>
              <h3 className=''>Here you can find your favorite pokemon <span>&#160;</span></h3>
            
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