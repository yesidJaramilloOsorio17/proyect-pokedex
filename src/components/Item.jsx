import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';

const Item = () => {
    const userName = useSelector(state => state.userName)
    const {id} = useParams();
    const [pokemon, setPokemon] = useState({})
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res => setPokemon(res.data))
    }, [])

    return (
        <>
        <div >
          <div className='logo'>
             <img src="./public/logo.png" width="300px" alt="" className='img'/>
          </div>
          
        <div className='tarjet-principal'>
            
            <div className='tarjet'  style={{backgroundColor: pokemon.types?.[0].type.name === "fire" ? "red": 
         pokemon.types?.[0].type.name === "water"?"blue":
          pokemon.types?.[0].type.name === "rock"? "slategrey":
          pokemon.types?.[0].type.name === "grass"? 'yellowgreen' : 
          pokemon.types?.[0].type.name === "normal"? "yellow": 
          pokemon.types?.[0].type.name === "dragon"? "orange": 
          pokemon.types?.[0].type.name === "dark"? "purple":
          pokemon.types?.[0].type.name === "ghost"? 'lightpink':"golden"}}  >
              
                <h2><span>Hey </span>{userName}!! <span>este es el pokemon</span> <br /> <span className='title'>{pokemon.name}</span> </h2>
                
               <img width={"150px"} src={pokemon.sprites?.other.dream_world.front_default} alt="" />
                  <div className='estate'>
                    <h3 className='estate1'>Weight: {pokemon.weight}</h3>
                     <h2 className='estate1'># {pokemon.id}</h2>
                <h3 className='estate1'>Height: {pokemon.height}</h3>
               
                  </div>
                  <div >
                     <button className='button' style={{backgroundColor:"grey"}} onClick={() => navigate(-1)}>Regresar</button>
                  </div>
               
            </div>
               
           <div className='tarjet1' >
              <div className='tarjet'  style={{backgroundColor: pokemon.types?.[0].type.name === "fire" ? "red": 
         pokemon.types?.[0].type.name === "water"?"blue":
          pokemon.types?.[0].type.name === "rock"? "slategrey":
          pokemon.types?.[0].type.name === "grass"? 'yellowgreen' : 
          pokemon.types?.[0].type.name === "normal"? "yellow": 
          pokemon.types?.[0].type.name === "dragon"? "orange": 
          pokemon.types?.[0].type.name === "dark"? "purple":
          pokemon.types?.[0].type.name === "ghost"? 'lightpink':"golden"}} >
         <h3>Abilidades:</h3>
         <h2>{pokemon.abilities?.[0].ability.name}</h2>
       </div>    
        
      <div className='tarjet'  style={{backgroundColor: pokemon.types?.[0].type.name === "fire" ? "red": 
         pokemon.types?.[0].type.name === "water"?"blue":
          pokemon.types?.[0].type.name === "rock"? "slategrey":
          pokemon.types?.[0].type.name === "grass"? 'yellowgreen' : 
          pokemon.types?.[0].type.name === "normal"? "yellow": 
          pokemon.types?.[0].type.name === "dragon"? "orange": 
          pokemon.types?.[0].type.name === "dark"? "purple":
          pokemon.types?.[0].type.name === "ghost"? 'lightpink':"golden"}} >
         <h3>Movements:</h3>
         <h2>{pokemon.moves?.[0].move.name}</h2>
       </div>
       <div className='tarjet'  style={{backgroundColor: pokemon.types?.[0].type.name === "fire" ? "red": 
         pokemon.types?.[0].type.name === "water"?"blue":
          pokemon.types?.[0].type.name === "rock"? "slategrey":
          pokemon.types?.[0].type.name === "grass"? 'yellowgreen' : 
          pokemon.types?.[0].type.name === "normal"? "yellow": 
          pokemon.types?.[0].type.name === "dragon"? "orange": 
          pokemon.types?.[0].type.name === "dark"? "purple":
          pokemon.types?.[0].type.name === "ghost"? 'lightpink':"golden"}} >
         <h3>type:</h3>
         <h2>{pokemon.types?.[0].type.name}</h2>
       </div>
            </div>  
      

        </div> 
        </div>
        
       
        </>
    );
};

export default Item;