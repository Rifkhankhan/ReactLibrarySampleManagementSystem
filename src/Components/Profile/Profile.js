import React, { Fragment, useContext } from "react";
import BookContext from "../../store/book-context";
import Cart from "../../UI/Cart";
import classes from './Profile.module.css'

const Profile = () => {
  const bookContext = useContext(BookContext)
  const userId = localStorage.getItem('token')
  const userBooks = bookContext.getUserBooks(userId)
  console.log(userBooks);
    return (
      <Fragment>
        <section className={classes.starting}>
          {userBooks.map(book=>(<Cart key={book.id} {...book}  />))}
        </section>
    </Fragment>

      );
};

export default Profile;
