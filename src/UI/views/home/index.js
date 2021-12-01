import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserThunk } from 'redux/actions';
import { QrCamera } from 'UI/modals';
import { IncidentsHome, StatementsHome, VisitsHome } from './components';
import { HomeView } from './home-view';

import "./styles.scss";

export const Home = () => {

    const dispatch = useDispatch();
    const loggedUser = useSelector(state => state.auth.loggedUser);
    // const invitations = useSelector(state => state.guests.invitations);
    const [ viewSelected, setViewSelected ] = useState(1);
    const [ isCameraOpen, setIsCameraOpen ] = useState(false);

    useEffect(() => {
        if(!loggedUser.id){
            dispatch(getUserThunk());
            // dispatch(getGuestsThunk());
        }
    }, [ dispatch, loggedUser ]);

    const getViewSelected = () => {
        switch(viewSelected){
            case 0:
                return <VisitsHome invitations={[]} />
            case 1:
                return <IncidentsHome incidents={fakeIncidents} />
            default:
                return <StatementsHome statements={fakeStatements} />
        }
    }

    return (
        <>
            <HomeView  
                viewSelected={viewSelected} 
                setViewSelected={setViewSelected}
                getViewSelected={getViewSelected}
                loggedUser={loggedUser}
                openCamera={() => setIsCameraOpen(true)}
            />
            {
                isCameraOpen &&
                    <QrCamera 
                        handleClose={() => setIsCameraOpen(false)}
                    />
            }
        </>
    );
};


const fakeStatements = [
    {
        id: 1,
        title: 'cambio de administración',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam labore cupiditate odio corrupti debitis impedit eveniet ex, modi molestiae non harum quibusdam aliquid quidem? Blanditiis cumque magni nisi nulla assumenda?',
        author: {first_name: 'John', last_name: 'Doe'},
        created_at: new Date("September 26, 2021 10:30:00")
    },
    {
        id: 2,
        title: 'Horario de fiestas',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro accusantium numquam praesentium soluta ex blanditiis illum! Quidem, incidunt? Commodi sint numquam praesentium maxime atque? Eaque minus ea hic a veritatis.',
        author: {first_name: 'John', last_name: 'Doe'},
        created_at: new Date("September 20, 2021 10:30:00")
    }
]


const fakeIncidents = [
    {
        id: 1,
        title: 'Vecino no mueve el carro que me bloquea el paso',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam labore cupiditate odio corrupti debitis impedit eveniet ex, modi molestiae non harum quibusdam aliquid quidem? Blanditiis cumque magni nisi nulla assumenda?',
        author: {first_name: 'John', last_name: 'Doe'},
        created_at: new Date("September 26, 2021 10:30:00")
    },
    {
        id: 2,
        title: 'Vecino estaba martillando en la madrugada',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro accusantium numquam praesentium soluta ex blanditiis illum! Quidem, incidunt? Commodi sint numquam praesentium maxime atque? Eaque minus ea hic a veritatis.',
        author: {first_name: 'Carl', last_name: 'Johnson'},
        created_at: new Date("September 20, 2021 10:30:00")
    }
]
