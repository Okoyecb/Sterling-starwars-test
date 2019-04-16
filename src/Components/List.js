import React from 'react';

const List = (props) => {
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4 col-lg-4">
                    <div className="row">
                        
                        <div className="col-md-8 col-lg-8">
                            <h5 className="fw-bold"> <strong><Link to="/">{props.name}</Link></strong></h5>
                            <p>Poland <br/> 
                                One of Europe fastest growing design and software consulting agencies.
                                 We're accepting new projects - drop us a lin...
                            </p>
                            <div>
                                <button className="btn m-5" title="Follow first1"><i className="fas fa-plus" ></i></button>
                                <button className="btn btn-success m-5" 
                                title="Send a message abut work opportunity">
                                    <i className="fas fa-envelope" title="Send a message about a work opportunity"></i>
                                </button>
                                <Link to="" className="dark-graytext text-none">
                                    <strong className="black-text">{props.follow} </strong>
                                    <strong> &nbsp;followers</strong> 
                                </Link>
                                <p>ux, ui, product design, mobile design, web design, graphic design,
                                     branding, ios design, interaction design</p>
                                
                                
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            props.planet
                        </div>
                    </div>
                        
                </div>
            </div>
        </div>
    );
    
}

export default List;