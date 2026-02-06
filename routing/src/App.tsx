import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Error from "./pages/Error"
import Navbar from "./components/Navbar"

const App: React.FC = () => {
  return (

  <>
  <Navbar />
   <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/about" element={<About />} />
     <Route path="/contact" element={<Contact />} />
     <Route path="/login" element={<Login />} />
     <Route path="*" element={<Error />} />
   </Routes>
  </>
  )
}

export default App