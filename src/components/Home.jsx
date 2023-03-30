import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUsername } from '../store/slices/userName.slice';



const Home = () => {
    const [name, setName] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const goPokedex = () => {
        dispatch(getUsername(name));
        navigate("/pokedex")
    }

    return (
        <div className='home'>
            <h1 className='center'>Bienvenido aventurero!!</h1>
            <img src="./public/home.png" width="350px" className='imagen'  alt="" />
            <h2 className='center'>escribe tu nombre para empezar</h2>
            <div className='tarjet'>
                <input type="text" className='button' value={name} onChange={e => setName(e.target.value)} />
            <button className='button' onClick={()=> goPokedex()}>Go</button>
            </div>
            
        </div>
    );
};

export default Home;