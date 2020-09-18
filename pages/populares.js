import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/layout/Layout';
import DetallesProducto from '../components/layout/DetallesProducto';
import useProductos from '../hooks/useProductos';
// Instalamos 3 paquetes 
/** npm i @emotion/core @emotion/styled babel-plugin-emotion @emotion/babel-preset-css-prop */
const Heading = styled.h1`
  color:red;
`;

export default function Populares() {

    const {productos} = useProductos('votos')

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