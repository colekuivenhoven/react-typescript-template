import "../assets/styles/Navbar.css";
import { ThemeContext } from "../App";

// Libraries Import
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import React, { useEffect, useRef, useState, useLayoutEffect, useContext } from "react";

// Contexts Import
import themes from "../contexts/ThemeContext";

const siteTitle = "App Title";

function Navbar(props:any) {
    const theme = useContext(ThemeContext);

    // Prop declarations
    const screenSize = props.screenSize;
    const isMobile = props.isMobile;
    const vp = props.vp;
    const menuOpened = props.menuOpened;
    const setMenuOpened = props.setMenuOpened;
    const modalOpened = props.modalOpened;
    const setModalOpened = props.setModalOpened;
    const currentPage = props.currentPage;
    const setCurrentPage = props.setCurrentPage;

    return (
        <div className={`navbar-root ${isMobile ? "mobile" : ""} ${menuOpened ? "active" : ""}`}
            style={{
                backgroundColor: themes[`${theme}`].background_secondary,
                color: themes[`${theme}`].text_primary,
            }}
        >
            <div className="navbar-head">
                <Link to="/" className="menu-button noSelect"
                    style={{color: themes[`${theme}`].text_primary}}
                    onClick={() => {
                        setCurrentPage("home")
                        setMenuOpened(false);
                    }}
                >{siteTitle}</Link>
            </div>
            <div className="navbar-body">
                <Link to="/upload" className={`menu-button body noSelect ${currentPage == "upload" ? "active" : ""}`}
                    style={{color: themes[`${theme}`].text_primary}}
                    onClick={() => {
                        setCurrentPage("upload")
                        setMenuOpened(false);
                    }}
                >
                    Upload
                </Link>
                <Link to="/explore" className={`menu-button body noSelect ${currentPage == "explore" ? "active" : ""}`}
                    style={{color: themes[`${theme}`].text_primary}}
                    onClick={() => {
                        setCurrentPage("explore")
                        setMenuOpened(false);
                    }}
                >
                    Explore
                </Link>
                <Link to="/projects" className={`menu-button body noSelect ${currentPage == "projects" ? "active" : ""}`}
                    style={{color: themes[`${theme}`].text_primary}}
                    onClick={() => {
                        setCurrentPage("projects")
                        setMenuOpened(false);
                    }}
                >
                    Projects
                </Link>
                <Link to="/manage" className={`menu-button body noSelect ${currentPage == "manage" ? "active" : ""}`}
                    style={{color: themes[`${theme}`].text_primary}}
                    onClick={() => {
                        setCurrentPage("manage")
                        setMenuOpened(false);
                    }}
                >
                    Manage
                </Link>
                <Link to="/help" className={`menu-button body noSelect ${currentPage == "help" ? "active" : ""}`}
                    style={{color: themes[`${theme}`].text_primary}}
                    onClick={() => {
                        setCurrentPage("help")
                        setMenuOpened(false);
                    }}
                >
                    Get Help
                </Link>
                <Link to="/account" className={`menu-button body noSelect ${currentPage == "account" ? "active" : ""}`}
                    style={{color: themes[`${theme}`].text_primary}}
                    onClick={() => {
                        setCurrentPage("account")
                        setMenuOpened(false);
                    }}
                >
                    My Account
                </Link>
                <Link to="/logout" className={`menu-button body noSelect ${currentPage == "logout" ? "active" : ""}`}
                    style={{color: themes[`${theme}`].text_primary}}
                    onClick={() => {
                        setCurrentPage("account")
                        setMenuOpened(false);
                    }}
                >
                    Logout
                </Link>
            </div>
            <div className="navbar-foot">
                <div className="menu-button settings noSelect"
                    onClick={() => setModalOpened(true)}
                >
                    Settings
                </div>
            </div>
        </div>
    )
}

export default Navbar;