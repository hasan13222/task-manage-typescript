import { BrowserRouter, Route, Routes } from "react-router-dom"
import Root from "../pages/Root/Root"
import Home from "../pages/Home/Home"
import Login from "../pages/Login/Login"
import SignUp from "../pages/SignUp/SignUp"
import ContactUs from "../pages/ContactUs/ContactUs"
import AboutUs from "../pages/AboutUs/AboutUs"
import PrivateRoute from "./PrivateRoute"
import Dashboard from "../pages/Dashboard/Dashboard"

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Root/>} >
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<AboutUs/>} />
                <Route path="/contact" element={<ContactUs/>} />
                <Route path="/signup" element={<SignUp/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/dashboard" element={<PrivateRoute>
                  <Dashboard/>
                </PrivateRoute>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router