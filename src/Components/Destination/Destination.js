import React from 'react';
import GoogleMap from '../GoogleMap/GoogleMap';
import './Destination.css';

const Destination = () => {
    const handleBlur = () =>{
        // console.log(event.target.name, event.target.value);
    }
    return (
        <div className='container mt-5'>
            <div  className='row'>
                <div className="col-md-4 destination-form  p-4">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">From</label>
                            <input name="from" onBlur={handleBlur} type="text" className="form-control"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">To</label>
                            <input name="to" onBlur={handleBlur} type="text" className="form-control"/>
                        </div> 
                        <button onClick={()=>console.log('search')}  type="button" class="btn btn-danger">Sign In</button>
                    </form>
                </div>
                <div style={{height:"70vh"}} className="col-md-8">
                    <GoogleMap></GoogleMap>
                </div>
            </div>
        </div>
    );
};

export default Destination;