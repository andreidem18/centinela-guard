import React from 'react';
import { Link } from 'react-router-dom';
import { escudoAncho, nombreApp } from "UI/assets";
import { InputLight, Background } from 'UI/components';
import { doLoginThunk } from 'redux/actions';
import { useDispatch } from 'react-redux';

import "./styles.scss";

export const Login = () => {

    const dispatch = useDispatch();

    const login = e => {
        e.preventDefault();            // Para que no vengan espacios
        dispatch(doLoginThunk({email: e.target[0].value.replace(/\s/g,''), password: e.target[1].value}));
    }

    return (
        <Background>
            <section className="login">
                <div className="slogan">
                    <div className="logo-container">
                        <img className="logo" src={escudoAncho} alt="Logo" />
                        <img className="app-name" src={nombreApp} alt="Nombre de la aplicación" />
                        <h4 className="phrase">
                            Seguridad
                        </h4>
                    </div>
                </div>
                <div className="form-container">
                    <form action="" onSubmit={login}>
                        <div className="input-container">
                            <InputLight type="text" label="Correo Electrónico" required={true} />
                        </div>
                        <div className="input-container">
                            <InputLight type="password" label="Contraseña" required={true} />
                            <Link to="/recuperar-contraseña">Olvidé mi contraseña</Link>
                        </div>
                        <button className="login-button">
                            <span>Ingresar</span>
                            <div className="inner"></div>
                        </button>
                    </form>
                </div>
            </section>
        </Background>
    );
};
