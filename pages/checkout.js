import React from 'react'
import SingleProdBanner from '../components/singleProd/singleprodBanner';
import {useSelector , useDispatch} from 'react-redux';
import Link from 'next/link'
import {
    UpdateCart,
    DeleteCartItem
} from '../actions/actionTypes';

function checkout() {
    const CartItems = useSelector(state => state.cart);
    const dispatch = useDispatch();
    let tot = 0;
    return (
        <>
            <SingleProdBanner title={"Checkout Page"} />
            <section className="banner-bottom-wthreelayouts py-lg-5 py-3">
		<div className="container">
			<div className="inner-sec-shop px-lg-4 px-3">
				<h3 className="tittle-w3layouts my-lg-4 mt-3">Checkout </h3>
				<div className="checkout-right">
					<h4>Your shopping cart contains:
						<span>{CartItems.length} Products</span>
					</h4>
					<table className="timetable_sub">
						<thead>
							<tr>
								<th>SL No.</th>
								<th>Product</th>
								<th>Quantity</th>
								<th>Product Name</th>
								<th>Price</th>
								<th>Remove</th>
							</tr>
						</thead>
						<tbody>
                        {
                            CartItems.map((prod , ind) =>{
                                tot = tot + prod.finalPrice;
                                return (
                                    <tr className="rem1">
								<td className="invert">{ind}</td>
								<td className="invert-image">
                                <Link href="/p/[id]" as={`/p/${prod.id}`}>
                                    <a href="single.html">
										<img src={`../${prod.image}`} alt=" " className="img-responsive"/>
									</a>
                                </Link>
								</td>
								<td className="invert">
									<div className="quantity">
										<input type="number" value={prod.qty} onChange={(e) => dispatch(UpdateCart(prod,e.target.value ))} />
									</div>
								</td>
								<td className="invert">{prod.name} </td>

								<td className="invert">${prod.finalPrice}</td>
								<td className="invert">
									<div className="rem">
										<div className="close1" onClick={() => dispatch(DeleteCartItem(prod.id))}>  </div>
									</div>

								</td>
							</tr>
                                )
                            })
                        }
						</tbody>
					</table>
				</div>
				<div className="checkout-left row">
					<div className="col-md-4 checkout-left-basket">
						<h4>Continue to basket</h4>
						<ul>
							<li>Total
								<i>-</i>
								<span>${tot > 0 ? tot : 0}</span>
							</li>
						</ul>
					</div>
					<div className="col-md-8 address_form">
						<h4>Add a new Details</h4>
						<form action="payment.html" method="post" className="creditly-card-form agileinfo_form">
							<section className="creditly-wrapper wrapper">
								<div className="information-wrapper">
									<div className="first-row form-group">
										<div className="controls">
											<label className="control-label">Full name: </label>
											<input className="billing-address-name form-control" type="text" name="name" placeholder="Full name"/>
										</div>
										<div className="card_number_grids">
											<div className="card_number_grid_left">
												<div className="controls">
													<label className="control-label">Mobile number:</label>
													<input className="form-control" type="text" placeholder="Mobile number"/>
												</div>
											</div>
											<div className="card_number_grid_right">
												<div className="controls">
													<label className="control-label">Landmark: </label>
													<input className="form-control" type="text" placeholder="Landmark"/>
												</div>
											</div>
											<div className="clear"> </div>
										</div>
										<div className="controls">
											<label className="control-label">Town/City: </label>
											<input className="form-control" type="text" placeholder="Town/City"/>
										</div>
										<div className="controls">
											<label className="control-label">Address type: </label>
											<select className="form-control option-w3ls">
												<option>Office</option>
												<option>Home</option>
												<option>Commercial</option>

											</select>
										</div>
									</div>
									<button className="submit check_out">Delivery to this Address</button>
								</div>
							</section>
						</form>
						<div className="checkout-right-basket">
							<a href="payment.html">Make a Payment </a>
						</div>
					</div>

					<div className="clearfix"> </div>

				</div>

			</div>

		</div>
	</section>
        </>
    )
}

export default checkout
