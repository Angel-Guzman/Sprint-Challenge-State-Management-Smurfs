import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSmurf, postSmurf, } from '../store/actions';

const Smurf = ({ isFetching, fetchSmurf, Smurfs }) => {

    useEffect(() => {
        fetchSmurf();
    }, [fetchSmurf]);

    return (
        <div>
            {isFetching && <h2>Fetching Smurf..</h2>}
            {!isFetching && Smurfs && (
                Smurfs.map(smurf => (
                    <div>
                        <h2>Name: {smurf.name}</h2>
                        <h2>Age: {smurf.age}</h2>
                        <h2>Height: {smurf.height}</h2>
                    </div>
                ))
                )}
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
    { fetchSmurf }
)(Smurf);