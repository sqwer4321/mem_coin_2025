import React from "react";
import "./Text.css";

import { PoolText } from "../../utils/constants";

const Text = () => {
    return (
        <div className="text_body" id="text">
            <p className="animate_text">{PoolText.p}</p>
        </div>
    );
};

export default Text;