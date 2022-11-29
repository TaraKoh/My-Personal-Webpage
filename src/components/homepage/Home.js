import React from "react";
import "./Home.css";
import bookButton from "../../images/BOOK.png"
import aboutButton from "../../images/ABOUT.png"
import wechatStickerButton from "../../images/WECHATSTICKER.png"
import comicsButton from "../../images/COMICS.png"
import sketchesButton from "../../images/SKETCHES.png"
import journalButton from "../../images/JOURNAL.png"
import widthHook from "../widthHook/widthHook";

class Home extends React.PureComponent  {
  constructor(props){
    super(props);
    this.state={};
  }

  toPath = (path) => {
    this.props.to(path)
  }

  render() {
    return (
      <div className="Homepage">
          <img className="Book hrefButton" src={bookButton} alt="Book"></img>
          <img className="About hrefButton" src={aboutButton} alt="About"></img>
          <img className="WeChatStickers hrefButton" src={wechatStickerButton} alt="WeChatStickers" onClick={this.toPath.bind(this, '/wechatstickers')}></img>
          <img className="Comics hrefButton" src={comicsButton} alt="Comics" onClick={this.toPath.bind(this, '/comics')}></img>
          <img className="Sketches hrefButton" src={sketchesButton} alt="Sketches"></img>
          <img className="Journal hrefButton" src={journalButton} alt="Journal"></img>
      </div>
    );
  }
}

const HomeComponent = widthHook(Home)
export default widthHook(HomeComponent)
