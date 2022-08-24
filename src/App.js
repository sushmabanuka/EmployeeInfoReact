

import Header from "./components/Header";
import New_Login from "./components/New_Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
//import ErrorMsg from "./components/ErrorMsg";
//import Login_Page from "./components/Login_Page";
import Registration from "./components/Registration";
import Success from "./components/Success";
import Home from "./components/Home";
function App() {
  return (
    <div>
 <BrowserRouter>
     <Header></Header>
      <Routes>
        
       
       
           <Route exact path="/Dashboard" element={<Dashboard />}></Route>
           <Route exact path="/New_Login" element={<New_Login />}></Route>
           <Route exact path="/Registration" element={<Registration />}></Route>
           
           <Route exact path="/Success" element={<Success />}></Route>
           <Route exact path="/" element={<Home />}></Route>



         
        
      </Routes>
    </BrowserRouter>
     
</div>
  );
}
 
export default App;
