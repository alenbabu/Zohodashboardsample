import Header from "./Components/Header/Header";
import SideNavbar from "./Components/SideNavbar/SideNavbar";
import './app.css'
import {BrowserRouter,Routes, Route} from "react-router-dom"
import Dashboard from "./Components/Dashboard/Dashboard";
import Campaigns from "./Components/Campaigns/Campaigns";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <SideNavbar/>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/campaigns" element={<Campaigns/>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
