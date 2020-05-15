import axios from 'axios';

export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const POST_SMURF = 'POST_SMURF';


export const fetchSmurf = () => {
    return dispatch => {
        dispatch({ type: FETCH_SMURF_START });
        axios.get('http://localhost:3333/smurfs')
        .then(res => {
            // console.log(res)
            dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data[0] })
        })
        .catch(err => console.log(err))
    }
}
export const postSmurf = () => {
    return dispatch => {
        axios.post('http://localhost:3333/smurfs')
        .then(res => {
            console.log(res)
            dispatch({ type: POST_SMURF, payload: res.data.NewSmurf });
        })
        .catch(err => console.log(err))
    }
}