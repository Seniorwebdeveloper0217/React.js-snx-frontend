import { 
    LOGIN_USER,
    LOGOUT_USER,
    IS_REGISTERED
} from '../constants/action-types.js';

export function loginUser(payload) {
    return {type: LOGIN_USER, payload};
};

export function logoutUser() {
    return {type: LOGOUT_USER}
};

export function isRegistered() {
    return {type: IS_REGISTERED}
}