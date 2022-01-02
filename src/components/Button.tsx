import "../assets/styles/Button.css";
import { ThemeContext } from "../App";

// Libraries Import
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import React, { useEffect, useRef, useState, useLayoutEffect, useContext } from "react";

// Contexts Import
import themes from "../contexts/ThemeContext";

function Button(props:any) {
    const theme = useContext(ThemeContext);

    // Prop declarations
    const onclick = props.onclick;
    const name = props.name;

    return (
        <div className="button-root">
            <div className="button-text">
                {name}
            </div>
            <button className={`button-object ${themes[`${theme}`].name == "dark" ? "active" : ""}`}
                onClick={onclick}
                style={{
                    
                }}
            >
                <div className={`button-switch`} />
            </button>
        </div>
    )
}

export default Button;