import './App.css';
import Nav from './Components/nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/footer';
import SignUp from './Components/SignUp';
import PrivatComponent from './Components/PriviteComponents';
import Login from './Components/Login';
import AddProoduct from './Components/AddProoduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivatComponent />}>
            <Route path='/' element={<h1>Product listning Components</h1>} />
            <Route path='/add' element={<AddProoduct />} />
            <Route path='/update' element={<h1>Update Product listning Components</h1>} />
            <Route path='/logout' element={<h1>Logout Product listning Components</h1>} />
            <Route path='/profile' element={<h1>Profile Product listning Components</h1>} />
          </Route>
          <Route path='/signup' element={<SignUp />} />
          
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
