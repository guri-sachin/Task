
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from './Component/Home';
import Lall from './Component/Lall';

import Detail from './Component/Detail';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        
         
      <Route exact path="/Lall" element={<Lall />}></Route>
         <Route exact path="/" element={<Home />}></Route>
         <Route exact path="/Detail" element={<Detail />}></Route>
     
    
      </Routes>
     </Router>
    </div>
  );
}

export default App;
