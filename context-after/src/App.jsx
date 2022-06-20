import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartView from './Components/CartView/CartView';
import { createContext } from 'react';
import {CartContextProvider} from './context/CartContext';

export const contextApp = createContext()
function App() {

  return (
    <div>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer titulo={"Listado de Productos"} />} />
            <Route exact path="/categorias/:categoriasId" element={<ItemListContainer titulo={"Listado de Productos"} />} />
            <Route exact path="/productos/:productoId" element={<ItemDetailContainer />} />
            <Route exact path="/carrito" element={<CartView />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  )
}

export default App
