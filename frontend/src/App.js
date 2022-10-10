import Admin from "./components/Admin";
import Emp from "./components/Emp";
import {Routes,Route} from 'react-router-dom';
import EmpHome from "./components/EmpHome";
import AdminHome from "./components/AdminHome";
import Login  from "./components/Login";
import AddEmp from "./components/AddEmp";
import AdminNavbar from "./components/AdminNavbar";
import ShowEmp from "./components/ShowEmp";
function App() {
  return (
      <>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/admin" element={<Admin/>}></Route>
        <Route path="/emp" element={<Emp/>}></Route>
        <Route path="/admin/home" element={<AdminHome/>}></Route>
        <Route path="/admin/addemp" element={<AddEmp/>}></Route>
        <Route path="/admin/:value" element={<ShowEmp/>}></Route>
      </Routes>
      </>
  );
}

export default App;





// adming logout -> login page
// employee hOme = Dashboards
// employee addWork