import React, { useState, createContext, useEffect} from "react";

import { useNavigate } from "react-router-dom";

import {api, createSession} from "../services/api.js"

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const navigate = useNavigate(); //utilizado para direcioar para outras paginas/rotas
    const [user, setUser] = useState(null); //declarando user
    const [loading, setLoading] = useState(true);//verificar se dados do UE ja carregou usuario

    useEffect(() =>{
        //recuperar dados do usuario pegando do localstorage
        const recoveredUser = localStorage.getItem("user");

        //se existe dados de recuperados, seta o user com os mesmos
        if(recoveredUser){
            setUser(JSON.parse(recoveredUser));
        }

        setLoading(false);
    }, []);

    const login = async (email,password) => {

        const response = await createSession(email, password);

        console.log("login", response.data);
        //api criar uma sessao
        const loggedUser = response.data.user;
        const token = response.data.token;

        //armazenar dados do usuario logado no localstorage
        localStorage.setItem("user", JSON.stringify(loggedUser));
        localStorage.setItem("token", token);

        //define quem é o token monta o bearer
        api.defaults.headers.Authorization = `Bearer ${token}`;

        setUser(loggedUser);
        navigate("/");
    

    };
    const logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        console.log("logout");
        api.defaults.headers.Authorization = null;
        setUser(null);
        navigate("/login");
    };
    return (
        <AuthContext.Provider
                value={{authenticated: !!user, user, loading, login,logout}}
        >
        {children}
        </AuthContext.Provider>
    );
}