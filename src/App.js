import { ProtectedRoute } from 'auth';
import React from 'react';
import { 
    Router,
    Switch,
    Route,
} from 'react-router-dom';
import history from 'utils/history';
import * as views from "./UI/views";
import { useSelector } from 'react-redux';
import { InfoModal } from 'UI/modals';
import { LoadingScreen } from 'UI/components';

import './App.scss';

const App = () => {

    const infoModal = useSelector(state => state.app.infoModal);
    const isLoading = useSelector(state => state.app.isLoading);

    return (
        navigator.onLine ? (
            <Router history={history}>
                { isLoading && <LoadingScreen />}
                { infoModal.type && <InfoModal type={infoModal.type} handleClose={infoModal.handleClose} autoClose={infoModal.autoClose} showingTime={infoModal.showingTime} action={infoModal.action} message={infoModal.message} link={infoModal.link} linkMessage={infoModal.linkMessage} title={infoModal.title} />}
                <Switch>
                    <ProtectedRoute path="/invitacion-escaneada">
                        <views.ScannedInvitation />
                    </ProtectedRoute>
                    <Route path="/login">
                        <views.Login />
                    </Route>
                    <ProtectedRoute path="/">
                        <views.Home />
                    </ProtectedRoute>
                </Switch>
            </Router>
        ) : ( 'Sin internet' )
    );
};

export default App;