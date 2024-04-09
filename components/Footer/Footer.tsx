import React, { useState } from 'react'
import Link from 'next/link'
import { Segment, Container, Grid, List, Header, Input, Icon } from 'semantic-ui-react'

const Footer = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      // Redirigir a la página del producto con el SKU ingresado
      window.location.href = `/product/${searchQuery}`
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value)
  }

  return (
    <Segment
      vertical
      as="footer"
      style={{
        display: 'table',
        padding: '4em 2em',
        marginTop: '3em',
        borderTop: '1px solid #f2f2f2',
      }}
    >
      <Container text>
        <Grid stackable>
          {/* Nueva fila con los detalles de la llamada */}
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as="h4" content="Detalles de la llamada" />
              <p>Producto: Echo Dot (4th generation)</p>
              <p>Descripción del problema: Producto defectuoso</p>
              <p>Acción requerida: Reembolso</p>
            </Grid.Column>
            <Grid.Column width={8}>
              <Header as="h4" content="Buscar órdenes" />
              <Input
                icon={<Icon name='search' link onClick={handleSearch} />}
                placeholder='Ingrese ID'
                fluid
                value={searchQuery}
                onChange={handleChange}
              />
            </Grid.Column>
          </Grid.Row>
          {/* Fin de la nueva fila */}
          <Grid.Row>
            <Grid.Column width={4}>
              <Header as="h4" content="Nosotros" />
              <List>
                <List.Item>
                  <Link href="/about">
                    Conoce más del arte
                  </Link>
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={5}>
              <Header as="h4" content="Servicios" />
              <List>
                <List.Item>
                  <Link href="/">
                    Todos los productos
                  </Link>
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as="h4">Hecho por</Header>
              <p>
                <a href="https://www.linkedin.com/in/christian-moral">LinkedIn</a>
              </p>
              <List horizontal style={{ display: 'flex' }}>
                <List.Item
                  icon="github"
                  style={{ display: 'flex' }}
                  content={
                    <a href="https://github.com/ChristianMoraLopez">
                      GitHub
                    </a>
                  }
                />
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        
      </Container>

      <style jsx>{`
        .colophon {
          text-align: center;
          margin-top: 3.2rem;
          font-size: 0.8rem;
        }
        .colophon-entry {
          color: grey;
          margin-bottom: 0;
        }
      `}</style>
    </Segment>
  )
}

export default Footer
