import { useState, useEffect } from 'react'
import { getFetch } from '../../helpers/mock.js'
import ItemList from '../ItemList/ItemList'
import { Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({titulo}) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoriasId} = useParams()
   
    
    useEffect(() => {
        if(categoriasId) {
            getFetch.then(prods => {
                setData(prods.filter(productos => productos.categoria === categoriasId))
                setLoading(false)
            })
                .catch(err => console.log(`No se ha podido traer los productos debido al error ${err}`))
        } else {
            getFetch.then(prods => {
                setData(prods)
                setLoading(false)
            })
                .catch(err => console.log(`No se ha podido traer los productos debido al error ${err}`))
        }

    }, [categoriasId])

    return (

        <div>
            {
                loading ?
                    <div className="d-flex justify-content-center align-items-center mt-5">
                        <Spinner animation="border" role="status" variant="warning">
                            <span className="visually-hidden">Loading...</span></Spinner>
                    </div>
                    :
                    <ItemList products={data} titulo={titulo} />

            }

        </div>
    )
}

export default ItemListContainer