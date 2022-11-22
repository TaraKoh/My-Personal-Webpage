import React from "react";
import "./Header.css";
import "bootstrap-icons/font/bootstrap-icons.css"
export default class Header extends React.Component {

    render() {
        return (
            <div className="Header">
                <div className="HeaderContainer">
                    <i class="bi bi-github" role="img" aria-label="GitHub"></i>
                    <i class="bi bi-sina-weibo"></i>
                    <i class="bi bi-envelope"></i>
                    <i class="bi bi-telephone"></i>
                </div>
            </div>
        )
    }
}