import React from 'react';

const StreeLamp = () => {
    return (
        <div>
            <section className="page-title-area">
                <div className="container">
                    <h2 className="title">Street Lamps &amp; Pole Fitting</h2>
                </div>
            </section>
            <section
                className="faq-section section-gap bg-cover  mb-5"
                style={{ backgroundImage: 'url("assets/img/LED-StreetLights.jpg")' }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-sm-12">
                            <div className="section-title with-right-border mb-50">
                                <span className="title-tag">NURHAM LTD</span>
                                <h2 className="title text-white">Street Lamps &amp; Pole Fitting</h2>
                                <h6 className="textColor">Illuminating Spaces, Enhancing Safety</h6>
                            </div>
                            <div>
                                <h2 className="text-white">We Provides:</h2>
                                <div className="faq-counter-boxes mt-md-gap-50 row mt-5">
                                    <div
                                        className="col-sm-6 wow fadeInUp"
                                        data-wow-delay="0.3s"
                                        style={{
                                            visibility: "visible",
                                            animationDelay: "0.3s",
                                            animationName: "fadeInUp"
                                        }}
                                    >
                                        <div
                                            className="counter-box-four counter-active "
                                            style={{
                                                padding: 20,
                                                borderRadius: 15,
                                                backgroundColor: "white"
                                            }}
                                        >
                                            <div>
                                                <h4>
                                                    Street Lamp <br /> Installation
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="col-sm-6 wow fadeInUp"
                                        data-wow-delay="0.4s"
                                        style={{
                                            visibility: "visible",
                                            animationDelay: "0.4s",
                                            animationName: "fadeInUp"
                                        }}
                                    >
                                        <div
                                            className="counter-box-four counter-active mt-30 mb-xs-gap-30"
                                            style={{
                                                padding: 20,
                                                borderRadius: 15,
                                                backgroundColor: "white"
                                            }}
                                        >
                                            <div>
                                                <h4>
                                                    Pole Manufacturing <br /> &amp; Fitting
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="col-sm-6 wow fadeInUp"
                                        data-wow-delay="0.5s"
                                        style={{
                                            visibility: "visible",
                                            animationDelay: "0.5s",
                                            animationName: "fadeInUp"
                                        }}
                                    >
                                        <div
                                            className="counter-box-four counter-active"
                                            style={{
                                                padding: 20,
                                                borderRadius: 15,
                                                backgroundColor: "white"
                                            }}
                                        >
                                            <div>
                                                <h4>
                                                    Energy-Efficient <br /> Solutions
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="col-sm-6 wow fadeInUp"
                                        data-wow-delay="0.6s"
                                        style={{
                                            visibility: "visible",
                                            animationDelay: "0.6s",
                                            animationName: "fadeInUp"
                                        }}
                                    >
                                        <div
                                            className="counter-box-four counter-active mt-30 mb-xs-gap-30"
                                            style={{
                                                padding: 20,
                                                borderRadius: 15,
                                                backgroundColor: "white"
                                            }}
                                        >
                                            <div>
                                                <h4>
                                                    Custom Design <br /> &amp; Layout
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="col-sm-6 wow fadeInUp"
                                        data-wow-delay="0.5s"
                                        style={{
                                            visibility: "visible",
                                            animationDelay: "0.5s",
                                            animationName: "fadeInUp"
                                        }}
                                    >
                                        <div
                                            className="counter-box-four counter-active"
                                            style={{
                                                padding: 20,
                                                borderRadius: 15,
                                                backgroundColor: "white"
                                            }}
                                        >
                                            <div>
                                                <h4>
                                                    Maintenance <br /> &amp; Upgrades
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h5 className="text-white mt-3">
                                    Enhance the safety and beauty of your public spaces with NURHAM
                                    Ltd’s Street Lamp and Pole Fitting services. Contact us today to
                                    discuss your project and discover how we can bring your vision to
                                    light.
                                </h5>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-6">
                            <h5 className="text-white mt-5">
                                At nurham ltd, we provide comprehensive street lamp and pole fitting
                                services that are essential for the safety, visibility, and aesthetic
                                appeal of public spaces. Our expertise ensures that your streets,
                                parks, and commercial areas are well-lit, secure, and efficiently
                                managed.
                            </h5>
                            <div
                                className="img-one wow fadeInRight mt-3"
                                data-wow-delay="0.3s"
                                style={{
                                    visibility: "visible",
                                    animationDelay: "0.3s",
                                    animationName: "fadeInRight"
                                }}
                            >
                                <img
                                    src="assets/img/service-img/pole2.png"
                                    alt="Image"
                                    style={{
                                        width: "50%",
                                        height: 300,
                                        border: "10px solid rgb(8, 163, 81)"
                                    }}
                                />
                            </div>
                            <div
                                className="img-one wow fadeInRight  d-flex justify-content-end"
                                data-wow-delay="0.3s"
                                style={{
                                    visibility: "visible",
                                    animationDelay: "0.3s",
                                    animationName: "fadeInRight"
                                }}
                            >
                                <img
                                    src="assets/img/service-img/pole3.png"
                                    alt="Image"
                                    style={{
                                        width: "50%",
                                        height: 300,
                                        border: "10px solid rgb(8, 163, 81)"
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default StreeLamp;