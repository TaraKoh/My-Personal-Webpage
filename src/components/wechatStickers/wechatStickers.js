import React from "react";
import Modal from "react-bootstrap/Modal"
import copy from 'copy-to-clipboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./WechatStickers.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import { Tooltip, OverlayTrigger, Alert } from "react-bootstrap"


export default class WechatStickers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList: [
                {
                    title: "卡斯伯的吃货日常",
                    date: "2022/11/22",
                    description: "One day my little round man got the name 'Casper'. His favourite thing to do is eating and loafing.",
                    bannerPic: "StickerBanner3.png",
                    coverPic: "StickerCover3.png",
                    qrCodePic: "StickerQRCode3.bmp",
                    fullPic: "StickerFullImage3.jpg",
                    shortLink: "https://w.url.cn/s/Ay7wOep#wechat_redirect",
                    promotionLink: "https://sticker.weixin.qq.com/cgi-bin/mmemoticon-bin/emoticonview?oper=single&t=shop/detail&productid=aL2PCfwK/89qO7sF6/+I+UDhfwEjhec2ZNvdnLLJRd/O/gEIv91QKDHCT+6eqk2A8kixUuY6OV1nYjip+EBCYVSBhKOycLg9ArWfVx2td+V0="
                }, {
                    title: "小人儿想啥呢2",
                    date: "2018/10/01",
                    description: "白胖小人儿第二弹来啦",
                    bannerPic: "StickerBanner2.jpg",
                    coverPic: "StickerCover2.png",
                    qrCodePic: "StickerQRCode2.bmp",
                    fullPic: "StickerFullImage2.jpg",
                    shortLink: "https://w.url.cn/s/AUQHi8N#wechat_redirect",
                    promotionLink: "https://sticker.weixin.qq.com/cgi-bin/mmemoticon-bin/emoticonview?oper=single&t=shop/detail&productid=aL2PCfwK/89qO7sF6/+I+UDhfwEjhec2ZNvdnLLJRd/Md/CmLQOmUJrCjJp86tAeTcR9DvWBQvJtV0c6R5CxyBo10iItJBnGLNReO1eNCzew="
                }, {
                    title: "小人儿想啥呢",
                    date: "2018/03/16",
                    description: "假如头脑中有一群小人儿的话",
                    bannerPic: "StickerBanner1.jpg",
                    coverPic: "StickerCover1.png",
                    qrCodePic: "StickerQRCode1.bmp",
                    fullPic: "StickerFullImage1.jpg",
                    shortLink: "https://w.url.cn/s/AAiDplQ#wechat_redirect",
                    promotionLink: "https://sticker.weixin.qq.com/cgi-bin/mmemoticon-bin/emoticonview?oper=single&t=shop/detail&productid=aL2PCfwK/89qO7sF6/+I+UDhfwEjhec2ZNvdnLLJRd/M2PVcFqCb1T5rKgzcW8a/FjP/5p9P9TgLh5kbtoGIRxuBAhW5mQ/gKy/yM5aN2hKM="
                }
            ],
            isShow: false,
            isAlertShow: false,
            showData: {}
        }

    }

    handleShow = (item) => {
        this.setState({
            isShow: true,
            showData: item
        })
    }

    handleClose = () => {
        this.setState({
            isShow: false
        })
    }

    fullStickerPic = () => {
        const { fullPic } = this.state.showData;
        if (fullPic) {
            return <img src={require("../../images/" + fullPic)} style={{ width: "100%", border: "2px dotted lightgray" }} alt="FullImgPreview"></img>
        } else {
            return ''
        }
    }

    copyUrl = (url) => {
        console.log(url)
        copy(url);
        this.setState({
            isAlertShow: true,
        }, () => {
            setTimeout(() => {
                this.setState({
                    isAlertShow: false,
                })
            }, 2000)
        })
    };

    redirectPage = (url) => {
        const w = window.open('about:blank');
        w.location.href = url
    };

    render() {
        const { dataList, isShow, showData, isAlertShow } = this.state
        return (
            <>
                <Alert show={isAlertShow} variant="success">
                    <i class="bi bi-hand-thumbs-up"></i>&nbsp;Copy Success!
                </Alert>
                <div className="wechatStickers">
                    <h2 className="stickersHeader">Here are My Original WeChat Sticker Collections</h2>
                    <div className="stickersGird">
                        {
                            dataList.map((item, itemIndex) => {
                                return (
                                    <>
                                        <div className="stickerWindow" key={itemIndex}>
                                            <div className="stickerMainBlock">
                                                <div className="stickerMasking" onClick={this.handleShow.bind(this, item)}></div>
                                                <div className="stickerBannerBlock">
                                                    <img className="stickerBannerImage" src={require("../../images/" + item.bannerPic)} alt="BannerImgPreview"></img>
                                                </div>
                                                <div className="stickerBottomBlock">
                                                    <div className="stickerHeadingBlock">
                                                        <div className="stickerCoverImageBlock">
                                                            <img className="stickerCoverImage" src={require("../../images/" + item.coverPic)} alt="CoverImgPreview"></img>
                                                        </div>
                                                        <div className="stickerTitleBlock">
                                                            <h3 className="stickerTitle">Name: {item.title}</h3>
                                                            <h4 className="stickerDate">Launch Date: {item.date}</h4>
                                                        </div>
                                                    </div>
                                                    <div className="stickerDescriptionBlock">
                                                        <p className="stickerDescription">{item.description}</p>
                                                    </div>
                                                    <div className="stickerUrlBlock">
                                                        <OverlayTrigger
                                                            placement="bottom"
                                                            delay={{ hide: 100, show: 20 }}
                                                            overlay={(
                                                                <Tooltip id="copy-button-tooltip">
                                                                    Click to copy link and share it in WeChat
                                                                </Tooltip>
                                                            )}>
                                                            <button className="btn btn-dark" onClick={this.copyUrl.bind(this, item.shortLink)}><i className="bi bi-share"></i> Copy Link</button>
                                                        </OverlayTrigger>
                                                        <OverlayTrigger
                                                            placement="bottom"
                                                            delay={{ hide: 100, show: 20 }}
                                                            overlay={(
                                                                <Tooltip id="preview-button-tooltip">
                                                                    Click to preview the promotional page of this series of stickers
                                                                </Tooltip>
                                                            )}>

                                                            <button className="btn btn-secondary" onClick={this.redirectPage.bind(this, item.promotionLink)}><i className="bi bi-link-45deg"></i> Preview</button>
                                                        </OverlayTrigger>
                                                        <OverlayTrigger
                                                            placement="top"
                                                            delay={{ hide: 100, show: 20 }}
                                                            overlay={(
                                                                <Tooltip id="qrcode-button-tooltip">
                                                                    <img className="stickerQrCodeImage" src={require("../../images/" + item.qrCodePic)} alt="QRCodePreview"></img>
                                                                </Tooltip>
                                                            )}>
                                                            <button className="btn btn-warning"><i className="bi bi-qr-code"></i> QR-Code</button>
                                                        </OverlayTrigger>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
                <Modal show={isShow} onHide={this.handleClose} >
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <h2 className="stickerModalTitle">{showData.title}</h2>
                            {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.fullStickerPic()}
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}