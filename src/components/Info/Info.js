import React from "react";
import "./Info.css";

import { InfoCont } from "../../utils/constants";

const Info = () => {
    return (
        <div className="info" id="info">
            <div className="block">
                <span>{InfoCont.span1}</span>
                <p>{InfoCont.p1}</p>
            </div>
            <div className="block">
                <span>{InfoCont.span2}</span>
                <p>{InfoCont.p2}</p>
            </div>
            <div className="block">
                <span>{InfoCont.span3}</span>
                <p>{InfoCont.p3}</p>
            </div>
            <div className="block">
                <span>{InfoCont.span4}</span>
                <p>{InfoCont.p4}</p>
            </div>
            <div className="block">
                <span>{InfoCont.span5}</span>
                <p>{InfoCont.p5}</p>
            </div>
        </div>
    );
};

export default Info;