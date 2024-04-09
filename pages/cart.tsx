import React from 'react'
import { Divider } from 'semantic-ui-react'
import Layout from '@components/Layout/Layout'
import CartItemList from '@components/CartItemList/CartItemList'
import CartSummary from '@components/CartSummary/CartSummary'
import { useCart, useActionMutations } from '@store/Cart'

const CartPage = () => {
  const { items, count } = useCart()
  const { removeFromCart } = useActionMutations()

  return (
    <Layout>
    <CartItemList items={items} removeFromCart={removeFromCart} />
    <Divider />
    <CartSummary totalAmount={count} />
  </Layout>
    
  )
}

export default CartPage
