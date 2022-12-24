import ReactDOM from "react-dom";
import { HashRouter, Routes, Route, Navigate} from "react-router-dom";
import Home from "./components/homepage/Home"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import About from "./components/about/About"
import Comics from "./components/comics/Comics"
import WechatStickers from "./components/wechatstickers/WechatStickers"
import "./index.css";

function Index() {
  return (
    <HashRouter>
        <Header></Header>
        <Routes>
          <Route path="*" element={<Navigate to="/home"/>}></Route>
          <Route path='/home' element={<Home />}/>
          <Route path="/about" element={<About />}></Route>
          <Route path="/comics" element={<Comics />}></Route>
          <Route path="/wechatstickers" element={<WechatStickers />}></Route>
        </Routes>
        <Footer></Footer>
    </HashRouter>
  )
}


ReactDOM.render(<Index />, document.getElementById("root"));



