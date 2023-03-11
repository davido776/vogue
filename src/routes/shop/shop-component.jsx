import { useEffect } from 'react';
import {Routes, Route} from 'react-router-dom'

import CategoriesPreview from '../categories-preview/categories-preview-component';
import Category from '../category/category-component';

import {useDispatch} from 'react-redux'

import './shop.styles.scss';
import { getCategoriesAndDocuments } from '../../utilities/firebase/firebase.utils';
import { setCategories } from '../../store/categories/categories.actions';

const Shop = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const getCategories = async () => {
      const categories = await getCategoriesAndDocuments()
      dispatch(setCategories(categories))
    }

    getCategories();
    
  },[])


  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;