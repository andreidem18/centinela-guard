import React from 'react';
import { ChatButton, StandarContainer } from 'UI/components';

export const HomeView = ({ loggedUser, viewSelected, setViewSelected, getViewSelected, openCamera }) => {

    return (
        <StandarContainer sectionSelected='home'>
            <section className="home-user">
                <div>
                    <h1>Hola <span>{loggedUser.first_name}</span></h1>
                    <p className='invitations-buttons-description'>Ingreso de invitados</p>
                    <div className="invitations-buttons">
                        <button onClick={openCamera}>
                            <i className="icon-qr-code"></i>
                            <span>Escanear código</span>
                        </button>
                        <button>
                            <i className="icon-number-keyboard"></i>
                            <span>Introducir código</span>
                        </button>
                    </div>
                    <div className="view-buttons">

                        <button 
                            className={viewSelected === 0 ? 'selected' : ''} 
                            onClick={() => setViewSelected(0)}
                        >
                            Visitas
                        </button>

                        <button 
                            className={viewSelected === 1 ? 'selected' : ''} 
                            onClick={() => setViewSelected(1)}
                        >
                            Incidentes
                        </button>
                        
                        <button 
                            className={viewSelected === 2 ? 'selected' : ''} 
                            onClick={() => setViewSelected(2)}
                        >
                            Comunicados
                        </button>

                    </div>
                </div>
                <div className="view-container"> 
                    { getViewSelected() } 
                </div>
                <ChatButton />
            </section>
        </StandarContainer>
    );
};
