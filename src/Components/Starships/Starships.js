import React from 'react';

const starships = (props) => {
    return (
        <div className="Starship">
            <div className="col-md-3 col-lg-3 mb-3">
                <div className="planet-card">
                    <div className="planet-card-inner">
                        <div className="planet-front">
                            <div className="card-body">
                                <h4 className="card-title">{props.name}</h4>
                                <p className="card-text">
                                    <span className="text-capitalize">{props.model}
                                    </span>
                                </p>
                                <p className="card-text">{props.capacity}</p>
                            </div>
                        </div>

                        <div className="planet-back">
                            <h2 className="text-center">{props.name}</h2>
                            <p>Model: {props.model}</p>
                            {/* <p>MGLT: {props.mglt} /hr  </p> */}
                            <p>Capacity: {props.capacity}</p> 
                            <p>Price: {props.price} credits</p>
                            <p>Manufacturer: {props.maker}</p>
                            <p>Passengers: {props.passengers}</p>
                            <p>drive rating: {props.rating}</p>
                            <p>Class: {props.class}</p>
                            <p>Consumables: {props.consume}</p>
                            <p>Crew: {props.crew}</p>
                            <p>Atmosphering Speed: {props.speed}</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default starships;