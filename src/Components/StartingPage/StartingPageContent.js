import classes from './StartingPageContent.module.css';
import Cart from '../../UI/Cart';
import BookDetails from '../../UI/BookDetails';
import { Route } from 'react-router-dom';
import { Fragment, useContext, useRef } from 'react';
import BookContext from '../../store/book-context';
import Button from '../../UI/Button';
const StartingPageContent = () => {

  const titleRef = useRef();
  const authorRef = useRef()
  const descriptionRef = useRef()

  const bookContext = useContext(BookContext)
  const books = bookContext.getAllBooks()

  // const onAddBookHandler = (e) =>{

  //   e.preventDefault()

  //   const enterTitle = titleRef.current.value
  //   const enterAuthor = authorRef.current.value
  //   const enterDescription = descriptionRef.current.value
  //   const newBook = {
  //     title:enterTitle,
  //     author:enterAuthor,
  //     decription:enterDescription
  //   }
  //   bookContext.addBook(newBook)
  // }

  return (
    <Fragment>
      <section className={classes.starting}>
        {books.map(book=>(<Cart key={book.id} {...book}  />))}
      </section>
    </Fragment>


  );
};

export default StartingPageContent;
