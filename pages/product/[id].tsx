import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import Layout from '@components/Layout/Layout'
import ProductSummary from '@components/ProductSummary/ProductSummary'

const ProductPage = () => {
  const { query } = useRouter()
  const [product, setProduct] = useState<TProduct | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (query.id) {
      window
        .fetch(`/api/art/${query.id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok')
          }
          return response.json()
        })
        .then((data: TProduct) => {
          setProduct(data)
        })
        .catch((error) => {
          console.error('Error fetching product details:', error)
          setError('Error fetching product details. Please try again later.')
        })
    }
  }, [query.id])

  if (error) {
    return <Layout>{error}</Layout>
  }

  return (
    <Layout>
      {product ? <ProductSummary product={product} /> : null}
    </Layout>
  )
}

export default ProductPage
