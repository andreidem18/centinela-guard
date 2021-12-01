import React from 'react';
import { MainLayout } from 'UI/components';
import { formatDateString, formatTime } from 'utils';
import { useSelector } from 'react-redux';

import "./styles.scss";

export const ScannedInvitation = () => {

    const invitation = useSelector(state => state.visit.currentVisit);
    const creationDate = formatDateString(new Date(invitation.created_on));
    const creationHour = formatTime(new Date(invitation.created_on));

    return (
        <MainLayout title='invitación' sectionSelected='visits'>
            <div className="invitation-detail">
                    <h4>{invitation.guest.first_name} {invitation.guest.last_name}</h4>
                    <span className='created-date'>Creada el {creationDate} a las {creationHour}</span>
                    {
                        invitation.type === 2 &&
                            <div className="calendars">
                                <div className="feature-container">
                                    <span className="label">Desde</span>
                                    <div className="feature"> {formatDateString(new Date(invitation.date_start))} </div>
                                </div>
                                <div className="feature-container">
                                    <span className="label">Expira</span>
                                    <div className="feature"> {formatDateString(new Date(invitation.date_end))} </div>
                                </div>
                            </div>
                    }
                    { invitation.guest.vehicle_type &&
                        <div className="feature-container">
                            <span className="label">Tipo de vehículo</span>
                            <div className="feature"> {invitation.guest.vehicle_type} </div>
                        </div>
                    }
                    { invitation.guest.license_plate &&
                        <div className="feature-container">
                            <span className="label">Placa</span>
                            <div className="feature"> {invitation.guest.license_plate} </div>
                        </div>
                    }
                    <button className="finish-button">
                        Registrar entrada
                    </button>
            </div>
        </MainLayout>
    );
};
