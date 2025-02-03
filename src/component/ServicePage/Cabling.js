import React from 'react';

const Cabling = () => {
    return (
        <div>
            <section className="page-title-area">
                <div className="container">
                    <h2 className="title">Underground Cabling Solutions</h2>
                </div>
            </section>
            <section className="whu-section section-gap soft-blue-bg mt-50">
                <div className="container">
                    <div className="row justify-content-center align-content-center">
                        <div className="col-lg-6 col-md-10 order-lg-2">
                            <div className="tile-gallery-two mb-md-gap-50">
                                <div
                                    className="img-one wow fadeInRight"
                                    data-wow-delay="0.3s"
                                    style={{
                                        visibility: "visible",
                                        animationDelay: "0.3s",
                                        animationName: "fadeInRight"
                                    }}
                                >
                                    <img
                                        className="w-100"
                                        src="assets/img/service-img/cableing.jpg"
                                        alt="Image"
                                        style={{
                                            objectFit: "cover",
                                            width: "100%",
                                            height: 600,
                                            borderRadius: 10
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="tile-gallery-two mb-md-gap-50 mt-5">
                                <div
                                    className="img-one wow fadeInRight"
                                    data-wow-delay="0.3s"
                                    style={{
                                        visibility: "visible",
                                        animationDelay: "0.3s",
                                        animationName: "fadeInRight"
                                    }}
                                >
                                    <img
                                        className="w-100"
                                        src="assets/img/service-img/cableing1.png"
                                        alt="Image"
                                        style={{
                                            objectFit: "cover",
                                            width: "100%",
                                            height: "100%",
                                            borderRadius: 10
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-6 col-md-10 order-lg-1 bgColor py-4 px-5 text-white"
                            style={{ borderRadius: 8 }}
                        >
                            <div
                                className="section-title mb-50 wow fadeInUp"
                                data-wow-delay="0.3s"
                                style={{
                                    visibility: "visible",
                                    animationDelay: "0.3s",
                                    animationName: "fadeInUp"
                                }}
                            >
                                <span className="title-tag text-dark">NURHAM LTD</span>
                                <h2 className="title text-white">Underground Cabling Solutions</h2>
                                <h4 className="text-black">Secure, Reliable, and Efficient</h4>
                            </div>
                            <ul>
                                <li
                                    className="wow fadeInUp mb-4"
                                    data-wow-delay="0.5s"
                                    style={{
                                        visibility: "visible",
                                        animationDelay: "0.5s",
                                        animationName: "fadeInUp"
                                    }}
                                >
                                    <p>
                                        At NURHAM Ltd, we specialize in providing high-quality underground
                                        cabling solutions designed to meet the needs of various
                                        industries. Whether it’s for power distribution,
                                        telecommunications, or data networks, our underground cabling
                                        services ensure that your infrastructure is protected and
                                        efficient.
                                    </p>
                                </li>
                                <h4 className="text-white">
                                    Why Choose Our Underground <br /> Cabling Services?
                                </h4>
                                <li
                                    className="wow fadeInUp mt-2 bg-white mb-4"
                                    data-wow-delay="0.5s"
                                    style={{
                                        borderRadius: 10,
                                        padding: "5px 10px",
                                        visibility: "visible",
                                        animationDelay: "0.5s",
                                        animationName: "fadeInUp"
                                    }}
                                >
                                    <ul
                                        className=" textColor"
                                        style={{
                                            listStyleType: "disc",
                                            marginLeft: 22,
                                            fontWeight: "bold"
                                        }}
                                    >
                                        <li className="fs-6  mb-1 ">Expert Installation</li>
                                        <li className="fs-6  mb-1">Durable and Safe</li>
                                        <li className="fs-6  mb-1">Customized Solutions</li>
                                        <li className="fs-6  mb-1">Efficient Execution</li>
                                    </ul>
                                </li>
                                <h4 className="text-white">
                                    Applications Underground <br /> Cabling Services:
                                </h4>
                                <li
                                    className="wow fadeInUp bg-white mt-2 mb-4"
                                    data-wow-delay="0.5s"
                                    style={{
                                        borderRadius: 10,
                                        padding: "5px 10px",
                                        visibility: "visible",
                                        animationDelay: "0.5s",
                                        animationName: "fadeInUp"
                                    }}
                                >
                                    <ul
                                        className="textColor "
                                        style={{
                                            listStyleType: "disc",
                                            marginLeft: 22,
                                            fontWeight: "bold"
                                        }}
                                    >
                                        <li className="fs-6  mb-1">Power Distribution</li>
                                        <li className="fs-6  mb-1">Telecommunications</li>
                                        <li className="fs-6  mb-1">Data Networks</li>
                                    </ul>
                                </li>
                                <h4 className="text-white">Benefits of Underground Cabling:</h4>
                                <li
                                    className="wow bg-white fadeInUp mt-2"
                                    data-wow-delay="0.5s"
                                    style={{
                                        borderRadius: 10,
                                        padding: "5px 10px",
                                        visibility: "visible",
                                        animationDelay: "0.5s",
                                        animationName: "fadeInUp"
                                    }}
                                >
                                    <ul
                                        className="textColor "
                                        style={{
                                            listStyleType: "disc",
                                            marginLeft: 22,
                                            fontWeight: "bold"
                                        }}
                                    >
                                        <li className="fs-6  mb-1">Protection from External Damage</li>
                                        <li className="fs-6  mb-1">Aesthetically Pleasing</li>
                                        <li className="fs-6  mb-1">Reduced Maintenance</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Cabling;