import { 
    LOGIN_USER, 
    LOGOUT_USER,
    IS_REGISTERED
} from '../constants/action-types';

const initialState = {
    currentUser: {},
    isRegistered: false
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_USER: {
            return {...state, currentUser: action.payload}
        }
        case LOGOUT_USER: {
            return {...state, currentUser: {}}
        }
        case IS_REGISTERED: {
            return {...state, isRegistered: true}
        }
        default:
            break;
    }
    return state;
};

export default rootReducer;