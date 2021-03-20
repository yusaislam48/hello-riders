import React from 'react';
import bikeImg from '../../images/Frame.png'
import busImg from '../../images//Frame-1.png'
import carImg from '../../images/Frame-2.png'
import trainImg from '../../images/Group.png'

const DestinationVehicle = (props) => {
    const {vehicle} = props;
    return (
        <div className="row d-flex justify-content-center align-items-center">
            <div className='col-md-3'><img src={vehicle==="CAR"? carImg : vehicle==="BIKE"? bikeImg : vehicle==="BUS"? busImg : vehicle==="TRAIN"? trainImg : bikeImg} alt=""/></div>
            <div className='col-md-3'><h5>{vehicle}</h5></div>
            <div className='col-md-3'><h4>4</h4></div>
            <div className='col-md-3'><h4>$67</h4></div>
        </div>
    );
};

export default DestinationVehicle;