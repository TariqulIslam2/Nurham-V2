import React from 'react';

const Roadmarking = () => {
    return (
        <div>
            <section className="page-title-area">
                <div className="container">
                    <h2 className="title">ROAD MARKING SERVICES</h2>
                </div>
            </section>
            <section className="service-details-section section-gap">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-6 col-md-10">
                            <div className="services-details-imgs mb-md-gap-50">
                                <div className="img-one">
                                    <img
                                        src="assets/img/service-img/linemarkServicePic1.png"
                                        alt="img"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-10">
                            <div>
                                <h2 className="textColor">Mark Your Roads with Confidence</h2>
                                <p>
                                    Choose NURHAM Ltd for all your <br /> road marking needs and ensure
                                    that your roads are safe, compliant, <br /> and clearly marked.
                                    Contact us today to learn more <br /> about our services and how we
                                    can support your project.
                                </p>
                                <div>
                                    <span className="bgColor text-white py-3 px-4 mt-5">
                                        <p className="font-weight-bold">Make A Call</p>
                                        <span> <a className='text-light' href="tel:+8801877363621"> +88 01877-363621</a></span>
                                        <i className="fal fa-phone px-3" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container mb-5">
                <h3 className="text-left bgColor  text-white text-center">
                    <span className="bgColor py-4">
                        {" "}
                        COMPLETED ROAD MARKING PROJECTS
                    </span>
                </h3>
                <hr />
                <div>
                    <div className="row justify-content-center align-content-center ">
                        <div className="col-lg-4 col-md-6 mb-4  ">
                            <div
                                className="img-one wow fadeInRight service-item-eight"
                                data-wow-delay="0.3s"
                                style={{
                                    visibility: "visible",
                                    animationDelay: "0.3s",
                                    animationName: "fadeInRight"
                                }}
                            >
                                <img
                                    src="assets/img/road-marking/sasac-1.jpg"
                                    alt="Image"
                                    style={{
                                        height: "300px",
                                        width: "370px",
                                        objectFit: "cover"
                                    }}
                                />
                                <div className="services-overlay-coustom">

                                    <h4 className="title">
                                        <div className='text-light text-center' >SASEC</div>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4  ">
                            <div
                                className="img-one wow fadeInRight service-item-eight"
                                data-wow-delay="0.3s"
                                style={{
                                    visibility: "visible",
                                    animationDelay: "0.3s",
                                    animationName: "fadeInRight"
                                }}
                            >
                                <img
                                    src="assets/img/road-marking/sasec-2.jpg"
                                    alt="Image"
                                    style={{
                                        height: "300px",
                                        width: "370px",
                                        objectFit: "cover"
                                    }}
                                />
                                <div className="services-overlay-coustom">

                                    <h4 className="title">
                                        <div className='text-light text-center' >SASEC</div>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4  ">
                            <div
                                className="img-one wow fadeInRight service-item-eight"
                                data-wow-delay="0.3s"
                                style={{
                                    visibility: "visible",
                                    animationDelay: "0.3s",
                                    animationName: "fadeInRight"
                                }}
                            >
                                <img
                                    src="assets/img/road-marking/kt-1.jpg"
                                    alt="Image"
                                    style={{
                                        height: "300px",
                                        width: "370px",
                                        objectFit: "cover"
                                    }}
                                />
                                <div className="services-overlay-coustom">

                                    <h4 className="title">
                                        <div className='text-light text-center' >Karnaphuli Tunnel</div>
                                    </h4>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

        </div>
    );
};

export default Roadmarking;