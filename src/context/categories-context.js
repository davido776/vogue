import { createContext, useEffect, useState } from 'react';

import SHOP_DATA from '../shop-data';

import {
  getCategoriesAndDocuments
} from '../utilities/firebase/firebase.utils';


export const CategoryContext = createContext({
  categories: [],
});

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesMap = await getCategoriesAndDocuments()
      setCategories(categoriesMap  )  
    }

    getCategoriesMap();
    
  },[])
  const value = { categories };
  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};