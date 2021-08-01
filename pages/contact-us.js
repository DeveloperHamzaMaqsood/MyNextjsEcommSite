import React from 'react'
import ProdBranding from '../components/singleProd/singleprodBanner';

function contact() {
    return (
        <>
            <ProdBranding title={"Contact Us"} />
            <section className="banner-bottom-wthreelayouts py-lg-5 py-3">
            <div className="container">
                <h3 className="tittle-w3layouts text-center my-lg-4 my-4">Contact</h3>
                <div className="inner_sec">
                    <p className="sub text-center mb-lg-5 mb-3">We love to discuss your idea</p>
                    <div className="address row">

                        <div className="col-lg-4 address-grid">
                            <div className="row address-info">
                                <div className="col-md-3 address-left text-center">
                                    <i className="far fa-map"></i>
                                </div>
                                <div className="col-md-9 address-right text-left">
                                    <h6>Address</h6>
                                    <p> California, USA

                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4 address-grid">
                            <div className="row address-info">
                                <div className="col-md-3 address-left text-center">
                                    <i className="far fa-envelope"></i>
                                </div>
                                <div className="col-md-9 address-right text-left">
                                    <h6>Email</h6>
                                    <p>Email :
                                        <a href="mailto:example@email.com"> mail@example.com</a>

                                    </p>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-4 address-grid">
                            <div className="row address-info">
                                <div className="col-md-3 address-left text-center">
                                    <i className="fas fa-mobile-alt"></i>
                                </div>
                                <div className="col-md-9 address-right text-left">
                                    <h6>Phone</h6>
                                    <p>+1 234 567 8901</p>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="contact_grid_right">
                        <form action="#" method="post">
                            <div className="row contact_left_grid">
                                <div className="col-md-6 con-left">
                                    <div className="form-group">
                                        <label className="my-2">Name</label>
                                        <input className="form-control" type="text" name="Name" placeholder="" required=""/>
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input className="form-control" type="email" name="Email" placeholder="" required=""/>
                                    </div>
                                    <div className="form-group">
                                        <label className="my-2">Subject</label>
                                        <input className="form-control" type="text" name="Subject" placeholder="" required=""/>
                                    </div>
                                </div>
                                <div className="col-md-6 con-right">
                                    <div className="form-group">
                                        <label>Message</label>
                                        <textarea id="textarea" placeholder="" required=""></textarea>
                                    </div>
                                    <input className="form-control" type="submit" value="Submit"/>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <div className="contact-map">

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100949.24429313939!2d-122.44206553967531!3d37.75102885910819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan+Francisco%2C+CA%2C+USA!5e0!3m2!1sen!2sin!4v1472190196783"
                className="map" style={{margin : "0px"}} allowfullscreen=""></iframe>
        </div>
        </>
    )
}

export default contact;
