import { FETCH_SMURF_START, FETCH_SMURF_SUCCESS, POST_SMURF, HANDLE_FORM }  from '../actions';

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
        case HANDLE_FORM:
            return {
                ...state,
                    NewSmurf: {
                        ...state.NewSmurf,
                        [action.payload.target.name]: action.payload.target.value
                    }
            }
        case POST_SMURF:
            // console.log('adding smurf', action.payload)
            return {
                ...state,
                Smurfs: action.payload
            }
        default: 
            return state;
    }
}