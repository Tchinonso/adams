import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Login from "./Components/Logins/Login";
import Signup from "./Components/Logins/Signup";
import Navbar from "./Components/Navbar/Index";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import SingleProduct from "./Pages/Product/SingleProduct";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar />
          <div className="views">
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Route>
                <Route path="/product" element={<Products />}>
                    <Route path="single" element={<SingleProduct />} />
                </Route>
                  <Route path="/about" element={<About />}></Route>
                  <Route path="/Contact" element={<Contact />}></Route>
            </Routes>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
