import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUsername } from '../store/slices/userName.slice';
import logohome from "../assets/img/logohome.png";


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
            <h1 className='center1'>Hello trainer!!</h1>
            <img src={logohome} width="350px" className='imagen'  alt="" />
            <h2 className='center1'>Give me your name to start</h2>
            <div className='tarjet'>
                <input type="text" className='button' value={name} onChange={e => setName(e.target.value)} />
            <button className='button' onClick={()=> goPokedex()}>Go</button>
            </div>
            
        </div>
    );
};

export default Home;