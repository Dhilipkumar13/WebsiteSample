import Navbar from "./Components/NavBar/Navbar";
import { BrowserRouter,Routes,Route } from "react-router";
import { Product } from "./Pages/Product";
import { ShopCategorie } from "./Pages/ShopCategorie";
import { Shop } from "./Pages/Shop";
import { Cart } from "./Pages/Cart";
import { LoginPage } from "./Pages/LoginPage";
import Footer from "./Components/Footer/Footer";
import manbanner from './img/manbannner.png'
import womenbanner from './img/womenbanner.png'
import kidbanner from './img/kidbanner.png'
import SignupPage from "./Pages/SignupPage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" element={<Shop/>} />
        <Route path="/mens" element={<ShopCategorie banner={manbanner} categorie={"men"} />} />
        <Route path="/womens" element={<ShopCategorie banner={womenbanner}categorie={"women"}  /> } />
        <Route path="/kids" element={<ShopCategorie  banner={kidbanner} categorie={"kid"} />} />
       
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>

        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/singup" element={<SignupPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
