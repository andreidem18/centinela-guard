import React, { useState, useMemo } from 'react';
import { escudoAncho } from 'UI/assets';

import "./styles.scss";
import { doLogout } from 'redux/actions';
import { useDispatch } from 'react-redux';

export const NavBar = () => {

    const [ showMenu, setShowMenu ] = useState(false);
    // Para colocarle un height del 8% del tamaño de la pantalla, que no se altere si se abre el teclado
    const height = useMemo(() => 8 * window.innerHeight / 100, []);
    const dispatch = useDispatch();

    return (
        <div className="nav-bar-container" style={{height}}>
            <div className="nav-bar">
                <nav>
                    <button className='notifications-button'>
                        <i className="fas fa-bell"></i>
                    </button>
                    <img src={escudoAncho} alt="Escudo" />
                    <button onClick={() => dispatch(doLogout())} className="logout-button">
                        <i className="fas fa-sign-out-alt"></i>
                    </button>
                </nav>
            </div>
            { showMenu &&
                <div className="overlay" onClick={() => setShowMenu(false)}></div>
            }
        </div>
    );
};
