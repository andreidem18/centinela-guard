import { visitActions } from "redux/actions";

const initialState = {
    visits: [],
    currentVisit: {
        id: 0,
        code: "",
        type: "",
        created_on: "",
        date_start: "",
        date_end: "",
        guest: {
            first_name: "",
            last_name: "",
            vehicle_type: "",
            license_plate: ""
        },
        user: {
            first_name: "",
            last_name: ""
        }
    }
}

const visitReducer = (state = initialState, action) => {
    switch (action.type) {
        case visitActions.setVisits:
            return {...state, visits: action.payload }

        case visitActions.setCurrentVisit:
            return {...state, currentVisit: action.payload }
        
        default:
            return state;
    }
}

export default visitReducer;
