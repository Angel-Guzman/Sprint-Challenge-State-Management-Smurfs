import axios from 'axios';

export const FETCH_SMURF_START = 'FETCH_SMURF_START';

export const fetchSmurf = () => {
    return dispatch => {
        dispatch({ type: FETCH_SMURF_START });
    }
}