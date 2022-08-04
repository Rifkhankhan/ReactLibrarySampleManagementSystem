import { createContext, useState } from "react";


export const BookContextProvider = (props) =>{

    const initialToken = localStorage.getItem('token')
    const [token,setToken]  = useState(initialToken)
    
    const loginHandler = (token) =>{
        setToken(token)
        localStorage.setItem('token',token)
    }

    const loguotHandler = () =>{
        setToken(null)
        localStorage.removeItem('token')
    }

    const contextValues = {
        token:token,
        login:loginHandler,
        logout:loguotHandler,
        isLoggedIn:!!token
    }

    return <BookContext.Provider value={contextValues}>{props.children}</BookContext.Provider>
}

const BookContext = createContext({
    login:(token)=>{},
    logout:()=>{},
    token:'',
    isLoggedIn:false
})

export default BookContext;
