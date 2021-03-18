import React from 'react';

const Vehicles = (props) => {
    const {name, id, image} = props.vh;
    return (
        <div>
            <h2>{name}</h2>
        </div>
    );
};

export default Vehicles;