import React, { useEffect } from "react";
import "./Header.css";

import { ICON } from "../../utils/constants";
import { NAME } from "../../utils/constants";
import { Links } from "../../utils/constants";
import { ButtBlum } from "../../utils/constants";
import { ButtTonTradingBot } from "../../utils/constants";

const Header = () => {
    const handleScroll = (id) => {
        setTimeout(() => { 
            const section = document.getElementById(id);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    };

    return (
        <div className="header">
            <div className="block">
                <img src={NAME.text}/>
            </div>
            <div className="block">
                <a onClick={() => handleScroll(Links.id1)}><div className="link">{Links.name1}</div></a>
                <a onClick={() => handleScroll(Links.id2)}><div className="link">{Links.name2}</div></a>
                <a onClick={() => handleScroll(Links.id3)}><div className="link">{Links.name3}</div></a>

                <a href={ButtBlum.url}>
                    <div className="butt" style={{backgroundColor: ButtBlum.background}}>{ButtBlum.name}</div>
                </a>
                <a href={ButtTonTradingBot.url}>
                    <div className="butt" style={{backgroundColor: ButtTonTradingBot.background}}>{ButtTonTradingBot.name}</div>
                </a>
            </div>
        </div>
    );
};

export default Header;
