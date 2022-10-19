import React,{useContext} from 'react';
import {AuthContext} from "../../contexts/auth";

const HomePage = () =>{

    const {user,logout, authenticated } = useContext(AuthContext);
    

    const handleLogout = () =>{
        logout();
    }

    return (
        <>
            <h1>Olá,{user.name}</h1>
            <p>{String(authenticated)}</p>
            <button onClick={handleLogout}>Logout</button>
        </>
    );
}

export default HomePage;