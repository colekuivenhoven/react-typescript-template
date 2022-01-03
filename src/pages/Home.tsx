import "../assets/styles/Home.css";

// Libraries Import
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import React, { useEffect, useRef, useState, useLayoutEffect } from "react";

function Home(props:any) {

    // Prop declarations
    const screenSize = props.screenSize;
    const isMobile = props.isMobile;
    const vp = props.vp;

    const pageName = "Home";

    return (
        <div className="home-root">
            Component - {isMobile ? "Mobile" : "Desktop"}
        </div>
    )
}

export default Home;