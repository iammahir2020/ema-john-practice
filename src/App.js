import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import ReviewOrder from "./components/ReviewOrder/ReviewOrder";
import About from "./components/About/About";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/shop" element={<Shop></Shop>}></Route>
        <Route
          path="/reviewOrder"
          element={<ReviewOrder></ReviewOrder>}
        ></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
