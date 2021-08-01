import React from 'react'
import Branding from '../clothsBranding/clothsBranding';
import ProdSingle from './Product';
import Testinomial from '../testinomial_products/Testinomial';
import CustPromises from '../custPromises/CustPromises';
import {useSelector} from 'react-redux';

function prodContainer() {
    const prodDetails = useSelector(state => state.prodReducer);
    return (
        <>
            <section className="banner-bottom-wthreelayouts py-lg-5 py-3">
                <div className="container-fluid">
                    <div className="inner-sec-shop px-lg-4 px-3">
                        <h3 className="tittle-w3layouts my-lg-4 my-4">New Arrivals for you </h3>
                        <div className="row">
                        {
                            Object.values(prodDetails).map((prod) => {
                                return (
                                    <ProdSingle {...prod} />
                                )
                            })
                        }
                        </div>
                    </div>
                    <Branding/>
                    <Testinomial/>
                    <CustPromises/>
                </div>
            </section>
        </>
    )
}

export default prodContainer
