import "./category.styles.scss";
import { CategoriesContext } from "../../../contexts/products.context";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import ProductCard from "../../product-card/product-card.component";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div className="category-container">
      {products &&
        products.map((product) => {
          return <ProductCard key={product.id} products={product} />;
        })}
      ;
    </div>
  );
};

export default Category;
