import React, { useState } from 'react';
import { connect } from 'react-redux';

import { postSmurf, handleFormChanges } from '../store/actions';

const SmurfForm = ({ postSmurf, NewSmurf, handleFormChanges }) => {

    return (
        <>
        <div>
            <input value={NewSmurf.name} name='name' onChange={handleFormChanges} type='text'></input><br />
            <input value={NewSmurf.age} name='age' onChange={handleFormChanges} type='text'></input><br />
            <input value={NewSmurf.height} name='height' onChange={handleFormChanges} type='text'></input><br />
            <button 
            onClick={() => {
                postSmurf(NewSmurf)
            }}
            >Submit</button>
        </div>

            <div>
                <h2>New Smurf</h2>
                <h2>Name: {NewSmurf.name}</h2>
                <h2>Age: {NewSmurf.age}</h2>
                <h2>Height: {NewSmurf.height}</h2>
            </div>
        </>
    )
}



const mapStateToProps = state => {
    // console.log(state)
    return {
        NewSmurf: {
            name: state.NewSmurf.name,
            age: state.NewSmurf.age,
            height: state.NewSmurf.height,
        }
    }
}

export default connect(
    mapStateToProps,
    { postSmurf, handleFormChanges }
)(SmurfForm);