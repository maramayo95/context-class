import {useState,useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import {getFetch} from '../../helpers/mock'
import { Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const {productoId} = useParams()
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getFetch.then(prods => {
            setData(prods.find(prods => prods.id === productoId))
            setLoading(false)
        })
            .catch(err => console.log(`No se ha podido traer los productos debido al error ${err}`))
            // .finally(console.log(data))
    }, [productoId])
  
    return (
    <div>
        {
            loading ?
            <div className="mt-5 d-flex justify-content-center align-items-center">
                <Spinner animation="border" variant="warning" role="status" />
            </div> 
            :
            <ItemDetail data={data} param={productoId}/>

        }
    </div>
  )
}

export default ItemDetailContainer