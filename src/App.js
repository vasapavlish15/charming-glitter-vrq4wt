import Header from "./Header";
import HomePage from "./HomePage";
import ProductsPage from "./ProductPage";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <ProductsPage />
    </div>
  );
}
