import './App.css';
import FirstPage from './Components/firstPage.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route
 } from "react-router-dom";
import SecondPage from './Components/secondPage.jsx';
function App() {
  return ( 
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="product" element={<SecondPage/>} />
      </Routes>
    </Router>
    
  )
}



export default App;
