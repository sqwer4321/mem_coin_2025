import React, { useRef, useEffect, useState } from "react";
import "./Cart.css";

import { CartImg } from "../../utils/constants";
import { CartText } from "../../utils/constants";

const Cart = () => {

    return (
        <div className="cart" id="cart">
            <div className="block">
                <img
                    src={CartImg.img}
                />
                <div className="text">
                    <span>{CartText.span}</span>
                    <p>{CartText.p}</p>
                    <a href={CartText.href}>
                        <div className="butt">{CartText.butt}</div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Cart;