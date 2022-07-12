import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../../contexts/products.context";
import CategoryPreview from "../../category-preview/category-preview.component";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  console.log(categoriesMap);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        console.log(products);
        return <CategoryPreview title={title} products={products} />;
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
