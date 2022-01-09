import "../assets/styles/page_styles/Home.css";
import { ThemeContext } from "../App";

// Libraries Import
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import React, { useEffect, useRef, useState, useLayoutEffect, useContext } from "react";

// Components Import
import Button from '../components/Button';
import Infocard from '../components/Infocard';

// Contexts Import
import themes from "../contexts/ThemeContext";

function Home(props:any) {
    const theme = useContext(ThemeContext);

    // Prop declarations
    const screenSize = props.screenSize;
    const isMobile = props.isMobile;
    const vp = props.vp;
    const toggleTheme = props.toggleTheme;
    const pageName = props.pageName;

    return (
        <div className="home-root"
            style={{
                backgroundColor: themes[`${theme}`].background_primary,
                color: themes[`${theme}`].text_primary
            }}
        >
            <div className="home-content"
                style={{
                    borderColor: "transparent",
                }}
            >
                <Infocard 
                    screenSize={screenSize}
                    isMobile={isMobile}
                    vp={vp}
                    title="Test Title"
                    description="Test Description"
                    width="100%"
                    textfirst={true}
                />
                <Infocard 
                    screenSize={screenSize}
                    isMobile={isMobile}
                    vp={vp}
                    title="Test Title 2"
                    description="Test Description 2"
                    width="100%"
                    textfirst={false}
                />
            </div>
        </div>
    )
}

export default Home;