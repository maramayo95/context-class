import React from 'react'
import { Container, Table } from 'react-bootstrap'
import { useCartContext } from '../../context/CartContext'
import CartTable from '../CartTable/CartTable'
const CartTableContainer = () => {
    const { cartList } = useCartContext()
    return (
        <Container>
            <Table className="mt-5" striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    {cartList.map(product => (
                        <CartTable/>
                    ))
                    
                    }

                </tbody>

            </Table>
        </Container>


    )
}

export default CartTableContainer