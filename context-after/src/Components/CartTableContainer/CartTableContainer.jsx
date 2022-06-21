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
                        <th>X</th>
                    </tr>
                </thead>
                <tbody>
                
                    {
                        
                        cartList.length > 0 && cartList.map((item,index) => ( <CartTable item={item} key={index} /> ))
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