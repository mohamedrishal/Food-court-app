import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/"  element ={<Home/>} /> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
