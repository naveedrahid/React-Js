import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const SignUp = ()=>{

    const [name, setName]= useState(''); 
    const [email, setEmail]= useState(''); 
    const [password, setPassword]= useState(''); 
    const navigate = useNavigate();

    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/');
        }
    });

    const collectData = async () =>{
        // console.warn(name,email,password);
        let result = await fetch('http://localhost:5000/registerd', {

            method:'post',
            body: JSON.stringify({name,email,password}),
            headers:{
                'Content-Type': 'application/json'
            },
        });
        result = await result.json()
        console.warn(result);
        localStorage.setItem('user', JSON.stringify(result))
        navigate('/')
    }

    return(
        <div className='singup'>
            <h1>Register</h1>
            <input className='w-100' type="text" 
                value={name} 
                onChange={(e)=> setName(e.target.value)} placeholder="Enter Your Name" />
            
            <input className='w-100' type="email" 
                value={email} 
                onChange={(e)=> setEmail(e.target.value)} placeholder="Enter Your Email" />
            
            <input className='w-100' type="password" 
                value={password} 
                onChange={(e)=> setPassword(e.target.value)} placeholder="Enter Your Password" />
            
            <button className='w-100' onClick={collectData} type="submit">Submit</button>
        </div>
    );
}

export default SignUp;