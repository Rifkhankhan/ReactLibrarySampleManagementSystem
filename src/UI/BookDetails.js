import React, { useContext } from "react";
import {  useParams } from "react-router-dom";
import AuthContext from "../store/auth-context";
import classes from './BookDetails.module.css'
import Button from "./Button";
import BookContext from '../store/book-context'

const BookDetails = (props) => {

    const bookContext = useContext(BookContext)

    const params = useParams()
    const authContext = useContext(AuthContext)
    const book = bookContext.getBook(params.bookId)
    const userId = authContext.token

    const onBuyBookHandler = () =>{
        if(authContext.isLoggedIn)
        {
          bookContext.buyBook({book:book,userId:userId})
        }
    }
    const onBorrowBookHandler = () =>{
        if(authContext.isLoggedIn)
        {
          bookContext.borrowBook({book:book,userId:userId})
        }
    }

    const formSubmitHandler = (e)=>{
        e.preventDefault()

    }


    return <div className={classes.parantDiv}>
    <div className={classes.imagecart}>
        <h1>{book.title}</h1>
        <img src={book.image} className={classes.image} alt={book.title}/>
        <h2>{book.author}</h2>
        <p>{book.description}</p>
    
    </div>
    
    <form onSubmit={formSubmitHandler}>
        <div className={classes.button}>
           <Button type="submit" onClick={onBuyBookHandler}>Buy</Button>
           <Button type="submit" onClick={onBorrowBookHandler}>Borrow</Button>
        </div>
    </form>
  </div>;
};

export default BookDetails;
