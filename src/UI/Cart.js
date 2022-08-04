import React, { useContext } from "react";
import classes from './Cart.module.css'
import {useHistory} from 'react-router-dom'

const Cart = (props) => {
    const history = useHistory()
    const bookDetailsHandler = () =>{
        history.push(`/book/${props.id}`)
        
    }
  return (
  <div className={classes.div} onClick={bookDetailsHandler}>
        <h3>{props.title}</h3>
        <img src={props.image} />
        <p>{props.author}</p>
  </div>
  );
};

export default Cart;
