import React from 'react';
import QrReader from 'react-qr-reader';
import { useDispatch } from 'react-redux';
import { getVisitCodeThunk } from 'redux/actions';
import './styles.scss';

export const QrCamera = ({ handleClose }) => {

    const handleErrorWebCam = error => console.log(error);

    const dispatch = useDispatch();

    const handleScanWebCam = result => {
        if(!result) return;

        dispatch(getVisitCodeThunk(result, handleClose));
        handleClose();
    }

    return (
        <div className='qr-camera' onClick={handleClose}>
            <QrReader 
                delay={300}
                style={{width: '100%'}}
                onError={handleErrorWebCam}
                onScan={handleScanWebCam}
            />
        </div>
    );
};
