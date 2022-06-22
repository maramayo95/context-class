import React from 'react'
import { Container, Table, Button } from 'react-bootstrap'
import { useCartContext } from '../../context/CartContext'
import CartTable from '../CartTable/CartTable'

const CartTableContainer = () => {
    const { cartList, totalPrice, clearList } = useCartContext()

    return (
        <Container>
            <Table className="mt-5" striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th></th>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Borrar</th>
                    </tr>
                </thead>
                <tbody>
                
                    {
                         cartList.map((item) => ( <CartTable item={item} key={item.product.id} /> ))
                    }

                </tbody>
                <tbody>
                    <tr>
                        <th>Total: $ {totalPrice()}</th>
                    </tr>
                </tbody>
            </Table>
                <Button variant="danger" onClick={clearList }>
                    Borrar Todo
                </Button>
        </Container>


    )
}

export default CartTableContainer