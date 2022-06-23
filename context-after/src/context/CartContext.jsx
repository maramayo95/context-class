import { createContext, useState, useContext } from 'react';

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  
  const [cartList, setCartList] = useState([]);

  const addToCart = (objProduct) => {
    
    let carritoprevio = [...cartList];
    
    if (carritoprevio.some((item) => item.product.id === objProduct.product.id)) 
    {
      carritoprevio.find((item) => item.product.id === objProduct.product.id).quantity += objProduct.quantity;
      setCartList(carritoprevio);
    } else {
      setCartList([...cartList, objProduct]);
    }
   
  };

  // console.log(cartList)
  const clearList = () => setCartList([]);

  const totalPrice = () => {
    let total = 0;

    cartList.forEach((newProduct) => {
      total +=
        parseInt(newProduct.product.price) * parseInt(newProduct.quantity);
    });

    return parseInt(total);
  };

  const removeProduct = (id) => {
    setCartList(cartList.filter((newProduct) => newProduct.product.id !== id));
  };

  const iconCart = () => cartList.reduce((acum, valor) => acum + valor.quantity, 0);


  return (
    <CartContext.Provider
      value={{
        cartList,
        setCartList,
        addToCart,
        clearList,
        totalPrice,
        removeProduct,
        iconCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
