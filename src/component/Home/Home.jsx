import React, { Component, Fragment } from 'react';


class Home extends Component{
    render(){
        return(
            <Fragment>
            <div className='slider'>
                <div className='container slider image'>
                    <div className='row'>
                        <img className="img-fluid rounded slide" alt="Responsive Image" src={require('../../gambar/opm1.jpg')}/>
                    </div>
                </div>
                <div className="container notive">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="alert alert-danger danger" role="alert">
                                <p className="text-white text-center">A simple success Alert- check it out!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container slide">
                <div className="row">
                    <div className="col-md-8">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img className="img-fluid d-block w-100" src={require('../../gambar/opm1.jpg')} width="400px" height="250px"/>
                            </div>
                            <div className="carousel-item">
                            <img className="img-fluid d-block w-100" src={require('../../gambar/opm2.jpg')} width="400px" height="250px"/>
                            </div>
                            <div className="carousel-item">
                            <img className="img-fluid d-block w-100" src={require('../../gambar/opm3.jpg')} width="400px" height="250px"/>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4">
                        <img className="img-fluid rounded slide" alt= "responsive image" src={require('../../gambar/opm3.jpg')}/>
                    </div>
                </div>
            </div>
            </Fragment>
        );
    }
}

export default Home;