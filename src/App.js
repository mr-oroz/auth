import React, {useEffect, useState} from 'react';
import Register from "./components/auth/register";
import './app.css'
import Login from "./components/auth/login";
import authService from "./server/aut-service";
import Cookies from 'js-cookie';
import { Link, Route, Routes} from "react-router-dom";

const App = () => {
    const [user, setUser] = useState('')
    useEffect(() => {
        login()
    })
    const login = () => {
        authService.getUser().then(data => {
            setUser(data.data.firstName)
        })
    }
    const logout = () => {
        setUser('')
        Cookies.remove('token')
    }
    return (
            <div>
                {user ?
                    <div>
                        <h1>{user}</h1>
                        <button onClick={logout}>logout</button>
                    </div>
                    :
                    <div>
                        <Link to={'/register'}>
                            <button>register</button>
                        </Link>
                        <Link to={'/login'}>
                            <button>login</button>
                        </Link>
                    </div>
                }
                <Routes>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/login' element={<Login login={login}/>}/>
                </Routes>
            </div>
    );
};

export default App;