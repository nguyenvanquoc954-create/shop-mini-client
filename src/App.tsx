import Header from "./components/Header";
import Banner from "./components/Banner";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import { products } from "./data/products";
import { filterProducts } from "./utils/product";
import "./App.css";

function App() {
  const cheapProducts = filterProducts(products, { maxPrice: 300000, sort: "asc" });
  const electronics = filterProducts(products, { category: "Điện tử" });
  const lowStock = products.filter((p) => p.stock >= 1 && p.stock <= 5);

  return (
    <>
      <Header />
      <main>
        <Banner />
        <CategoryList items={products} />
        <ProductList title="Sản phẩm nổi bật" items={products} />
        <ProductList title="Giá dưới 300.000 đ" items={cheapProducts} />
        <ProductList title="Đồ điện tử" items={electronics} />
        <ProductList title="Sản phẩm sắp hết hàng" items={lowStock} />
      </main>
      <Footer />
    </>
  );
}

export default App;