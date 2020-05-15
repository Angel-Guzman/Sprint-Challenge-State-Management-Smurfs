import { FETCH_SMURF_START, FETCH_SMURF_SUCCESS, POST_SMURF }  from '../actions';

const initialState = {
    isFetching: false,
    NewSmurf: {
        newName: null,
        newAge: null,
        newHeight: null
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
    switch(action.type) {
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
        case POST_SMURF:
            console.log('adding smurf', action.payload)
            return {
                ...state,
                Smurfs: [...state.Smurfs, action.payload]
            }
        default: 
            return state;
    }
}