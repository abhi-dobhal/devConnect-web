// import NavBar from "./components/NavBar"
import { BrowserRouter,Route,Routes } from "react-router"
import Body from "./Body"
import Profile from "./components/Profile"
import Login from "./components/Login"

function App() {

  return (
    <>
    {/* <NavBar></NavBar> */}
<BrowserRouter>
    <Routes>
         <Route path="/" element={<Body/>} >
         <Route path="/login" element={<Login/>} />
         <Route path="/profile" element={<Profile/>}/>
         </Route>
  
    </Routes>
</BrowserRouter>     
    </>
  )
}

export default App
