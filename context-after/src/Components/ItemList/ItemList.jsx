import { CardGroup} from 'react-bootstrap'
import Item from '../Item/Item'
import './ItemList.css'
const ItemList = ({ products , titulo }) => {
  return (
    <div className="container mt-5 mb-5">
 

      <div className="mb-4">
        <h1 className="text-center">{titulo}</h1>
      </div>
      <CardGroup className="grid-cards">
        {products.map(product => (<Item key={product.id} products={product} />))}
      </CardGroup>
    </div>
  )
}

export default ItemList