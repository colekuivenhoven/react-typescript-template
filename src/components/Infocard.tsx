import "../assets/styles/Infocard.css";
import { ThemeContext } from "../App";

// Libraries Import
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import React, { useEffect, useRef, useState, useLayoutEffect, useContext } from "react";

// Contexts Import
import themes from "../contexts/ThemeContext";

function Infocard(props:any) {
    const theme = useContext(ThemeContext);

    // Prop declarations
    const screenSize = props.screenSize;
    const isMobile = props.isMobile;
    const vp = props.vp;
    const title = props.title;
    const description = props.description;
    const width = props.width;
    const textfirst = props.textfirst;

    return (
        <>
            {textfirst && <div className="infocard-root"
                style={{
                    backgroundColor: themes[`${theme}`].background_secondary,
                    color: themes[`${theme}`].text_primary,
                    width: width
                }}
            >
                <div className="infocard-content">
                    <div className="infocard-title">{title}</div>
                    <div className="infocard-description">{description}</div>
                </div>
                <div className="infocard-image" />
            </div>}
            {!textfirst && <div className="infocard-root"
                style={{
                    backgroundColor: themes[`${theme}`].background_secondary,
                    color: themes[`${theme}`].text_primary,
                    width: width
                }}
            >
                <div className="infocard-image" />
                <div className="infocard-content">
                    <div className="infocard-title">{title}</div>
                    <div className="infocard-description">{description}</div>
                </div>
            </div>}
        </>
    )
}

export default Infocard;