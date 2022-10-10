import axios from 'axios';
import { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import AddEmp from './AddEmp';
import AdminNavbar from './AdminNavbar';
import EmployeeList from './EmployeeList';
const baseUrl = "http://localhost:3000";

function AdminHome() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(baseUrl + "/admin/home").then(response => {
            setData(response.data.result);
        })
            .catch((err) => {
                console.log(err);
            })
    //     axios.put(baseUrl + "/admin", {
    //     })
    //         .then((res) => { console.log("put reqest") })
    //         .catch((err) => { console.log(err) });
     }, [])
    return (
        
        <div className='bg-white ml-3 mr-3 mt-5 mb-2 box'>
            <center><p className="heading">List of Employees</p></center>
            {
                data.map(post => {
                    const { name, Mail } = post;
                    return (
                        <EmployeeList key={post.Mail} name={name} email={Mail} />
                    )
                })
            }
        </div>

    );
}

export default AdminHome;