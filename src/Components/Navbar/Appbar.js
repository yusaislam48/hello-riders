import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Appbar.css';
import logo from '../../images/logo.png'

const Appbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="container">
            <div className="row p-1">
                <div className="col-md-4">
                <img src={logo} alt=""/>
                </div>
                <div className="col-md-8 d-flex justify-content-end align-items-center link">
                    <Link to="/home"><h5>Home</h5></Link>
                    <Link to="/destination"><h5>Destination</h5></Link>
                    <Link to="/"><h5>Blog</h5></Link>
                    
                    {
                        loggedInUser.name 
                        ? <h4 className="loggedInUserName">{loggedInUser.name}</h4>
                        : <Link to="/login">
                            <button  type="button" class="btn btn-danger">Login</button>
                        </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Appbar;