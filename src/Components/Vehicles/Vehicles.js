import React from 'react';
import { useHistory } from 'react-router';
import './Vehicles.css';

const Vehicles = (props) => {
    const {name, image} = props.vh;
    const history = useHistory();
    const handleVehicleClick = (name) =>{
        history.push(`/transportation/${name}`);
    };
    return (
        <div onClick={()=>handleVehicleClick(name)} className=' col-md-3 d-flex justify-content-center align-items-center'>
            <div className='vehicle'>
                <img src={image} alt=""/>
                <h3>{name}</h3>
            </div>
        </div>
    );
};

export default Vehicles;