import { get } from "utils";
import { validateInvitation } from "utils/validateInvitation";
import { handleError, setLoading, showInfoModal } from ".";
import history from "utils/history";


export const visitActions = {
    setVisits: "SET_VISIT",
    setCurrentVisit: "SET_CURRENT_VISIT"
}

export const setVisits = visits => ({ 
    type: visitActions.setVisits,
    payload: visits
});

export const setCurrentVisit = visit => ({
    type: visitActions.setCurrentVisit,
    payload: visit
})


export const getVisitsThunk = () => {
    return dispatch => {
        dispatch(setLoading(true));
        return get('example')
            .then(res => console.log(res.data.data))
            .catch(error => error)
            .finally(() => dispatch(setLoading(false)))
    }
}

export const getVisitCodeThunk = (code, handleClose) => {
    return dispatch => {
        dispatch(setLoading(true));
        return get(`items/guest_code_unique?fields=*.*&filter[code]=${code}`)
            .then(res => {
                
                if(res.data.data.length === 0){
                    return dispatch(showInfoModal({ type: 'error', title: 'Código errado', message: 'Este código no se encuentra asociado a ninguna visita' }));

                }
                switch(validateInvitation(res.data.data[0])){
                    case 2:
                        return dispatch(showInfoModal({ type: 'error', title: 'Código cancelado', message: 'Este código fue cancelado por el usuario' }));
                    case 3:
                        return dispatch(showInfoModal({ type: 'error', title: 'Código expirado', message: 'Este código excedió su tiempo útil' }))
                    default:
                        dispatch(setCurrentVisit(res.data.data[0]));
                        history.push('invitacion-escaneada');
                }
            })
            .catch(error => dispatch(handleError(error)))
            .finally(() => {
                dispatch(setLoading(false));
                handleClose();
            });
    }
}
