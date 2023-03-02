import { useContext,Fragment } from 'react';
import {Routes, Route} from 'react-router-dom'
import CategoryPreview from '../../components/category-preview/category-preview-component';

import ProductCard from '../../components/product-card/product-card-component';

import { CategoryContext } from '../../context/categories-context';
import CategoriesPreview from '../categories-preview/categories-preview-component';
import Category from '../category/category-component';

import './shop.styles.scss';

const Shop = () => {
  const { categories } = useContext(CategoryContext);
  
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;