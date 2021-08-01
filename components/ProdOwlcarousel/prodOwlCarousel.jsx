import React from 'react'

function prodOwlCarousel() {
    return (
        <>
		<ScriptCarousel/>
            <div className="slider-img mid-sec">
					<div className="mid-slider">
						<div className="owl-carousel owl-theme row">
                            <div className="item">
								<div className="gd-box-info text-center">
									<div className="product-men women_two bot-gd">
										<div className="product-googles-info slide-img googles">
											<div className="men-pro-item">
												<div className="men-thumb-item">
													<img src="images/s5.jpg" className="img-fluid" alt=""/>
													<div className="men-cart-pro">
														<div className="inner-men-cart-pro">
															<a href="single.html" className="link-product-add-cart">Quick View</a>
														</div>
													</div>
													<span className="product-new-top">New</span>
												</div>
												<div className="item-info-product">
													<div className="info-product-price">
														<div className="grid_meta">
															<div className="product_price">
																<h4>
																	<a href="single.html">Fastrack Aviator </a>
																</h4>
																<div className="grid-price mt-2">
																	<span className="money ">$325.00</span>
																</div>
															</div>
															<ul className="stars">
																<li>
																	<a href="#">
																		<i className="fa fa-star" aria-hidden="true"></i>
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="fa fa-star" aria-hidden="true"></i>
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="fa fa-star" aria-hidden="true"></i>
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="fa fa-star-half-o" aria-hidden="true"></i>
																	</a>
																</li>
																<li>
																	<a href="#">
																		<i className="fa fa-star-o" aria-hidden="true"></i>
																	</a>
																</li>
															</ul>
														</div>
														<div className="googles single-item hvr-outline-out">																
																<button type="submit" className="googles-cart pgoogles-cart">
																	<i className="fas fa-cart-plus"></i>
																</button>
														</div>
													</div>

												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						
                        </div>
					</div>
				</div>
        
		<h3>This is Product  Owl carousel</h3>
		</>
    )
}

export default prodOwlCarousel
