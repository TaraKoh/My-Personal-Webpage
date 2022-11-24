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
                    <i class="bi bi-github" role="img" aria-label="GitHub"></i>
                    <i class="bi bi-sina-weibo"></i>
                    <i class="bi bi-instagram"></i>
                    <i class="bi bi-r-square-fill"></i>
                    <i class="bi bi-envelope"></i>
                    <i class="bi bi-telephone"></i>
                </div>
            </div>
        )
    }
}