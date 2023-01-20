import React from "react";
// import Modal from "react-bootstrap/Modal"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Sketches.css";

export default class Sketches extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList: [
                {
                    title: "Geometry",
                    imageSrc: ["Soup1.jpg", "Soup2.jpg", "Soup3.jpg", "Soup4.jpg"]
                }, {
                    title: "Still Life",
                    imageSrc: ["Soup1.jpg", "Soup2.jpg", "Soup3.jpg", "Soup4.jpg"]
                }
            ]
        }
    }

    render() {
        const { dataList, isShow, showData } = this.state
        return (
            <div className="sketches">
                <h2 className="sketchesHeader">These are My Sketches and Other Practices</h2>
                <div className="sketchesGird">
                    {
                        dataList.map((item, itemIndex) => {
                            return (
                                <div className="sketchesWindow" key={itemIndex} onClick={this.handleShow.bind(this, item)}>
                                    <div className="sketchesMainBlock">
                                        <div className="sketchesPictureBlock">
                                            {item.imageSrc.map((image, imageIndex) => {
                                                return <img className="sketchesImage" key={imageIndex} src={require("../../images/" + image)} style={{ width: "50%" }} alt="ImgPreview"></img>
                                                })}
                                        </div>s
                                        <div className="sketchesBottomBlock">
                                            <div className="sketchesLine">
                                                <h3 className="sketchesTitle">{item.title}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}