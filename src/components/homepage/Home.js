import React from "react";
import "./Home.css";
import bookButton from "../../images/Button_BOOK.png"
import aboutButton from "../../images/Button_ABOUT.png"
import wechatStickerButton from "../../images/Button_WECHATSTICKER.png"
import comicsButton from "../../images/Button_COMICS.png"
import sketchesButton from "../../images/Button_SKETCHES.png"
import onlineStoreButton from "../../images/Button_ONLINESTORE.png"
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
          <img className="About hrefButton" src={aboutButton} alt="About" onClick={this.toPath.bind(this, '/about')}></img>
          <img className="WeChatStickers hrefButton" src={wechatStickerButton} alt="WeChatStickers" onClick={this.toPath.bind(this, '/wechatstickers')}></img>
          <img className="Comics hrefButton" src={comicsButton} alt="Comics" onClick={this.toPath.bind(this, '/comics')}></img>
          <img className="Sketches hrefButton" src={sketchesButton} alt="Sketches" onClick={this.toPath.bind(this, '/sketches')}></img>
          <img className="OnlineStore hrefButton" src={onlineStoreButton} alt="Online Store"></img>
      </div>
    );
  }
}

const HomeComponent = widthHook(Home)
export default widthHook(HomeComponent)
