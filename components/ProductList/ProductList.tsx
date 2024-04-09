import React from 'react'
import { Card } from 'semantic-ui-react'
import Link from 'next/link'
import Image from 'next/image'

type ProductListProps = {
  products: TProduct[]
}

const mapProductsToCards = (products: TProduct[]) =>
  products.map(({ name, id, price, image }) => (
    <Link 
      key={id} 
      href="/product/[id]" 
      className='m-2'
      as={`/product/${id}`} 
      passHref
    >
      <Card as="a" style={{ height: '100%',  width: '100%'}}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '150px', padding: 'rem' }}>
          <Image src={image} alt={name} width={100} height={24} />
        </div>
        <Card.Content style={{ color: 'dimgray', fontSize: '0.9rem', padding: '2%' }}>
          <Card.Header style={{ fontSize: '1rem' }}>{name}</Card.Header>
          <Card.Meta style={{ color: 'dimgray', fontSize: '0.9rem' }}>{price}</Card.Meta>
        </Card.Content>
      </Card>
    </Link>
  ));

const ProductList = ({ products }: ProductListProps) => (
  <div id='Content'>
    <div className=''></div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
      {mapProductsToCards(products)}
    </div>
  </div>
);

export default ProductList;
