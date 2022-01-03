import "../assets/styles/Modal.css";
import { ThemeContext } from "../App";

// Libraries Import
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import React, { useEffect, useRef, useState, useLayoutEffect, useContext } from "react";

// Components Import
import Button from '../components/Button';

// Contexts Import
import themes from "../contexts/ThemeContext";

function Modal(props:any) {
    const theme = useContext(ThemeContext);

    // Prop declarations
    const screenSize = props.screenSize;
    const isMobile = props.isMobile;
    const vp = props.vp;
    const toggleTheme = props.toggleTheme;
    const modalOpened = props.modalOpened;
    const setModalOpened = props.setModalOpened;

    return (
        <div className={`modal-root ${modalOpened ? "active" : ""}`}
            style={{
                color: themes[`${theme}`].text_primary,
            }}
            onClick={() => setModalOpened(false)}
        >
            <div className="modal-close-btn" 
                onClick={() => setModalOpened(false)}
            />
            <div className="modal-window"
                style={{
                    backgroundColor: themes[`${theme}`].background_secondary,
                }}
                onClick={e => e.stopPropagation()}
            >
                <div className="modal-title">Settings</div>
                <div className="modal-body">
                    <div className="modal-body-group-label">Theme</div>
                    <div className={`modal-body-item ${isMobile ? "mobile" : ""}`}>
                        <Button 
                            onclick={toggleTheme}
                            name="Dark Mode: "
                        />
                    </div>
                    <div className={`modal-body-item ${isMobile ? "mobile" : ""}`}>
                        <Button 
                            onclick={toggleTheme}
                            name="Rounded Corners: "
                        />
                    </div>
                    <div className={`modal-body-item ${isMobile ? "mobile" : ""}`}>
                        <Button 
                            onclick={toggleTheme}
                            name="3D Icons: "
                        />
                    </div>
                    <div className={`modal-body-item ${isMobile ? "mobile" : ""}`}>
                        <Button 
                            onclick={toggleTheme}
                            name="Colorblind Mode: "
                        />
                    </div>

                    <div className="modal-body-group-label"></div>
                    <div className="modal-body-group-label">Account</div>
                    <div className={`modal-body-item ${isMobile ? "mobile" : ""}`}>
                        <Button 
                            onclick={toggleTheme}
                            name="Save Login: "
                        />
                    </div>
                    <div className={`modal-body-item ${isMobile ? "mobile" : ""}`}>
                        <Button 
                            onclick={toggleTheme}
                            name="Anonymous Mode: "
                        />
                    </div>
                    <div className={`modal-body-item ${isMobile ? "mobile" : ""}`}
                        style={{
                            width: "98%",
                        }}
                    >
                        <Button 
                            onclick={toggleTheme}
                            name="Admin Mode: "
                        />
                    </div>

                    <div className="modal-body-group-label"></div>
                    <div className="modal-body-group-label">Tracking</div>
                    <div className={`modal-body-item ${isMobile ? "mobile" : ""}`}>
                        <Button 
                            onclick={toggleTheme}
                            name="Share Data: "
                        />
                    </div>
                    <div className={`modal-body-item ${isMobile ? "mobile" : ""}`}>
                        <Button 
                            onclick={toggleTheme}
                            name="Report Errors: "
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;