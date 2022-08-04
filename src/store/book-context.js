import { createContext, useState } from "react";

const Dummy_Books =[
    {
      id:1,
      title:'Python',
      author:'Guido van Rossum',
      description:'Python is dynamically-typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly procedural), object-oriented and functional programming. It is often described as a "batteries included" language due to its comprehensive standard library',
      image:'data:image/jpeg;base64,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'
    },
    {
      id:2,
      title:'java',
      author:'James Gosling',
      description:'Python is dynamically-typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly procedural), object-oriented and functional programming. It is often described as a "batteries included" language due to its comprehensive standard library',
      image:'https://m.media-amazon.com/images/I/514axA2lwpL.jpg'
    },
    {
      id:3,
      title:'Angular',
      author:'Guido van Rossum',
      description:'Python is dynamically-typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly procedural), object-oriented and functional programming. It is often described as a "batteries included" language due to its comprehensive standard library',
      image:'https://images-na.ssl-images-amazon.com/images/I/718rCk+pGeL.jpg'
    },
    {
      id:4,
      title:'JavaScript',
      author:'Guido van Rossum',
      description:'Python is dynamically-typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly procedural), object-oriented and functional programming. It is often described as a "batteries included" language due to its comprehensive standard library',
      image:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1393223714l/460907.jpg'
    },
    {
      id:5,
      title:'Go',
      author:'Guido van Rossum',
      description:'Python is dynamically-typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly procedural), object-oriented and functional programming. It is often described as a "batteries included" language due to its comprehensive standard library',
      image:'https://camo.githubusercontent.com/0eab9f4149f2481e91700c56fc015169f11f81fe5eb6534948a04bf1e57ac0c1/687474703a2f2f676f706c2e696f2f636f7665722e706e67'
    },
    {
      id:6,
      title:'c',
      author:'Guido van Rossum',
      description:'Python is dynamically-typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly procedural), object-oriented and functional programming. It is often described as a "batteries included" language due to its comprehensive standard library',
      image:'https://images-na.ssl-images-amazon.com/images/I/411ejyE8obL._SX377_BO1,204,203,200_.jpg'
    },
    {
      id:7,
      title:'React',
      author:'Guido van Rossum',
      description:'Python is dynamically-typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly procedural), object-oriented and functional programming. It is often described as a "batteries included" language due to its comprehensive standard library',
      image:'https://miro.medium.com/max/990/0*BOy-EA_tf45TrdUW.jpg'
    },
    {
      id:8,
      title:'Laravel',
      author:'Guido van Rossum',
      description:'Python is dynamically-typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly procedural), object-oriented and functional programming. It is often described as a "batteries included" language due to its comprehensive standard library',
      image:'https://m.media-amazon.com/images/I/41R3f1PUlEL._SL500_.jpg'
    },
    {
      id:9,
      title:'C#',
      author:'Guido van Rossum',
      description:'Python is dynamically-typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly procedural), object-oriented and functional programming. It is often described as a "batteries included" language due to its comprehensive standard library',
      image:'data:image/jpeg;base64,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'
    },
    {
      id:10,
      title:'C++',
      author:'Guido van Rossum',
      description:'Python is dynamically-typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly procedural), object-oriented and functional programming. It is often described as a "batteries included" language due to its comprehensive standard library',
      image:'https://images-na.ssl-images-amazon.com/images/I/51hH6DAw87L.jpg'
    },
    {
      id:11,
      title:'JavaScript',
      author:'Guido van Rossum',
      description:'Python is dynamically-typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly procedural), object-oriented and functional programming. It is often described as a "batteries included" language due to its comprehensive standard library',
      image:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1393223714l/460907.jpg'
    },
    {
      id:12,
      title:'Go',
      author:'Guido van Rossum',
      description:'Python is dynamically-typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly procedural), object-oriented and functional programming. It is often described as a "batteries included" language due to its comprehensive standard library',
      image:'https://camo.githubusercontent.com/0eab9f4149f2481e91700c56fc015169f11f81fe5eb6534948a04bf1e57ac0c1/687474703a2f2f676f706c2e696f2f636f7665722e706e67'
    },
    {
      id:13,
      title:'JavaScript',
      author:'Guido van Rossum',
      description:'Python is dynamically-typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly procedural), object-oriented and functional programming. It is often described as a "batteries included" language due to its comprehensive standard library',
      image:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1393223714l/460907.jpg'
    },
    {
      id:14,
      title:'Go',
      author:'Guido van Rossum',
      description:'Python is dynamically-typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly procedural), object-oriented and functional programming. It is often described as a "batteries included" language due to its comprehensive standard library',
      image:'https://camo.githubusercontent.com/0eab9f4149f2481e91700c56fc015169f11f81fe5eb6534948a04bf1e57ac0c1/687474703a2f2f676f706c2e696f2f636f7665722e706e67'
    },
    {
      id:15,
      title:'JavaScript',
      author:'Guido van Rossum',
      description:'Python is dynamically-typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly procedural), object-oriented and functional programming. It is often described as a "batteries included" language due to its comprehensive standard library',
      image:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1393223714l/460907.jpg'
    },
    {
      id:16,
      title:'Go',
      author:'Guido van Rossum',
      description:'Python is dynamically-typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly procedural), object-oriented and functional programming. It is often described as a "batteries included" language due to its comprehensive standard library',
      image:'https://camo.githubusercontent.com/0eab9f4149f2481e91700c56fc015169f11f81fe5eb6534948a04bf1e57ac0c1/687474703a2f2f676f706c2e696f2f636f7665722e706e67'
    },
    {
      id:17,
      title:'JavaScript',
      author:'Guido van Rossum',
      description:'Python is dynamically-typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly procedural), object-oriented and functional programming. It is often described as a "batteries included" language due to its comprehensive standard library',
      image:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1393223714l/460907.jpg'
    },
    {
      id:18,
      title:'Go',
      author:'Guido van Rossum',
      description:'Python is dynamically-typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly procedural), object-oriented and functional programming. It is often described as a "batteries included" language due to its comprehensive standard library',
      image:'https://camo.githubusercontent.com/0eab9f4149f2481e91700c56fc015169f11f81fe5eb6534948a04bf1e57ac0c1/687474703a2f2f676f706c2e696f2f636f7665722e706e67'
    }
  ]

  const usersBook =[
    {
       userId:'customer1',
       books:[
            {
              purchasId:'java1@1',
                id:2,
                title:'java',
                author:'James Gosling',
                description:'Python is dynamically-typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly procedural), object-oriented and functional programming. It is often described as a "batteries included" language due to its comprehensive standard library',
                image:'https://m.media-amazon.com/images/I/514axA2lwpL.jpg',
                type:'borrow'
            },
            {
                purchasId:'Angular1@1',
                id:1,
                title:'Angular',
                author:'Guido van Rossum',
                description:'Python is dynamically-typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly procedural), object-oriented and functional programming. It is often described as a "batteries included" language due to its comprehensive standard library',
                image:'https://images-na.ssl-images-amazon.com/images/I/718rCk+pGeL.jpg',
                type:'borrow'
            },
            {
                purchasId:'Angular3@1',
                id:3,
                title:'Angular',
                author:'Guido van Rossum',
                description:'Python is dynamically-typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly procedural), object-oriented and functional programming. It is often described as a "batteries included" language due to its comprehensive standard library',
                image:'https://images-na.ssl-images-amazon.com/images/I/718rCk+pGeL.jpg',
                type:'buy'
            }
        ]
    },
    {
      userId:'customer2',
      books:[
           {
                purchasId:'java1@2',
               id:2,
               title:'java',
               author:'James Gosling',
               description:'Python is dynamically-typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly procedural), object-oriented and functional programming. It is often described as a "batteries included" language due to its comprehensive standard library',
               image:'https://m.media-amazon.com/images/I/514axA2lwpL.jpg',
               type:'borrow'
           },
           {
               purchasId:'Angular1@2',
               id:1,
               title:'Angular',
               author:'Guido van Rossum',
               description:'Python is dynamically-typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly procedural), object-oriented and functional programming. It is often described as a "batteries included" language due to its comprehensive standard library',
               image:'https://images-na.ssl-images-amazon.com/images/I/718rCk+pGeL.jpg',
               type:'buy'
           }
       ]
   }
  ]



export const BookContextProvider = (props) =>{
    const [books,setBooks] = useState(Dummy_Books)
    const [usersBooks,setUsersBooks] = useState(usersBook)

    const addBookHandler = (book) =>{
        const newBook  = {
            id:books.length+1,
            title:book.title,
            author:book.author,
            description:book.description,
            image:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1393223714l/460907.jpg'
        }
        const newBooks = books.concat(newBook)
        setBooks(newBooks)
    }
    const getBookHandler = (id) =>{
        const book = books.find(book=>book.id === +id)
        return {...book}
    }

    const deleteBookHandler = (id) =>{
        const newBooks = books.filter(book=>book.id !== id)
        setBooks(newBooks)
    }
    const getAllBooksHandler = ()=>{
        return [...books]
    }
    const editBookHandler = (id,book) =>{
        const oldBooks = [...books];
        const bookIndex = oldBooks.findIndex(book=>book.id === id)
        oldBooks[bookIndex] ={
            id:id,
            title:book.title,
            author:book.author,
            description:book.description
        }
        setBooks(oldBooks)
    }

    const buyBookHandler = (Data) =>{
      usersBook.find(userBook => userBook.userId === Data.userId).books.push({...Data.book,purchasId:Math.random().toString(),type:'buy'})
      setUsersBooks(usersBooks)
    }

    const borrowBookHandler = (Data) => {
      usersBook.find(userBook => userBook.userId === Data.userId).books.push({...Data.book,purchasId:Math.random().toString(),type:'borrow'})
      setUsersBooks(usersBooks)
    }

    const getUserBooksHandler = (userId) =>{
      let Books;
        if(userId === 'customer1' || userId === 'customer2' )
        {
            Books = usersBooks.find(user => user.userId === userId).books
            return [...Books]
        }

        return null
        
    }

    const bookContextValues = {
        addBook:addBookHandler,
        getBook:getBookHandler,
        deleteBook:deleteBookHandler,
        getAllBooks:getAllBooksHandler,
        editBook:editBookHandler,
        buyBook:buyBookHandler,
        borrowBook:borrowBookHandler,
        getUserBooks:getUserBooksHandler
    }
    return <BookContext.Provider value={bookContextValues}>{props.children}</BookContext.Provider>
}

const BookContext = createContext({
    addBook:(book)=>{},
    getBook:(id)=>{},
    deleteBook:(id)=>{},
    getAllBooks:()=>{},
    editBook:(id)=>{},
    buyBook:(book,user)=>{},
    borrowBook:(book,user)=>{},
    getUserBooks:(user)=>{}
})

export default BookContext