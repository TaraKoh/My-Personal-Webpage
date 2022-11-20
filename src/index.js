import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Home from "./components/homepage/Home"
import Header from "./components/header/Header"
import "./index.css";

function Index() {
  return (
    <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="*" element={<Navigate to="/My-Personal-Webpage/home"/>}></Route>
          <Route path='/My-Personal-Webpage/home' element={<Home />} />
        </Routes>
    </BrowserRouter>
  )
}


ReactDOM.render(<Index />, document.getElementById("root"));



