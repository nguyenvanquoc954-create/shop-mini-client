import type { Product } from "../data/products";
import { getCategories } from "../utils/product";

type Props = {
  items: Product[];
};

export default function CategoryList({ items }: Props) {
  const categories = getCategories(items);

  return (
    <section className="container">
      <h2 className="section-title">Danh mục</h2>
      <div className="category-list">
        {categories.map((c) => (
          <span key={c} className="category-chip">
            {c}
          </span>
        ))}
      </div>
    </section>
  );
}