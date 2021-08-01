import React from 'react'
import SingleProdBanner from '../../components/singleProd/singleprodBanner';
import { useSelector , useDispatch} from 'react-redux';
import {addToCart} from '../../actions/actionTypes';

    export async function getServerSideProps({
        query
    }) {
        const {
            id
        } = query;
        return {
            props: {
                id: id
            }
        }
    }

function SingleProd({id}) {
    const prodGot = useSelector(state => state.prodReducer[id]);
    const dispatch = useDispatch();
    return (
        <>
            <SingleProdBanner title={prodGot.name} />
            <section className="banner-bottom-wthreelayouts py-lg-5 py-3">
			<div className="container">
				<div className="inner-sec-shop pt-lg-4 pt-3">
					<div className="row">
                        <div className="col-lg-4 single-right-left ">
                                <div className="grid images_3_of_2">
                                    <div className="flexslider1">
                                        <ul className="slides" style={{listStyle:"none"}}>
                                            <li data-thumb="../images/d2.jpg">
                                                <div className="thumb-image"> <img src={`../${prodGot.image}`} data-imagezoom="true" className="img-fluid" alt=" "/> </div>
                                            </li>
                                        </ul>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-8 single-right-left simpleCart_shelfItem">
                                <h3>{prodGot.name}</h3>
                                <p><span className="item_price">$12</span>
                                    <del>${prodGot.price}</del>
                                </p>
                                <div className="rating1">
                                    <ul className="stars">
                                        <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-star-half-o" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                                <div className="description">
                                    <h5>Check delivery, payment options and charges at your location</h5>
                                </div>
                                <div className="occasional">
                                    <h5>Types :</h5>
                                    <div className="colr ert">
                                        <label className="radio"><input type="radio" name="radio" checked=""/><i></i> Irayz Butterfly(Black)</label>
                                    </div>
                                    <div className="colr">
                                        <label className="radio"><input type="radio" name="radio"/><i></i> Irayz Butterfly (Grey)</label>
                                    </div>
                                    <div className="colr">
                                        <label className="radio"><input type="radio" name="radio"/><i></i> Irayz Butterfly (white)</label>
                                    </div>
                                    <div className="clearfix"> </div>
                                </div>
                                <div className="occasion-cart">
                                        <div className="googles single-item singlepage">
                                                    <button button onClick = {
                                                        () => dispatch(addToCart(prodGot,1))
                                                    }
                                                    className = "googles-cart pgoogles-cart" >
                                                        Add to Cart
                                                    </button>
                                        </div>
                                </div>
                                <ul className="footer-social text-left mt-lg-4 mt-3">
                                        <li>Share On : </li>
                                        <li className="mx-2">
                                            <a href="#">
                                                <span className="fab fa-facebook-f"></span>
                                            </a>
                                        </li>
                                        <li className="mx-2">
                                            <a href="#">
                                                <span className="fab fa-twitter"></span>
                                            </a>
                                        </li>
                                        <li className="mx-2">
                                            <a href="#">
                                                <span className="fab fa-google-plus-g"></span>
                                            </a>
                                        </li>
                                        <li className="mx-2">
                                            <a href="#">
                                                <span className="fab fa-linkedin-in"></span>
                                            </a>
                                        </li>
                                        <li className="mx-2">
                                            <a href="#">
                                                <span className="fas fa-rss"></span>
                                            </a>
                                        </li>
                                        
                                    </ul>
                            </div>
                            <div className="clearfix"></div>
					</div>
				</div>
			</div>
		</section>
        </>
    )
}

export default SingleProd;