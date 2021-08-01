import React from 'react'
import Link from 'next/link'
import {addToCart} from '../../actions/actionTypes';
import { useSelector , useDispatch} from 'react-redux';

function Product(prod) {
    const prpdRecord = useSelector(state => state.prodReducer[prod.id])
    console.log(prpdRecord)
    const dispatch = useDispatch();
    return (
        <>
            <div className="col-md-3 product-men women_two mb-4">
                <div className="product-googles-info googles">
                    <div className="men-pro-item">
                        <div className="men-thumb-item">
                            <img src={prod.image} className="img-fluid" alt=""/>
                            <div className="men-cart-pro">
                                <div className="inner-men-cart-pro">
                                <Link href="/p/[id]" as={`/p/${prod.id}`}>
                                    <a href="single.html" className="link-product-add-cart">Quick View</a>
                                </Link>
                                </div>
                            </div>
                            <span className="product-new-top">{prod.arrival}</span>
                        </div>
                        <div className="item-info-product">
                            <div className="info-product-price">
                                <div className="grid_meta">
                                    <div className="product_price">
                                        <h4>
                                        <Link href="/p/[id]" as={`/p/${prod.id}`}>
                                            <a >{prod.name}</a>
                                            </Link>
                                        </h4>
                                        <div className="grid-price mt-2">
                                            <span className="money ">${prod.price}</span>
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
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-star-half-o" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="googles single-item hvr-outline-out">
                                        <button type="submit" className="googles-cart pgoogles-cart">
                                            <i className="fas fa-cart-plus" onClick = {
                                                        () => dispatch(addToCart(prpdRecord, 1))
                                                    }></i>
                                        </button>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product
