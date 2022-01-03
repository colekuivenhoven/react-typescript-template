import "../assets/styles/page_styles/Manage.css";
import { ThemeContext } from "../App";

// Libraries Import
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import React, { useEffect, useRef, useState, useLayoutEffect, useContext } from "react";

// Components Import
import Button from '../components/Button';

// Contexts Import
import themes from "../contexts/ThemeContext";

function Manage(props:any) {
    const theme = useContext(ThemeContext);

    // Prop declarations
    const screenSize = props.screenSize;
    const isMobile = props.isMobile;
    const vp = props.vp;
    const toggleTheme = props.toggleTheme;
    const pageName = props.pageName;

    return (
        <div className="manage-root"
            style={{
                backgroundColor: themes[`${theme}`].background_primary,
                color: themes[`${theme}`].text_primary
            }}
        >
            <div className="manage-content">
                {pageName}
            </div>
        </div>
    )
}

export default Manage;