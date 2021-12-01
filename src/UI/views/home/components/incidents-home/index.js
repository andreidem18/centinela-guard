import React from 'react';
import { Link } from 'react-router-dom';
import { celebracion } from 'UI/assets';
import { getAvatar, timeSince } from 'utils';

import './styles.scss';

export const IncidentsHome = ({ incidents }) => {
    return (
        <div className='incidents-home'>
            {
                incidents.length > 0 ? (
                    incidents.map(incident => {
                        const title = incident.title.length > 25 ? incident.title.substring(0, 24) + '...' : incident.title;
                        return (
                            <Link className="card" key={incident.id} to='/incidents'>
                                <div className="header">
                                    <h4>{title}</h4>
                                    <span>
                                        <i className="icon-shorcut"></i>
                                    </span>
                                </div>
                                <p>{incident.text.length > 100 ? incident.text.substring(0, 100) + '...' : incident.text}</p>
                                <div className="bottom">
                                    <img src={getAvatar(incident.author.first_name, incident.author.last_name)} alt="" />
                                    <div className="name">
                                        <span>{incident.author.first_name} {incident.author.last_name}</span>
                                    </div>
                                </div>
                                <div className="date">{timeSince(incident.created_at)}</div>
                            </Link>
                        )
                    })
                ) : (
                    <div className="card empty">
                        <img src={celebracion} alt="" />
                        No hay ningún incidente
                    </div>
                )
            }
        </div>
    );
};
