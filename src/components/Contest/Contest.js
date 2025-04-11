import React from "react";
import "./Contest.css";

import { ContText, СontestImg } from "../../utils/constants";
import { СontestText } from "../../utils/constants";

const Contest = () => {
    return (
        <div className="contest" id="contest">
            <div className="block">
                <img src={СontestImg.img}/>
                <div className="text">
                    <span>{СontestText.span1}</span><br/>
                    <p style={{color: "#fff"}}>{СontestText.span2}</p><br/>
                    <div className="block_text">
                        <p style={{fontSize: "22px", fontWeight: "900"}}>УСЛОВИЯ:</p>
                        <p className="margin">{СontestText.terms}<a href={СontestText.href}>ссылку на наш канал.</a></p>
                    </div>
                    <div className="block_text">
                        <p style={{fontSize: "22px", fontWeight: "900"}}>ЧТО ПОЛУЧИШЬ?:</p>
                        <p className="margin">{СontestText.result1}</p>
                        <p className="margin">{СontestText.result2}</p>
                        <p className="margin">{СontestText.result3}</p>
                        <p className="margin">{СontestText.result4} <a href={СontestText.href}>Перейти</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contest;