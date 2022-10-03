import "./App.css";
import Categories from "./Components/Categories";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import ProductsRow from "./Components/ProductsRow";
import SalesCrousel from "./Components/SalesCrousel";
import SearchProd from "./Components/SearchProd";
import Signup from "./Components/Signup";
import SingleProduct from "./Components/SingleProduct";

function App() {
  return (
    <>
      <Navbar />

      <SearchProd />
      <SingleProduct />
      {/* <SalesCrousel /> */}
      {/* <div className="container"> */}
      {/* <Categories /> */}
      {/* </div> */}
      {/* <ProductsRow /> */}
      {/* <Login /> */}
      {/* <Signup /> */}
    </>
  );
}

export default App;
