import React, { useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Menu, Container } from 'semantic-ui-react'

import { AmazonLogo } from '@components/SVGIcons'

import StartCall from './StartCall'
import { useCart } from '@store/Cart'

const Navbar = () => {
  const { pathname } = useRouter()
  const { count: timeCount } = useCart()

  return (
    <Menu  borderless pointing as="header">
      <Container text className='max-h-16 lg:min-w-full align-middle '>
        <Link href="/" passHref className='flex'>
          <Menu.Item
            active={pathname === '/'}
            title="AC3 Prueba práctica de Amazon"
            className='flex flex-col md:flex-row'
          >
            <AmazonLogo className='container '/>

          
            <div className='invisible md:visible'>
            
            </div>
            
          </Menu.Item>
        </Link>

        <Menu.Menu position="right"  >
          <Link href="/" passHref>
            <Menu.Item active={pathname === '/cart'}  >
              <StartCall  name="Duración de Llamada" />
            </Menu.Item>
          </Link>
        </Menu.Menu>
      </Container>
      <style jsx global>{`
        .ui.menu.huge {
          font-size: 1.5rem;
        }
      `}</style>
    </Menu>
  )
}

export default Navbar
