import { createContext } from 'react';
import { productState } from './productReducer';

const ProductContext = createContext(productState);

export default ProductContext;