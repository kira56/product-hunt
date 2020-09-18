import React from 'react';
import Layout from '../components/layout/Layout';
import DetallesProducto from '../components/layout/DetallesProducto';
import useProductos from '../hooks/useProductos';

// Instalamos 3 paquetes 
/** npm i @emotion/core @emotion/styled babel-plugin-emotion @emotion/babel-preset-css-prop */

export default function Home() {

  const {productos} = useProductos('creado')

  return (
    <Layout>
      <div className="listado-productos">
        <div className="contenedor">
          <ul className="bg-white">
            {productos.map(producto => (
              <DetallesProducto
                key={producto.id}
                producto={producto}
              />
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  )
}
