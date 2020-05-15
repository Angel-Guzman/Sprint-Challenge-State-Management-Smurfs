import React, { useState } from 'react';
import { connect } from 'react-redux';

import { postSmurf } from '../store/actions';

const SmurfForm = ({ postSmurf, NewSmurf }) => {

    

    const [newSmurfName, setNewSmurfName] = useState('')
    const [newSmurfAge, setNewSmurfAge] = useState('')
    const [newSmurfHeight, setNewSmurfHeight] = useState('')

    const handleNameChanges = e => {
        setNewSmurfName(e.target.value);
    }
    const handleAgeChanges = e => {
        setNewSmurfAge(e.target.value);
    }
    const handleHeightChanges = e => {
        setNewSmurfHeight(e.target.value);
    }

    return (
        <div>
            <input value={newSmurfName} onChange={handleNameChanges} type='text'></input><br />
            <input value={newSmurfAge} onChange={handleAgeChanges} type='text'></input><br />
            <input value={newSmurfHeight} onChange={handleHeightChanges} type='text'></input><br />
            <button onClick={() => postSmurf(NewSmurf)}>Submit</button>
        </div>
    )
}

const mapStateToProps = state => {
    // console.log(state)
    return {
        NewSmurf: {
            newName: state.NewSmurf.newName,
            newAge: state.NewSmurf.newAge,
            newHeight: state.NewSmurf.newHeight,
        }
    }
}

export default connect(
    mapStateToProps,
    { postSmurf }
)(SmurfForm);