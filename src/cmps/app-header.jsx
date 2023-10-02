import { Link, NavLink } from 'react-router-dom';
import { useRef } from 'react';

import logo from '../assets/imgs/logo.jpeg'

export function AppHeader() {
    const elBtnRef = useRef(null)
    const elScreenRef = useRef(null)
    const elUlRef = useRef(null)

    function toggleMenu() {
        if (!elBtnRef.current) elBtnRef.current = document.querySelector('.toggle-menu-btn')
        if (!elScreenRef.current) elScreenRef.current = document.querySelector('.toggle-menu-screen')
        if (!elUlRef.current) elUlRef.current = document.querySelector('ul')
        elBtnRef.current.classList.toggle('hide-btn')
        elScreenRef.current.classList.toggle('close-nav')
        elUlRef.current.classList.toggle('open')
        let elImgInput = document.querySelector('.input-img-container')
        let elCatInput = document.querySelector('.multi-selector')
        if (elImgInput) elImgInput.classList.toggle('to-back')
        if (elCatInput) elCatInput.classList.toggle('to-back')

    }

    return <section className="app-header-container full main-app">
        <div className="app-header">
            <Link to="/" className="logo">
                <img src={logo} alt="" />
            </Link>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">
                            <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24"><path d="M12.5 3.247a1 1 0 00-1 0L4 7.577V20h4.5v-6a1 1 0 011-1h5a1 1 0 011 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 013 0l7.5 4.33a2 2 0 011 1.732V21a1 1 0 01-1 1h-6.5a1 1 0 01-1-1v-6h-3v6a1 1 0 01-1 1H3a1 1 0 01-1-1V7.577a2 2 0 011-1.732l7.5-4.33z"></path></svg>
                            {/* FULL HOUSE <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24"><path d="M13.5 1.515a3 3 0 00-3 0L3 5.845a2 2 0 00-1 1.732V21a1 1 0 001 1h6a1 1 0 001-1v-6h4v6a1 1 0 001 1h6a1 1 0 001-1V7.577a2 2 0 00-1-1.732l-7.5-4.33z"></path></svg> */}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/cart">
                            {/* {Object.keys(user.cart).length ? <span>{getItemsAmount()}</span> : ""} */}
                            <svg fill="#000000" width="26" height="26" viewBox="0 0 56 56"><path d="M 20.0079 39.6485 L 47.3596 39.6485 C 48.2735 39.6485 49.0703 38.8985 49.0703 37.8907 C 49.0703 36.8829 48.2735 36.1328 47.3596 36.1328 L 20.4063 36.1328 C 19.0704 36.1328 18.2501 35.1953 18.0391 33.7656 L 17.6641 31.3047 L 47.4062 31.3047 C 50.8281 31.3047 52.5859 29.1953 53.0783 25.8438 L 54.9532 13.4453 C 55.0003 13.1407 55.0468 12.7656 55.0468 12.5547 C 55.0468 11.4297 54.2030 10.6563 52.9142 10.6563 L 14.6407 10.6563 L 14.1954 7.6797 C 13.9610 5.8750 13.3048 4.9609 10.9141 4.9609 L 2.6876 4.9609 C 1.7501 4.9609 .9532 5.7813 .9532 6.7188 C .9532 7.6797 1.7501 8.5000 2.6876 8.5000 L 10.6094 8.5000 L 14.3594 34.2344 C 14.8516 37.5625 16.6094 39.6485 20.0079 39.6485 Z M 51.0623 14.1953 L 49.3987 25.4219 C 49.2110 26.8750 48.4377 27.7656 47.0548 27.7656 L 17.1485 27.7891 L 15.1563 14.1953 Z M 21.8594 51.0391 C 23.9688 51.0391 25.6563 49.375 25.6563 47.2422 C 25.6563 45.1328 23.9688 43.4453 21.8594 43.4453 C 19.7266 43.4453 18.0391 45.1328 18.0391 47.2422 C 18.0391 49.375 19.7266 51.0391 21.8594 51.0391 Z M 43.7735 51.0391 C 45.9062 51.0391 47.5939 49.375 47.5939 47.2422 C 47.5939 45.1328 45.9062 43.4453 43.7735 43.4453 C 41.6641 43.4453 39.9532 45.1328 39.9532 47.2422 C 39.9532 49.375 41.6641 51.0391 43.7735 51.0391 Z"/></svg></NavLink>
                    </li>
                    <li>
                        <NavLink to="/loginSingup">
                            <svg width="23px" height="20px" viewBox="0 0 23 20">
                                <path d="M10.5794105,11.2103717 C13.7166489,11.2103717 16.2612611,8.69966543 16.2612611,5.60431227 C16.2612611,2.50895911 13.7166113,0.0154275093 10.5794105,0.0154275093 C7.44220966,0.0154275093 4.89755984,2.52613383 4.89755984,5.60431227 C4.89755984,8.68249071 7.44217199,11.2103717 10.5794105,11.2103717 Z M10.5794105,1.47713755 C12.8800244,1.47713755 14.7623825,3.33434944 14.7623825,5.60431227 C14.7623825,7.87427509 12.8800244,9.73144981 10.5794105,9.73144981 C8.27879654,9.73144981 6.39643839,7.87423792 6.39643839,5.60427509 C6.39643839,3.33431227 8.27875887,1.47713755 10.5794105,1.47713755 Z" id="Shape" />
                                <path d="M0.749439273,19.9633829 L20.4790847,19.9633829 C20.8973781,19.9633829 21.2285239,19.6366543 21.2285239,19.2239405 C21.2285239,15.3547212 18.039027,12.1905576 14.1000532,12.1905576 L7.12847074,12.1905576 C3.20694149,12.1905576 -1.42108547e-14,15.3375093 -1.42108547e-14,19.2239405 C-1.42108547e-14,19.6366543 0.331145833,19.9633829 0.749439273,19.9633829 Z M7.12847074,13.6694424 L14.1000532,13.6694424 C16.9584043,13.6694424 19.3113143,15.7674349 19.6773493,18.484461 L1.55117465,18.484461 C1.91717199,15.7846468 4.27011968,13.6694424 7.12847074,13.6694424 Z" id="Shape" />
                            </svg>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">
                            <svg fill="#000000" width="24px" height="24px" viewBox="0 0 416.979 416.979">
                                <g>
                                    <path d="M356.004,61.156c-81.37-81.47-213.377-81.551-294.848-0.182c-81.47,81.371-81.552,213.379-0.181,294.85   c81.369,81.47,213.378,81.551,294.849,0.181C437.293,274.636,437.375,142.626,356.004,61.156z M237.6,340.786   c0,3.217-2.607,5.822-5.822,5.822h-46.576c-3.215,0-5.822-2.605-5.822-5.822V167.885c0-3.217,2.607-5.822,5.822-5.822h46.576   c3.215,0,5.822,2.604,5.822,5.822V340.786z M208.49,137.901c-18.618,0-33.766-15.146-33.766-33.765   c0-18.617,15.147-33.766,33.766-33.766c18.619,0,33.766,15.148,33.766,33.766C242.256,122.755,227.107,137.901,208.49,137.901z" />
                                </g>
                            </svg>
                        </NavLink>
                    </li>
                </ul>
                <button className="toggle-menu-btn" onClick={toggleMenu}>
                <svg fill="#000000" width="20px" height="20px" viewBox="0 0 24.75 24.75" >
                        <g>
                            <path d="M0,3.875c0-1.104,0.896-2,2-2h20.75c1.104,0,2,0.896,2,2s-0.896,2-2,2H2C0.896,5.875,0,4.979,0,3.875z M22.75,10.375H2   c-1.104,0-2,0.896-2,2c0,1.104,0.896,2,2,2h20.75c1.104,0,2-0.896,2-2C24.75,11.271,23.855,10.375,22.75,10.375z M22.75,18.875H2   c-1.104,0-2,0.896-2,2s0.896,2,2,2h20.75c1.104,0,2-0.896,2-2S23.855,18.875,22.75,18.875z" />
                        </g>
                    </svg>
                </button>
            </nav>
            <div className="toggle-menu-screen" onClick={toggleMenu}></div>
        </div>
    </section>
}