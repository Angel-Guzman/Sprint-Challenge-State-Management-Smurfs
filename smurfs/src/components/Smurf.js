import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSmurf, postSmurf, handleFormChanges } from '../store/actions';
import axios from 'axios';

const Smurf = ({ isFetching, fetchSmurf, postSmurf, handleFormChanges, Smurfs, NewSmurf }) => {

    useEffect(() => {
        fetchSmurf();
    }, [fetchSmurf]);

    return (
        <div>
            {isFetching && <h2>Fetching Smurf..</h2>}
            {!isFetching && Smurfs && (
                Smurfs.map(smurf => (
                    <div className='smurf'>
                        <h2>Name: {smurf.name}</h2>
                        <h2>Age: {smurf.age}</h2>
                        <h2>Height: {smurf.height}</h2>
                    </div>
                ))
                )}
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
        </div>
    )
}

const mapStateToProps = state => {
    // console.log(state);
    return {
        isFetching: state.isFetching,
        NewSmurf: {
            name: state.NewSmurf.name,
            age: state.NewSmurf.age,
            height: state.NewSmurf.height,
        },
        Smurfs: state.Smurfs
    }
}

export default connect(
    mapStateToProps,
    { fetchSmurf, postSmurf, handleFormChanges }
)(Smurf);