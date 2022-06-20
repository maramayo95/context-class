import {useState} from 'react'
import { Card, Button } from 'react-bootstrap'
import { useCartContext } from '../../context/CartContext'
import './ItemCount.css'

const ItemCount = ({min, max, stock, product}) => {
    const [count, setCount] = useState(stock)
    const {addToCart} = useCartContext()
    function add(){
        if(count < max) {
                setCount(count + 1)
        }
    }

    function substraction(){
        if(count > min){
                setCount(count - 1)
        }
    }

    function reset(){
        setCount(stock)
    }

    function handleSubmit(e){
        e.preventDefault()
        addToCart({
            quantity: count,
            product: product
        })
        setCount(stock)
    }


    return (
        <div className="d-flex justify-content-center">
            <Card bg="dark" text="light" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title className="text-center">Cantidad : {count}</Card.Title>
                    <div className="d-flex justify-content-center botones-contador">
                    <Button variant="danger" onClick={add}>+</Button>
                    <Button variant="danger" onClick={reset}>Reset</Button>
                    <Button variant="danger" onClick={substraction}>-</Button>
                    </div> 
                    <div className="d-flex justify-content-center mt-3">
                    <Button variant="danger" onClick={handleSubmit} >Comprar</Button>
                    
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ItemCount