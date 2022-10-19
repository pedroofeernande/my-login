import React, { useContext, useState } from 'react';

import { AuthContext } from '../../contexts/auth';
import logo from '../../assets/logo.png';

import './style.css';


const LoginPage = () => {
    const { authenticated, login } = useContext
        (AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit');
        login(email, password);
    }


    return (
        <div className="container">
            <div className="container-login">
                <div className="wrap-login">


                    <form className="form" onSubmit={handleSubmit}>


                        <span className="login-form-title"> Acessar Conta </span>

                        <span className="login-form-title">
                            <img src={logo} alt="Logo" />
                        </span>

                        <div className="user-box">
                            <input
                                className={password !== "" ? "has-val input" : "input"}
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <span className="focus-input" data-placeholder="Email"></span>
                        </div>

                        <div className="user-box">
                            <input
                                className={password !== "" ? "has-val input" : "input"}
                                type="password"
                                name="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span className="focus-input" data-placeholder="Senha"></span>
                        </div>
                    
                            <div className='wrap-forgot'>
                            <span className="txt3">Esqueceu sua senha? </span>
                            <a className="txt4" href="#">
                                Clique aqui
                            </a>
                        </div>
                        
                        <div className="actions">
                            <button className="login-form-btn" type="submit" id="submit">Entrar</button>
                        </div>
                        <div className="text-center">

                            <span className="txt1">Não possui conta? </span>
                            <a className="txt2" href="#">
                                Criar conta
                            </a>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;