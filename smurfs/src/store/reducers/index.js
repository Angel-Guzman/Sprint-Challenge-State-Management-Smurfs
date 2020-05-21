
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

    
    
        default:
            return state;
    }
}