import React from "react";
import "./Home.css";
import bookButton from "../../images/BOOK.png"
import aboutButton from "../../images/ABOUT.png"
import wechatStickerButton from "../../images/WECHATSTICKER.png"
import comicsButton from "../../images/COMICS.png"
import sketchesButton from "../../images/SKETCHES.png"
import journalButton from "../../images/JOURNAL.png"

export default class App extends React.Component {
  render() {
    return (
      <div className="Homepage">
          <img className="Book hrefButton" src={bookButton} alt="Book"></img>
          <img className="About hrefButton" src={aboutButton} alt="About"></img>
          <img className="WeChatSticker hrefButton" src={wechatStickerButton} alt="WeChatSticker"></img>
          <img className="Comics hrefButton" src={comicsButton} alt="Comics"></img>
          <img className="Sketches hrefButton" src={sketchesButton} alt="Sketches"></img>
          <img className="Journal hrefButton" src={journalButton} alt="Journal"></img>
      </div>
    );
  }
}
