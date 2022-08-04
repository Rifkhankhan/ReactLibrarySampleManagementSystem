import { createContext, useState } from "react";

const users = [
    {
        userId:'admin',
        name:'Admin',
        email:'admin@gmail.com',
        password:'admin@123',
        role:'admin'
    },
    {
        userId:'librarian1',
        name:'Librarian 1',
        email:'librarian1@gmail.com',
        password:'librarian1@123',
        role:'employee'
    },
    {
        userId:'librarian2',
        name:'Librarian 2',
        email:'librarian2@gmail.com',
        password:'librarian2@123',
        role:'employee'
    },
    {
        userId:'customer1',
        name:'Customer 1',
        email:'customer1@gmail.com',
        password:'customer1@123',
        role:'customer'
    },
    {
        userId:'customer2',
        name:'Customer 2',
        email:'customer2@gmail.com',
        password:'customer2@123',
        role:'customer'
    }
]
const checkUserData = (userData) =>{

    const isUserEmailExist = users.find(user=>user.email === userData.email)
    const isUserPasswordEXist = users.find(user=>user.password===userData.password)
    let token;
    if(isUserEmailExist && isUserPasswordEXist)
    {
        token = users.find(user=>user.email === userData.email).userId
        const role = users.find(user=>user.email === userData.email).role
        localStorage.setItem('role',role)
    }
    return token
}

export const AuthContextProvider = (props) =>{
    const initialToken = localStorage.getItem('token')
    const [token,setToken]  = useState(initialToken)
    
    const loginHandler = (userData) =>{
        const token = checkUserData(userData)
       
        setToken(token)
        localStorage.setItem('token',token)
    }

    const loguotHandler = () =>{
        setToken(null)
        localStorage.removeItem('token')
        localStorage.removeItem('role')
    }

    const contextValues = {
        token:token,
        login:loginHandler,
        logout:loguotHandler,
        isLoggedIn:!!token
    }

    return <AuthContext.Provider value={contextValues}>{props.children}</AuthContext.Provider>
}

const AuthContext = createContext({
    login:(token)=>{},
    logout:()=>{},
    token:'',
    isLoggedIn:false
})

export default AuthContext;
