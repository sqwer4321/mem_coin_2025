import React, { useRef, useEffect, useState } from "react";
import "./News.css";

import { NewsSvg } from "../../utils/constants";
import { NewsText } from "../../utils/constants";

const News = () => {
    return (
        <div className="news" id="news">
            <span>Что нового у банка?</span>
            <div className="block">
                <img src={NewsSvg.poster}/>
                <div className="block_text">
                    <span><span style={{color: "#B254AA"}}>NEW </span>{NewsText.span}<span style={{color: "#B254AA"}}>!</span></span>
                    <p>{NewsText.p}</p>
                </div>
            </div>
        </div>
    );
};

export default News;