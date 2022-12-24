import React from "react";
import "./About.css";

export default class About extends React.Component {
    render() {
        return (
            <>
                <div className="about">
                    <h2 className="aboutHeader">About TaraKoh</h2>
                    <div className="aboutTopBlock">
                        <div className="aboutPhotoBlock">
                            <img className="selfPortraitImage" src={require("../../images/Self-Portrait.jpg")} alt="Self-Portrait"></img>
                            <p className="selfPortraitAnnotation">Self-Portrait, 2022</p>
                        </div>
                        <div className="aboutIntroBlock1">
                            <p className="aboutIntro1">TaraKoh is an amateur who is currently trying to draw her own comics. This is an example This is an example This is an example This is an example This is an example This is an example This is an example</p>
                        </div>
                    </div>
                    <div className="aboutIntroBlock2">
                        <p className="aboutIntro2">This is an example This is an example This is an example This is an example This is an example This is an example This is an example This is an example This is an example This is an example</p>
                    </div>
                </div>
            </>
        )
    }
}