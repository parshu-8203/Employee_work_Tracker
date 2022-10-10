
import axios from 'axios';
import {Navigate,useNavigate} from 'react-router-dom'
import ShowEmp from './ShowEmp';

function EmployeeList(props) {
    const navigate = useNavigate();
    function showMe() {
         navigate("/admin/"+props.email);
        
    }
    function deleteMe() {
        console.log("delete clicked", props.email);
        axios.delete('http://localhost:3000/admin/'+props.email)
        .then((res) => {
            <Navigate to="/admin"></Navigate>
        })
        .catch((err) => console.log(err));
    }
    return (
        <div className="container">
        <center>
            <div className="row">
                <div className="col-md-8">
                    <div className="employee-list">
                        <div className="row list">
                            <div className="col-md-2 col-sm-2">
                                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="user" className="profile-photo-lg" />
                            </div>
                            <div className="col-md-7 col-sm-7">
                                <h5>{props.name}</h5>
                                <p >{props.email}</p>
                            </div>
                            <div className="col-md-3 col-sm-3">
                                <button className="btn btn-primary btn-info mr-2 mb-2" name={props.email} onClick={showMe}>Track</button>
                                <button className="btn btn-primary btn-danger mr-2 mb-2" name={props.email} onClick={deleteMe}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </center>
        </div>
    );
}

export default EmployeeList;