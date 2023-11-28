import logo from './logo-transparent-clean.png';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Items from './Pages/Items';
import History from './Pages/History';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import ItemRegistration from './Pages/ItemRegistration';
import ItemDetails from './Pages/ItemDetails';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/dashboard" element={<Dashboard/>}>
                  <Route path="itemreg" element={<ItemRegistration />} />
                  <Route path="items" element={<Items />} />
                  <Route path="history" element={<History />} />
                  <Route path="ItemList/edit/:id" element={<ItemDetails />} />
            </Route>
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
