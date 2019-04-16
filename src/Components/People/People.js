import React from 'react';
import './People.css';

const people = (props) => {
    return (
        <div className="people">
            <div className="col-md-3 col-lg-3 mb-3">
                    <div className="planet-card">
                       <div className="planet-card-inner">
                            <div className="planet-front">
                                <div className="card-body">
                                    <h4 className="card-title">{props.name}</h4>
                                    <p className="card-text">
                                        <span className="text-capitalize">{props.gender}
                                        </span>
                                    </p>
                                    <p className="card-text">{props.dob}</p>
                                </div>
                            </div>
                            <div className="planet-back">
                                <h2 className="text-center">{props.name}</h2> 
                                <p>Gender: {props.gender}</p> 
                                <p>Date of Birth: {props.dob}</p>
                                <p>Eye Color: {props.eye}</p>
                                <p>Hair Color: {props.hair}</p>
                                <p>Weight: {props.weight}</p>
                                <p>Skin Color: {props.skin}</p>
                                <p> Number of Rides: {props.ride}</p>
                                {/* <p>terrin: {props.terrain}</p> */}
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
};

export default people;