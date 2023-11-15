import Header from "./Components/Header/Header";
import './app.css'
import {BrowserRouter,Routes, Route} from "react-router-dom"
import Dashboard from "./Components/Dashboard/Dashboard";
import Campaigns from "./Components/Campaigns/Campaigns";
import Mainlayout from "./Components/Mainlayout/Mainlayout";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Mainlayout/>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/campaigns" element={<Campaigns/>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
