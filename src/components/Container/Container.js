import React from "react";
import "./Container.css";

import { ContImg } from "../../utils/constants";
import { ContText } from "../../utils/constants";

const Container = () => {
    return (
        <div id="container">
            <span className="container_header">Наши продукты</span>
            <div className="container">
                <img src={ContImg.img} />
                <div className="block_text_1">
                    <span>{ContText.span1}</span>
                    <p>{ContText.p1}</p>
                </div>
                <div className="block_text_2">
                    <span>{ContText.span2}</span>
                    <p>{ContText.p2}</p>
                </div>
                <div className="block_text_3">
                    <span>{ContText.span3}</span>
                    <p>{ContText.p3}</p>
                </div>
            </div>
        </div>
    );
};

export default Container;