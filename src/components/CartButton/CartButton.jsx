import React, { useContext } from 'react';

import './CartButton.css';

import { AiOutlineShoppingCart } from 'react-icons/ai';
import AppContext from '../../context/AppContext';


function CartButton(){

  const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext);

  return(
    <button 
      type="button" 
      className="cart__button"
      onClick={ () => setIsCartVisible(!isCartVisible)}
    >
      <AiOutlineShoppingCart />

      { cartItems.length > 0 && <span className="cart-status">{cartItems.length}</span> } {/*Aqui é onde faz a contagem de itens dentro do carrinho*/}
    </button>
  );
}

export default CartButton;
