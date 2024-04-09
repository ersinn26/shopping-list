import Header from '../components/Header/Header'
import ProductCard from '../components/ProductCard/ProductCard'
import React from 'react'
import { categories, products } from '../helper/data'


const ProductList = () => {
  return (
    <div >
      <Header categories={categories}></Header>
      <ProductCard products={products}></ProductCard>
    </div>
  )
}

export default ProductList;
