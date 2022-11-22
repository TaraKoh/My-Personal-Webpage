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
          {/* <img src={bookButton} alt="Book"></img>
          <img src={aboutButton} alt="About"></img>
          <img src={wechatStickerButton} alt="WeChat Sticker"></img>
          <img src={comicsButton} alt="Comics"></img>
          <img src={sketchesButton} alt="Sketches"></img>
          <img src={journalButton} alt="Journal"></img> */}
      </div>
    );
  }
}
