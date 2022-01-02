import "../assets/styles/Template.css";

// Libraries Import
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import React, { useEffect, useRef, useState, useLayoutEffect } from "react";

function Template(props:any) {

    // Prop declarations
    const screenSize = props.screenSize;
    const isMobile = props.isMobile;
    const vp = props.vp;

    return (
        <div className="template-root">
            Component - {isMobile ? "Mobile" : "Desktop"}
        </div>
    )
}

export default Template;