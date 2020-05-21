import { FETCH_SMURF_START, FETCH_SMURF_SUCCESS }  from '../actions';

const initialState = {
    isFetching: false,
    NewSmurf: {
        name: null,
        age: null,
        height: null
    },
    Smurfs: [
        {
            name: null,
            age: null,
            height: null,
            id: null
        }
    ]
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_SMURF_START:
            return {
                ...state,
                    isFetching: true,
            }
        case FETCH_SMURF_SUCCESS:
            return {
                ...state,
                    isFetching: false,
                    Smurfs: [action.payload]
            }
        default:
            return state;
    }
}