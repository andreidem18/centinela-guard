import React from 'react';
import { Link } from 'react-router-dom';
import { buscando } from 'UI/assets';
import { getAvatar, timeSince } from 'utils';

import './styles.scss';

export const StatementsHome = ({statements}) => {
    console.log(statements.length)
    return (
        <div className='statements-home'>
            {
                statements.length > 0 ? (
                    statements.map(s => (
                        <Link className="card" key={s.id} to='/comunicados'>
                            <div className="header">
                                <h4>{s.title}</h4>
                                <span>
                                    <i className="icon-shorcut"></i>
                                </span>
                            </div>
                            <p>{s.text.length > 100 ? s.text.substring(0, 100) + '...' : s.text}</p>
                            <div className="bottom">
                                <img src={getAvatar(s.author.first_name, s.author.last_name)} alt="" />
                                <div className="name">
                                    <span>{s.author.first_name} {s.author.last_name}</span>
                                </div>
                            </div>
                            <div className="date">{timeSince(s.created_at)}</div>
                        </Link>
                    ))
                ) : (
                    <div className="card empty">
                        <img src={buscando} alt="" />
                        Parece que no hay comunicados
                    </div>
                )
            }
        </div>
    );
};



