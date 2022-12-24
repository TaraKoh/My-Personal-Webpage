import React from "react";
import "./Header.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import widthHook from "../widthHook/widthHook";
import copy from 'copy-to-clipboard';
import { Tooltip, OverlayTrigger, Alert } from "react-bootstrap"

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAlertShow: false
        }
    }

    toPath = (path) => {
        this.props.to(path)
    }

    renderOverlayTrigger = (type) => {
        let text, id, props;
        switch (type) {
            case "email":
                id = "email-button-tooltip"
                text = "Click to copy my email address: example@outlook.com"
                props = {
                    className: "bi bi-envelope",
                    onClick: this.copyEmail.bind(this, "example@outlook.com")
                }
                break;
            case "github":
                id = "github-button-tooltip"
                text = "Click to visit my Github"
                props = {
                    className: "bi bi-github",
                    onClick: this.redirectPage.bind(this, "https://github.com/TaraKoh")
                }
                break;
            case "weibo":
                id = "weibo-button-tooltip"
                text = "Click to visit my Sina Weibo"
                props = {
                    className: "bi bi-sina-weibo",
                    onClick: this.redirectPage.bind(this, "https://weibo.com/u/5705374837")
                }
                break;
            case "instagram":
                id = "instagram-button-tooltip"
                text = "Click to visit my Instagram"
                props = {
                    className: "bi bi-instagram",
                    onClick: this.redirectPage.bind(this, "https://www.instagram.com/tarakoooh/")
                }
                break;
            case "behance":
                id = "behance-button-tooltip"
                text = "Click to visit my Behance"
                props = {
                    className: "bi bi-behance",
                    // onClick: this.redirectPage.bind(this, "https://weibo.com/u/5705374837")
                }
                break;
            case "red":
                id = "red-button-tooltip"
                text = "Click to visit my Xiaohongshu"
                props = {
                    className: "bi bi-r-square-fill",
                    onClick: this.redirectPage.bind(this, "https://www.xiaohongshu.com/user/profile/5bbc8f6b4c26220001fc8dfd")
                }
                break;
            default:
                break;
        }
        return (
            <OverlayTrigger
                placement="bottom"
                delay={{ hide: 100, show: 20 }}
                overlay={(
                    <Tooltip id={id}>
                        {text}
                    </Tooltip>
                )}>
                <i {...props}></i>
            </OverlayTrigger>
        )
    }

    copyEmail = (address) => {
        console.log(address)
        copy(address);
        this.setState({
            isAlertShow: true,
        }, () => {
            setTimeout(() => {
                this.setState({
                    isAlertShow: false,
                })
            }, 2000)
        })
        console.log(address)
    };

    redirectPage = (url) => {
        const w = window.open('about:blank');
        w.location.href = url
    };

    render() {
        const { isAlertShow } = this.state
        return (
            <>
                <Alert show={isAlertShow} variant="success">
                    <i className="bi bi-hand-thumbs-up"></i>&nbsp;Copy Success!
                </Alert>
                <div className="Header">
                    <div className="HeaderLogo">
                        <h2 onClick={this.toPath.bind(this, '/home')}>TaraKoh</h2>
                        <h3> Welcome to my personal webpage!</h3>
                    </div>
                    <div className="HeaderContainer">
                        {this.renderOverlayTrigger("email")}
                        {this.renderOverlayTrigger("github")}
                        {this.renderOverlayTrigger("weibo")}
                        {this.renderOverlayTrigger("instagram")}
                        {this.renderOverlayTrigger("behance")}
                        {this.renderOverlayTrigger("red")}
                    </div>
                </div>
            </>
        )
    }
}

const HeaderComponent = widthHook(Header)
export default widthHook(HeaderComponent)