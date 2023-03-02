import { useContext, Fragment } from 'react';

import { CategoryContext } from '../../context/categories-context';
import CategoryPreview from '../../components/category-preview/category-preview-component';

const CategoriesPreview = () => {
  const { categories } = useContext(CategoryContext);

  return (
    <Fragment>
      {Object.keys(categories).map((title) => {
        const products = categories[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;