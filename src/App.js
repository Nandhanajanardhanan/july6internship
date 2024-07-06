import logo from './logo.svg';
import './App.css';
import{BrowserRouter,Route,Routes}from 'react-router-dom';
import Calculator from './calc';
import Footer from './footer';
import Register from './register';
import Navbar from './navbar';

function App() {
  return (
 <>

<BrowserRouter>
<Routes>
<Route path='/Register' element={<Register/>}></Route>
<Route path='/Navbar' element={<Navbar/>}></Route>
<Route path='/Calculator' element={<Calculator/>}></Route>
</Routes>
</BrowserRouter>
 </>
  );
}
export default App;
