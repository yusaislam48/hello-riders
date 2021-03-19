import React from 'react';
import './RequestRide.css';
import bikeImg from '../../images/Frame.png'
import GoogleMap from '../GoogleMap/GoogleMap';

const RequestRide = (props) => {
    console.log(props);
    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-md-4 ride-details p-4">
                    <div className='from-to'>
                        <h4>● From</h4>
                        <h4>● To</h4>
                    </div>
                    <div className="fees p-3 m-2">
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className='col-md-3'><img src={bikeImg} alt=""/></div>
                            <div className='col-md-3'><h5>BIKE</h5></div>
                            <div className='col-md-3'><h4>4</h4></div>
                            <div className='col-md-3'><h4>$67</h4></div>
                        </div>
                    </div>
                    <div className="fees p-3 m-2">
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className='col-md-3'><img src={bikeImg} alt=""/></div>
                            <div className='col-md-3'><h5>BIKE</h5></div>
                            <div className='col-md-3'><h4>4</h4></div>
                            <div className='col-md-3'><h4>$67</h4></div>
                        </div>
                    </div>
                    <div className="fees p-3 m-2">
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className='col-md-3'><img src={bikeImg} alt=""/></div>
                            <div className='col-md-3'><h5>BIKE</h5></div>
                            <div className='col-md-3'><h4>4</h4></div>
                            <div className='col-md-3'><h4>$67</h4></div>
                        </div>
                    </div>
                </div>
                <div style={{height:"70vh"}} className="col-md-8">
                    <GoogleMap></GoogleMap>
                </div>
            </div>
        </div>
    );
};

export default RequestRide;