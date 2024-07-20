import "./App.css";
import SignalR from "./components/signalR";
import Welcome from "./pages/welcome";
import {  BrowserRouter,Route, Routes } from "react-router-dom";

function App() {
  return (
  <BrowserRouter>
  <div>
    <Routes>
      <Route path="/" element={<Welcome/>}/>
    </Routes>
  </div>
  </BrowserRouter>
  );
}

export default App;
