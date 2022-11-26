import React from "react";
import "./Header.css";
import "bootstrap-icons/font/bootstrap-icons.css"

export default class Header extends React.Component {
    render() {
        return (
            <div className="Header">
                <div className="HeaderLogo">
                    <h2>TaraKoh</h2>
                    <h3>| Welcome to my personal webpage!</h3>
                </div>
                <div className="HeaderContainer">
                    <i className="bi bi-github" role="img" aria-label="GitHub"></i>
                    <i className="bi bi-sina-weibo"></i>
                    <i className="bi bi-instagram"></i>
                    <i className="bi bi-r-square-fill"></i>
                    <i className="bi bi-envelope"></i>
                    <i className="bi bi-telephone"></i>
                </div>
            </div>
        )
    }
}