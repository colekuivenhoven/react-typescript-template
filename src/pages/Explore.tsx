import "../assets/styles/page_styles/Explore.css";
import { ThemeContext } from "../App";

// Libraries Import
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import React, { useEffect, useRef, useState, useLayoutEffect, useContext } from "react";

// Components Import
import Button from '../components/Button';

// Contexts Import
import themes from "../contexts/ThemeContext";

const chainArray = ["Unit 1 - Grammar", "Unit 2 - Conjugation", "Unit 3 - Present Tense", "Unit 4 - Past Tense", "Unit 5 - Special Cases"];

function Explore(props:any) {
    const theme = useContext(ThemeContext);

    // Prop declarations
    const screenSize = props.screenSize;
    const isMobile = props.isMobile;
    const vp = props.vp;
    const toggleTheme = props.toggleTheme;
    const pageName = props.pageName;

    return (
        <div className="explore-root"
            style={{
                backgroundColor: themes[`${theme}`].background_primary,
                color: themes[`${theme}`].text_primary
            }}
        >
            <div className="explore-content">
                {chainArray.map((chain:string, idx:number) => {
                    return (
                        <div key={idx}
                            style={{
                                width: "100%",
                                height: "auto",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <div className="chaincard-content"
                                style={{
                                    width: `${isMobile ? "100%" : "50%"}`,
                                    minWidth: `${isMobile ? "100%" : ""}`,
                                }}
                            >
                                <div className="chaincard-content-header">
                                    {chain}
                                </div>
                                <div className="chaincard-content-body">
                                    <div className="chaincard-content-row">
                                        <div className="chaincard-content-item"></div>
                                    </div>
                                    <div className="chaincard-content-row">
                                        <div className="chaincard-content-item"></div>
                                        <div className="chaincard-content-item"></div>
                                    </div>
                                    <div className="chaincard-content-row">
                                        <div className="chaincard-content-item"></div>
                                    </div>
                                    <div className="chaincard-content-row">
                                        <div className="chaincard-content-item"></div>
                                        <div className="chaincard-content-item"></div>
                                        <div className="chaincard-content-item"></div>
                                    </div>
                                    <div className="chaincard-content-row">
                                        <div className="chaincard-content-item"></div>
                                        <div className="chaincard-content-item"></div>
                                    </div>
                                </div>
                            </div>
                            {(idx < chainArray.length - 1) && <div className="chaincard-link">
                                <div className="chaincard-link-content"
                                    style={{
                                        backgroundColor: themes[`${theme}`].background_primary,
                                    }}
                                >
                                    <div className="chaincard-link-image"></div>
                                </div>
                            </div>}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Explore;