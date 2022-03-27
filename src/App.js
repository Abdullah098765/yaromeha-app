import MyApp from './myapp';
import Login from './login';
import Register from './register';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './dashboard';





function App() {




  return (
    <div >


    <Routes>
      <Route path="/" element={<Register/>} />
      <Route path="login" element={<Login/>} />
      <Route path="register" element={<Register/>} />
      <Route path="dashboard" element={<Dashboard/>} />
    </Routes>

     
      


     
    </div>
  );
}

export default App;
