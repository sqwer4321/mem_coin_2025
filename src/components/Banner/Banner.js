import React from "react";
import "./Banner.css";

import { ImgBanner } from "../../utils/constants";
import { DescBanner } from "../../utils/constants";
import { ButtBuy } from "../../utils/constants";

const Banner = () => {
    return (
        <div className="banner" id="banner">
            <div className="shadow"></div>
            <img src={ImgBanner.img} />
            <div className="block">
                <span>{DescBanner.title}<span style={{color: "#B254AA"}}>{DescBanner.dop}</span></span>
                <p>{DescBanner.text2}</p>
                <a href={ButtBuy.href}>
                    <div className="butt">{ButtBuy.name}</div>
                </a>
            </div>
        </div>
    );
};

export default Banner;