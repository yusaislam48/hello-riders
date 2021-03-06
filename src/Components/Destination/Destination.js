import React, { useState } from 'react';
import GoogleMap from '../GoogleMap/GoogleMap';
import './Destination.css';
import { useParams } from 'react-router';
import DestinationVehicle from '../DestinationVehicle/DestinationVehicle';


const Destination = () => {
    const {vehicle} =useParams();
    const [destinations, setDestinations] = useState({});
    const [searchBtnClicked, setSearchBtnClicked] = useState(false);
    let setDestination = {from: '', to: ''};

    const handleBlur = (event) =>{
        if(event.target.name === 'from'){
            setDestination.from = event.target.value;
        }
        if(event.target.name === 'to'){
            setDestination.to = event.target.value;
        }
    };
    const handleSubmit = () =>{
        setSearchBtnClicked(true);
        setDestinations(setDestination);
        console.log(searchBtnClicked);
    };
    return (
        <div className='container mt-5'>
            <div className='row'>
                {
                    searchBtnClicked
                    ?<div className="col-md-4 ride-details p-4">
                        <div className='from-to'>
                            <h4>● {destinations?.from}</h4>
                            <h4>● {destinations?.to}</h4>
                        </div>
                        <div className="fees p-3 m-2">
                            <DestinationVehicle vehicle={vehicle}></DestinationVehicle>
                        </div>
                        <div className="fees p-3 m-2">
                            <DestinationVehicle vehicle={vehicle}></DestinationVehicle>
                        </div>
                        <div className="fees p-3 m-2">
                            <DestinationVehicle vehicle={vehicle}></DestinationVehicle>
                        </div>
                    </div>
                    :<div className="col-md-4 destination-form  p-4">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Pick From</label>
                            <input required name="from" onBlur={handleBlur} type="text" className="form-control"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Pick To</label>
                            <input required name="to" onBlur={handleBlur} type="text" className="form-control"/>
                        </div> 

                        
                        <div className="form-group row">
                            <label for="example-date-input" className="col-2 col-form-label">Date</label>
                            <div className="col-10">
                            <input className="form-control" type="date" value="2021-03-20" id="example-date-input"/>
                            </div>
                        </div>

                        <button onClick={handleSubmit}  type="button" class="btn btn-danger">Search</button>
                    </form>
                </div>
                }
                
                <div style={{height:"70vh"}} className="col-md-8">
                    <GoogleMap></GoogleMap>
                </div>
            </div>
        </div>
    );
};

export default Destination;