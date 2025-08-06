import { useState } from 'react'
import '../style/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../layout/Navbar';
import Home from '../pages/home';
import {  BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import AddUser from '../Users/AddUser';
import EditUser from '../Users/EditUser';
import ViewUser from '../Users/ViewUser';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Router>
           <Navbar/>
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/adduser" element={<AddUser/>}/>
              <Route path="/edituser/:id" element={<EditUser />} />
              <Route path="/viewuser/:id" element={<ViewUser />} />
            </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
