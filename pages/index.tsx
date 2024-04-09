import React, { useEffect, useState } from 'react'
import ProductList from '@components/ProductList/ProductList'
import Layout from '@components/Layout/Layout'

const HomePage = () => {
  const fetchProductList = async () => {
    try {
      const productListResponse = await fetch('/api/art');
      const productListData = await productListResponse.json();
      if (productListData && productListData.data) {
        setProductList(productListData.data);
      } else {
        console.error('Error fetching product list: productListData is null or undefined');
      }
    } catch (error) {
      console.error('Error fetching product list:', error);
    }
  
  }
  
  const [productList, setProductList] = useState<TProduct[]>([]);
  useEffect(() => {
    fetchProductList();
  }, []);


  return (
    <Layout>
      <ProductList products={productList} />
    </Layout>
  )
}

export default HomePage
