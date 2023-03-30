import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ url}) => {
    const [pokemon, setPokemon] = useState({})
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(url)
            .then(res => setPokemon(res.data))
    }, [])

    return (
        <div onClick={() => navigate(`/pokedex/${pokemon.id}`)} className="card" 
         style={{backgroundColor: pokemon.types?.[0].type.name === "fire" ? "red": 
         pokemon.types?.[0].type.name === "water"?"blue":
          pokemon.types?.[0].type.name === "rock"? "slategrey":
          pokemon.types?.[0].type.name === "grass"? 'yellowgreen' : 
          pokemon.types?.[0].type.name === "normal"? "yellow": 
          pokemon.types?.[0].type.name === "dragon"? "orange": 
          pokemon.types?.[0].type.name === "dark"? "purple":
          pokemon.types?.[0].type.name === "ghost"? 'lightpink':"golden"}}  >
            <div>
              <h2 className='estate1'>{pokemon.name}  </h2>
            </div>
            
            <div className='tipe'>type: {pokemon.types?.[0].type.name}</div>
            <img width={"150px"} src={pokemon.sprites?.other.dream_world.front_default} alt="" />
        </div>
    );
};

export default Card;