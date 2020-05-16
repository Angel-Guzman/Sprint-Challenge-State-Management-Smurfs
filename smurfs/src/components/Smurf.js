import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchSmurf } from '../store/actions';

const Smurf = ({ isFetching, fetchSmurf, Smurfs }) => {

    useEffect(() => {
        fetchSmurf();
    }, [fetchSmurf]);

    

    return (
        <div>
            {isFetching && <h2>Fetching Smurf..</h2>}
            {!isFetching && Smurfs && (
                <div>
                    <h2>Name: {Smurfs[0].name}</h2>
                    <h2>Age: {Smurfs[0].age}</h2>
                    <h2>Height: {Smurfs[0].height}</h2>
                </div>
            )}
        </div>
    )
}

const mapStateToProps = state => {
    // console.log(state);
    return {
        isFetching: state.isFetching,
        Smurfs: [
            {
                name: state.Smurfs[0].name,
                age: state.Smurfs[0].age,
                height: state.Smurfs[0].height,
            }
        ]
    }
}

export default connect(
    mapStateToProps,
    { fetchSmurf }
)(Smurf);