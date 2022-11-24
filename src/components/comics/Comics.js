import React from "react";
import "./Comics.css";

export default class Comics extends React.Component {
    constructor(props) {
        super(props);
        this.states = {
            dataList: [
                {
                    title: "Soup",
                    date: "2022/11/24",
                    description: "This is a test description about my comics",
                    imageSrc:["Soup1.jpg", "Soup2.jpg"]
                }, {
                    title: "Watersports",
                    date: "2022/11/24",
                    description: "This is a test description about my comics",
                    imageSrc:["Watersport1.jpg", "Watersport2.jpg"]
                }, {
                    title: "What's in Lobbster",
                    date: "2022/11/24",
                    description: "This is a test description about my comics",
                    imageSrc: ["Fishbar1.jpg", "Fishbar2.jpg"]

                }, {
                    title: "Outlets",
                    date: "2022/11/24",
                    description: "This is a test description about my comics",
                    imageSrc: ["Outlets.jpg"]
                }, {
                    title: "想吃汉堡",
                    date: "2022/11/24",
                    description: "This is a test description about my comics",
                    imageSrc:["Soup1.jpg", "Soup2.jpg"]
                }, {
                    title: "胖了",
                    date: "2022/11/24",
                    description: "This is a test description about my comics",
                    imageSrc:["Soup1.jpg", "Soup2.jpg"]
                }
            ]
        }
    }
    render() {
        return (
            <div className="comics">
                <h2 className="comicsHeader">Here's the Collection of My Comics Published Online</h2>
                <div className="comicsGird">
                    {
                        this.states.dataList.map((item, index) => {
                            return (
                                <div className="window">
                                    <div className="mainBlock">
                                        <div className="pictureBlock">
                                            {item.imageSrc.map((image, index) => {
                                                if (item.imageSrc.length === 1) {
                                                    return <img className="comicImage" src={require("../../images/" + image)} style={{width:"100%"}} alt="ImgPreview-1"></img>
                                                } else if (item.imageSrc.length === 2) {
                                                    return <img className="comicImage" src={require("../../images/" + image)} alt="ImgPreview-1"></img>
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
        )
    }
}