import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/Login" element={<Login />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
