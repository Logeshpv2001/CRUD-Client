import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import axios from 'axios';


function Users() {
  const [users,setUsers] = useState([])
  // const id = useParams();
  useEffect(()=>{
    axios.get("http://localhost:3001")
    .then(result => setUsers(result.data))
    .catch(err=> console.log(err))
  },[])

const handleDelete = (id) =>{
  axios.delete('http://localhost:3001/deleteUser/'+id)
  .then(result=>{console.log(result)
    window.location.reload();
  })
  .catch(err => console.log(err))
}

  return (
    <div>
<Link to='/create'>Add +</Link>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user)=>{
              
              return   <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>
                  <Link to={`/update/${user._id}`}>Edit</Link> <br />
                 <button onClick={(e)=>handleDelete(user._id)}>Delete</button>
                </td>
              </tr>
            })
          }
        </tbody>
      </Table>
    </div>
  );
}

export default Users;
