import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Product from "./pages/Product";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
