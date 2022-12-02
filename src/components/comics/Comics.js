import React from "react";
import Modal from "react-bootstrap/Modal"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Comics.css";

export default class Comics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList: [
                {
                    title: "Soup",
                    date: "2022/11/09",
                    description: "This is a test description about my comics. This is a test description about my comics.",
                    imageSrc: ["Soup1.jpg", "Soup2.jpg", "Soup3.jpg", "Soup4.jpg"]
                }, {
                    title: "Watersports",
                    date: "2022/10/13",
                    description: "This is a test description about my comics. This is a test description about my comics. This is a test description about my comics. This is a test description about my comics.",
                    imageSrc: ["Watersport1.jpg", "Watersport2.jpg", "Watersport3.jpg"]
                }, {
                    title: "Outlets",
                    date: "2022/08/28",
                    description: "This is a test description about my comics",
                    imageSrc: ["Outlets1.jpg", "Outlets2.jpg", "Outlets3.jpg"]
                }, {
                    title: "清补凉",
                    date: "2022/08/23",
                    description: "This is a test description about my comics",
                    imageSrc: ["Qingbuliang.jpg"]
                }, {
                    title: "What's in Lobbster",
                    date: "2022/08/14",
                    description: "This is a test description about my comics",
                    imageSrc: ["Fishbar1.jpg", "Fishbar2.jpg", "Fishbar3.jpg"]

                }, {
                    title: "Sanya Traveling Illustration",
                    date: "2022/08/09",
                    description: "This is a test description about my comics",
                    imageSrc: ["Sanya1.png", "Sanya2.jpg", "Sanya3.jpg", "Sanya4.jpg"]
                }
            ],
            isShow: false,
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

    comicsPic = () => {
        const { imageSrc } = this.state.showData;
        // 为了避免showData为空指向undefined（没有点击某个window时Modal hidden）
        if (imageSrc) {
            return imageSrc.map((item) => {
                return <img src={require("../../images/" + item)} style={{ width: "100%" }} alt="ImgPreview"></img>
            });
        } else {
            return ''
        }
    }

    render() {
        const { dataList, isShow, showData } = this.state
        return (
            <>
                <div className="comics">
                    <h2 className="comicsHeader">Here are My Original Comic Works Published Online</h2>
                    <div className="comicsGird">
                        {
                            dataList.map((item, itemIndex) => {
                                return (
                                    <div className="window" key={itemIndex} onClick={this.handleShow.bind(this, item)}>
                                        <div className="mainBlock">
                                            <div className="pictureBlock">
                                                {item.imageSrc.map((image, imageIndex) => {
                                                    if (item.imageSrc.length === 1) {
                                                        return <img className="comicImage" key={imageIndex} src={require("../../images/" + image)} style={{ width: "100%" }} alt="ImgPreview"></img>
                                                    } else if (item.imageSrc.length === 2 || item.imageSrc.length === 3) {
                                                        return <img className="comicImage" key={imageIndex} src={require("../../images/" + image)} alt="ImgPreview"></img>
                                                    } else if (item.imageSrc.length === 4) {
                                                        return <img className="comicImage" key={imageIndex} src={require("../../images/" + image)} style={{ width: "50%" }} alt="ImgPreview"></img>
                                                    } else {
                                                        return <></>
                                                    }
                                                })}
                                            </div>
                                            <div className="bottomBlock">
                                                <div className="line">
                                                    <h3 className="title">{item.title}</h3>
                                                    <h3 className="date">{item.date}</h3>
                                                </div>
                                                <div className="line">
                                                    <p className="description">{item.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <Modal show={isShow} onHide={this.handleClose} >
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <h2 className="modalTitle">{showData.title}</h2>
                            <h5 className="modalDate">{showData.date}</h5>
                            {/* <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p className="modalDescription">{showData.description}</p>
                        {this.comicsPic()}
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}