import {Button} from 'react-bootstrap'
import { useCartContext } from '../../context/CartContext'

const CartTable = ({item}) => {
    const { removeProduct } = useCartContext()
    
    return (
                        <tr>
                            <td><img style={{width: "100px", height:"100px"}} src={item.product.img}/></td>
                            <td>{item.product.name}</td>
                            <td>{item.quantity}</td>
                            <td>${item.product.price}</td>
                            <td><Button variant="danger" onClick={()=>{removeProduct(item.product.id)}}>
                                X
                            </Button></td>
                        </tr>
  )
}

export default CartTable