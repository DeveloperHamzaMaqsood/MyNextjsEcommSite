import React from 'react'

function singleprodBanner({title}) {
    return (
        <>
            <div className="banner_inner">
                <div className="services-breadcrumb">
                    <div className="inner_breadcrumb">
                        <ul className="short">
                            <li>
                                <a href="index.html">Home</a>
                                <i>|</i>
                            </li>
                            <li>{title}</li>
                        </ul>
                    </div>
                </div>
            </div>

            
        </>
    )
}

export default singleprodBanner
