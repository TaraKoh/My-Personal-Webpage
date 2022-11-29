import React from "react";
import "./Header.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import widthHook from "../widthHook/widthHook";
import {Tooltip, OverlayTrigger} from "react-bootstrap"

class Header extends React.Component {
    toPath = (path) => {
        this.props.to(path)
    }

    renderTooltip = (props) => {
        return (
        <Tooltip id="button-tooltip" {...props}>
            Simple tooltip
        </Tooltip>
        )
    }

    render() {
        return (
            <div className="Header">
                <div className="HeaderLogo">
                    <h2 onClick={this.toPath.bind(this, '/home')}>TaraKoh</h2>
                    <h3>| Welcome to my personal webpage!</h3>
                </div>
                <div className="HeaderContainer">
                    <OverlayTrigger
                        placement="bottom"
                        delay={{ hide: 450, show: 300 }}
                        overlay={this.renderTooltip}>
                        <i className="bi bi-github" aria-label="GitHub"></i>
                    </OverlayTrigger>
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

const HeaderComponent = widthHook(Header)
export default widthHook(HeaderComponent)