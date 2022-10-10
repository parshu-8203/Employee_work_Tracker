import AdminNavbar from "./AdminNavbar";
import { useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from "react-router-dom";

function AddEmp() {
    const navigate = useNavigate();
    const baseUrl = "http://localhost:3000";
    const [details, setDetails] = useState({
        name: "",
        Mail: "",
        Contact: "",
        Password: "",
        Department: "",
        JoiningDate: ""
    });
    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        setDetails((prev) => {
            return { ...prev, [name]: value }
        })
    };
    function handleSubmit(event) {
        event.preventDefault();
        axios.post(baseUrl + "/addemp", {
            name: details.name,
            Mail: details.Mail,
            Contact: details.Contact,
            Password: details.Password,
            Department: details.Department,
            JoiningDate: details.JoiningDate
        })
            .then(res => {
                if(res.status === 200)
                {
                    console.log("Successfully Added");
                }
                else
                {
                    console.log("Failed to Add");
                }
            })
            .catch((err) => {
                console.log(err);
            });

        navigate('/admin')

    }
    return (
        <div>
            <div className="bg-white ml-3 mr-3 mt-4 box">
                <center><p className="heading">Add Employee</p></center>
                <form className="addForm" onSubmit={handleSubmit} method="post">
                    <div className="form-group floating">
                        <input type="text" name="name" className="form-control floating inp1" id="Input1" onChange={handleChange} value={undefined} required />
                        <label for="Input1">NAME</label>
                    </div>
                    <div className="form-group floating">
                        <input type="email" name="Mail" className="form-control floating inp1" id="Input2" onChange={handleChange} required />
                        <label for="Input2">MAIL</label>
                    </div>
                    <div className="form-group floating">
                        <input type="tel" name="Contact" className="form-control floating inp1" id="Input3" onChange={handleChange} required />
                        <label for="Input3">CONTACT NO</label>
                    </div>
                    <div className="form-group floating">
                        <input type="password" name="Department" className="form-control floating inp1" onChange={handleChange} id="Input4" required />
                        <label for="Input4">PASSWORD</label>
                    </div>
                    <div className="form-group floating">
                        <input type="text" name="Password" className="form-control floating inp1" onChange={handleChange} id="Input5" required />
                        <label for="Input5">DEPARTMENT</label>
                    </div>
                    <div className="form-group floating">
                        <input type="date" name="JoiningDate" className="form-control floating inp1" onChange={handleChange} id="Input36" required />
                        <label for="Input6">JOINING DATE</label>
                    </div>
                    <button type="reset" className="btn btn-primary">clear</button>
                    <button type="submit" className="btn btn-primary">submit</button>
                </form>
                {/* <Entry type="text" field="NAME" onChange={handleChange} value={name|| undefined}/>
                <Entry type="email" field="MAIL"/>
                <Entry type="tel" field="CONTACT NO"></Entry>
                <Entry type="password" field="PASSWORD"></Entry>
                <Entry type="text" field="DEPARTMENT"></Entry>
                <Entry type="text" field="JOINING DATE"></Entry> */}
            </div>
        </div>
    );
}


export default AddEmp;