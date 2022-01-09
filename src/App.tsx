import './App.css';

// Libraries Import
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import React, { useEffect, useRef, useState, useLayoutEffect, createContext, useContext } from "react";

// Components Import
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Button from './components/Button';
import Modal from "./components/Modal";

// Pages Import
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Explore from "./pages/Explore";
import Projects from "./pages/Projects";
import Manage from "./pages/Manage";
import Help from "./pages/Help";
import Account from "./pages/Account";
import Logout from "./pages/Logout";

// Contexts Import
import themes from "./contexts/ThemeContext";

const touchSensitivity = 50;

interface IPosition {
  x: number;
  y: number;
}

export const ThemeContext = createContext({});

function App() {
  const [screenSize, setScreenSize] = useState([window.innerWidth, window.innerHeight]);
  const [isMobile, setIsMobile] = useState(screenSize[0] < screenSize[1] ? true : false);
  const [menuOpened, setMenuOpened] = useState(false);
  const [modalOpened, setModalOpened] = useState(false);
  const [touchStart, setTouchStart] = useState({x: 0, y: 0});
  const [touchEnd, setTouchEnd] = useState({x: 0, y: 0});
  const [currentPage, setCurrentPage] = useState(window.location.pathname.substring(1) ? window.location.pathname.substring(1) : 'home');

  const [theme, setTheme] = useState<string>(localStorage.getItem("theme") || "light");
  function toggleTheme() {
    setTheme(theme == "light" ? "dark" : "light");
    localStorage.setItem("theme", theme == "light" ? "dark" : "light");
  }

  // Update screenSize & isMobile on window resize
  useLayoutEffect(() => {
    function updateSize() {
      setScreenSize([window.innerWidth, window.innerHeight]);
      setIsMobile(window.innerWidth < window.innerHeight ? true : false);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Custom Viewport Data
  let vp = {
    vw: screenSize[0] / 100,
    vh: screenSize[1] / 100,
    vmin: Math.min(screenSize[0] / 100, screenSize[1] / 100),
    vmax: Math.max(screenSize[0] / 100, screenSize[1] / 100)
  }

  // Touch Events
  function handleTouchMove(e:React.TouchEvent<HTMLDivElement>) {
    setTouchEnd({x: e.targetTouches[0].clientX, y: e.targetTouches[0].clientY});
  }

  function handleTouchStart(e:React.TouchEvent<HTMLDivElement>) {
    setTouchStart({x: e.targetTouches[0].clientX, y: e.targetTouches[0].clientY});
    setTouchEnd({x: e.targetTouches[0].clientX, y: e.targetTouches[0].clientY});
  }

  function handleTouchEnd() {
    // Swiped left
    if ((touchStart.x - touchEnd.x > touchSensitivity) && (touchEnd.x != 0)) {
      if(!menuOpened) {
        // Open Menu
        setMenuOpened(true);
      }
    }

    // Swiped right
    if ((touchStart.x - touchEnd.x < -touchSensitivity)) {
      if(menuOpened) {
        // Close Menu
        setMenuOpened(false);
      }
    }
  }

  return (
    <Router>
      <ThemeContext.Provider value={theme}>
        <div className={`App ${isMobile ? "mobile" : ""}`}
          style={{
            backgroundColor: themes[theme].background_primary,
          }}
            onTouchStart={(e) => handleTouchStart(e)}
            onTouchMove={(e) => handleTouchMove(e)}
            onTouchEnd={() => handleTouchEnd()}
        >

          {isMobile && 
            <div className="mobile-burger-bar">
              <div className="burger-button" 
                style={{
                  // backgroundColor: themes["dark"].link_secondary,
                }}
                onClick={() => setMenuOpened(true)}
              />
            </div>
          }
          <Navbar 
            screenSize={screenSize}
            isMobile={isMobile}
            vp={vp}
            menuOpened={menuOpened}
            setMenuOpened={setMenuOpened}
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />

          <Switch>
            <Route path="/upload">
              <Upload
                pageName={"Upload"} 
                screenSize={screenSize}
                isMobile={isMobile}
                vp={vp}
                toggleTheme={toggleTheme}
              />
            </Route>

            <Route path="/explore">
              <Explore
                pageName={"Explore"} 
                screenSize={screenSize}
                isMobile={isMobile}
                vp={vp}
                toggleTheme={toggleTheme}
              />
            </Route>

            <Route path="/projects">
              <Projects
                pageName={"Projects"} 
                screenSize={screenSize}
                isMobile={isMobile}
                vp={vp}
                toggleTheme={toggleTheme}
              />
            </Route>

            <Route path="/manage">
              <Manage
                pageName={"Manage"} 
                screenSize={screenSize}
                isMobile={isMobile}
                vp={vp}
                toggleTheme={toggleTheme}
              />
            </Route>

            <Route path="/help">
              <Help
                pageName={"Get Help"} 
                screenSize={screenSize}
                isMobile={isMobile}
                vp={vp}
                toggleTheme={toggleTheme}
              />
            </Route>

            <Route path="/account">
              <Account
                pageName={"My Account"} 
                screenSize={screenSize}
                isMobile={isMobile}
                vp={vp}
                toggleTheme={toggleTheme}
              />
            </Route>

            <Route path="/logout">
              <Logout 
                pageName={"Logout"} 
                screenSize={screenSize}
                isMobile={isMobile}
                vp={vp}
                toggleTheme={toggleTheme}
              />
            </Route>

            <Route path="/">
              <Home
                pageName={"Home"} 
                screenSize={screenSize}
                isMobile={isMobile}
                vp={vp}
                toggleTheme={toggleTheme}
              />
            </Route>
          </Switch>

          <Modal
            screenSize={screenSize}
            isMobile={isMobile}
            vp={vp}
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
            toggleTheme={toggleTheme}
          />
          {/* <div className="debug"
            style={{
              backgroundColor: themes[theme].background_secondary,
              color: themes[theme].text_primary
            }}
          >
            <span>Touch Start X: {touchStart.x}</span>
            <span>Touch End X: {touchEnd.x}</span>
          </div> */}

        </div>
      </ThemeContext.Provider>
      
    </Router>
  );
}

export default App;
