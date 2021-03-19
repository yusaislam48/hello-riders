import React from 'react';
import './Destination.css';

const Destination = () => {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className="col-md-4 destination-form  p-4">
                    {/* <form> */}
                        <div className="mb-3">
                            <label className="form-label">From</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">To</label>
                            <input type="text" className="form-control"/>
                        </div> 
                        <button onClick={()=>console.log('search')}  type="button" class="btn btn-danger">Sign In</button>
                    {/* </form> */}
                </div>

                <div className="col-md-8">
                {/* <iframe
                    width="600"
                    height="450"
                    style="border:0"
                    loading="lazy"
                    allowfullscreen
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD8zm5uiwVSn8EVFZzyW68PvNcqZzsuprY
                        &q=Space+Needle,Seattle+WA">
                </iframe> */}
                <h1>map</h1>
                </div>
            </div>
        </div>
    );
};

export default Destination;