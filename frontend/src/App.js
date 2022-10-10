import Admin from "./components/Admin";
import Emp from "./components/Emp";
import {Routes,Route} from 'react-router-dom';
import EmpHome from "./components/EmpHome";

function App() {
  return (
      <Routes>
        <Route path="/admin" element={<Admin/>}></Route>
        <Route path="/emp" element={<Emp/>}></Route>

      </Routes>
  );
}

export default App;



// login page
// admin HOme 
// adming emp click 
// adming add emp 
// adming logout -> login page
// employee hOme = Dashboards
// employee addWork