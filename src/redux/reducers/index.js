import appReducer from './app.reducer';
import authReducer from './auth.reducer';
import { combineReducers } from "redux";
import visitReducer from './visit.reducer';

export default combineReducers({
    app: appReducer,
    auth: authReducer,
    visit: visitReducer
});
