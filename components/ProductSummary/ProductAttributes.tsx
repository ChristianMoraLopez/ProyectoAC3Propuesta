import React from 'react';
import { Dropdown, Header, Divider, Table } from 'semantic-ui-react';

const ProductAttributes = ({
  description,
  dimensions,
  reason,
  action,
}: TProductAttributes) => (
  <section className="container">
    <Header as="h3">Acerca de esta obra</Header>
    <p>{description}</p>

    <Divider />

    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell colSpan="2">Attributes</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
       
        <Table.Row>
          <Table.Cell className="attr-name">Dimensions</Table.Cell>
          <Table.Cell>{dimensions}</Table.Cell>
        </Table.Row>
        
        <Table.Row>
          <Table.Cell className="attr-name">Reason</Table.Cell>
          <Table.Cell>
          <Dropdown
              placeholder="Select Reason"
              fluid
              selection
              options={[
                { key: '1', text: 'Defecto de fábrica', value: 'Defecto de fábrica' },
                { key: '2', text: 'Daño durante el transporte', value: 'Daño durante el transporte' },
                { key: '3', text: 'Producto incorrecto', value: 'Producto incorrecto' },
              ]}
              value={reason}
            />
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell className="attr-name">Action</Table.Cell>
          <Table.Cell>
            <Dropdown
              placeholder="Select Action"
              fluid
              selection
              options={[
                { key: '1', text: 'Reembolso', value: 'Reembolso' },
                { key: '2', text: 'Reemplazo', value: 'Reemplazo' },
                { key: '3', text: 'Crédito de la tienda', value: 'Crédito de la tienda' },
              ]}
              value={action}
            />
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>

    <style jsx>{`
      .container :global(.attr-name) {
        text-transform: capitalize;
      }
    `}</style>
  </section>
);

export default ProductAttributes;
