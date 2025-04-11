import React, { useRef, useEffect, useState } from "react";
import "./Telegram.css";

import { TelegramText } from "../../utils/constants";

const Telegram = () => {
    return (
        <div className="telegram" id="telegram">
            <div className="block">
                <img src={TelegramText.img}/>
                <div className="text">
                    <span>{TelegramText.span}</span>
                    <p></p>
                    <a href={TelegramText.href}>
                        <div className="butt">{TelegramText.butt}</div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Telegram;