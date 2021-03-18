import React, { useEffect, useState } from 'react';
import Vehicles from '../Vehicles/Vehicles';
import data from '../VehicleData/VehicleData.json';
import './Home.css';

const Home = () => {
    const [vehicleData, setVehicleData] = useState([]);
    useEffect(()=>{
      setVehicleData(data);
    }, []);

    return (
        <div className='home-sec'>
        {
            vehicleData.map(vh => <Vehicles key={vh.id} vh={vh}></Vehicles>)
        }
        </div>
    );
};

export default Home;