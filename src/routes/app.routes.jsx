import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'
import { New } from '../pages/New'
import { Profile } from '../pages/Profile'
import { Details } from '../pages/Details'



export function AppRoutes(){
    return(
        <Routes>
            <Route path="/new" element={<New />}/>
            <Route path="/profile" element={<Profile />}/>
            <Route path="/details/:id" element={<Details />}/>
            <Route path="/home" element={ <Home /> }/>
            <Route path="/" element={ <SignIn /> }/>
            <Route path="/register" element={ <SignUp /> }/>
        </Routes>
    )
}