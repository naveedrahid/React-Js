import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const Login = () =>{

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const Navigate = useNavigate();
    useEffect( ()=>{
        const auth = localStorage.getItem('user');
        if(auth)
        Navigate('/');
    }, []);

    const handleLogin = async () =>{
        console.warn(email,password);
        let result = await fetch('http://localhost:5000/login', {
           method:'post',
           body:JSON.stringify({email, password}),
           headers:{
            'Content-Type': 'application/json'
            } 
        });
        result = await result.json();
        console.warn(result);
        if (result.name) {
            localStorage.setItem('user', JSON.stringify(result));
            Navigate('/');
        }else{
            alert('insert correct information')
        }
    }

    return(
        <div className='singup'>
            <h1>Login</h1>
            
            <input className='w-100' type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Enter Your Email" />
            
            <input className='w-100' type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Enter Your Password" />
            
            <button className='w-100' type="submit" onClick={handleLogin}>Submit</button>
        </div>
    );
}

export default Login