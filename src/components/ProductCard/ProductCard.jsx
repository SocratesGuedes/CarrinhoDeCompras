import React, { useContext } from 'react';
import { BsFillCartPlusFill } from 'react-icons/bs';
import PropTypes from 'prop-types';
import formatCurrency from '../../utils/formatCurrency';
import './ProductCard.css';
import AppContext from '../../context/AppContext';


function ProductCard({ data }) {

  const { title, thumbnail, price } = data;

  const { cartItems, setCartItems } = useContext(AppContext);

  const handleAddCart = () => setCartItems([ ... cartItems, data ]);

  return (
    <section className="product-card">
      <img 
        src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
        alt="product" 
        className="card__image" 
      />

      <div className="card__info">
        <div className="card__price">{formatCurrency(price, 'BRL')}</div>
        <div className="card__title">{title}</div>
      </div>

      <button 
        type="button" 
        className="button__add-cart"
        onClick={ handleAddCart }
      >
        <BsFillCartPlusFill />
      </button>
    </section>  
  );
}

export default ProductCard;
ProductCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }),
};


