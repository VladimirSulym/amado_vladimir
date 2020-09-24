import React from "react";
import testImagi1 from "../../img/product-img/product1.jpg";
import testImagi2 from "../../img/product-img/product2.jpg";
import testImagi3 from "../../img/core-img/cart.png";

function OneItem (props) {
    return (
        <div className="col-12 col-sm-6 col-md-12 col-xl-6">
            <div className="single-product-wrapper">
                <div className="product-img">
                    <img src={ testImagi1 } alt="" />
                        <img className="hover-img" src={ testImagi2 } alt="" />
                </div>
                <div className="product-description d-flex align-items-center justify-content-between">
                    <div className="product-meta-data">
                        <div className="line"></div>
                        <p className="product-price">$180</p>
                        <a href="product-details.html">
                            <h6>Modern Chair</h6>
                        </a>
                    </div>
                    <div className="ratings-cart text-right">
                        <div className="ratings">
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                        </div>
                        <div className="cart">
                            <a href="cart.html" data-toggle="tooltip" data-placement="left" title=""
                               data-original-title="Add to Cart"><img src={testImagi3} alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(OneItem);