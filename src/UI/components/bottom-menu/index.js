import React from 'react';
import { Link } from 'react-router-dom';


import './styles.scss';

export const BottomMenu = ({ selected }) => {

    return (
        <div className='bottom-menu'>
            <Link className={selected === 'home' ? 'active' : ''} to='/'>
                <i className="icon-home"></i>
                <span>Principal</span>
            </Link>
            <Link className={selected === 'visits' ? 'active' : ''} to='/visitas'>
                <i className="icon-group"></i>
                <span>Visitas</span>
            </Link>
            <Link className={selected === 'events' ? 'active' : ''} to='/eventos'>
                <i className="icon-calendar"></i>
                <span>Eventos</span>
            </Link>
            <Link className={selected === 'payments' ? 'active' : ''} to='/pagos'>
                <i className="icon-bullhorn"></i>
                <span>Incidentes</span>
            </Link>
        </div>
    );
};
