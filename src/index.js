import ReactDOM from "react-dom";
import { HashRouter, Routes, Route, Navigate} from "react-router-dom";
import Home from "./components/homepage/Home"
import Header from "./components/header/Header"
import "./index.css";

function Index() {
  return (
    <HashRouter>
        <Header></Header>
        <Routes>
          <Route path="*" element={<Navigate to="/home"/>}></Route>
          <Route path='/home' element={<Home />} />
        </Routes>
    </HashRouter>
  )
}


ReactDOM.render(<Index />, document.getElementById("root"));



