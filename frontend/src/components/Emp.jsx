import { Routes, Route } from 'react-router-dom';
import EmpNavbar from './EmpNavbar';
import EmpHome from './EmpHome';
import AddEmp from './AddEmp';
function Emp() {
  return (
    <>
      <div>
      <EmpNavbar/>
        <Routes>
          <Route path='/emp/home' element={<EmpHome/>}></Route>
          <Route path='/emp/addwork' element={<AddEmp/>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default Emp;
