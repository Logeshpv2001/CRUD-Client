import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {deleteUser} from './slices/userSlice'


function Users() {
  const [users, setUsers] = useState([]);

  // const users= useSelector(state => state.users.users)
  const dispatch = useDispatch()

  useEffect(() => {
    axios
      .get("https://crud-server-1-vk1n.onrender.com")
      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("https://crud-server-1-vk1n.onrender.com/deleteUser" + id)
      .then((result) => {
        dispatch(deleteUser({id}))
        console.log(result);
        // setUsers(users.filter((user) => user._id !== id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mt-4">
      <Link to="/create" className="btn btn-primary mb-3">
        Add +
      </Link>
      <div className="row">
        {users.map((user) => (
          <div className="col-md-4 mb-4" key={user._id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">Address: {user.address}</p>
                <p className="card-text">Age: {user.age}</p>
                <p className="card-text">Department: {user.department}</p>
                <p className="card-text">
                  Employment Status: {user.employmentStatus}
                </p>
                <div className="d-flex justify-content-between">
                  <Link
                    to={`/update/${user._id}`}
                    className="btn btn-warning btn-sm"
                  >
                    Edit
                  </Link>
                  <Link
                    to={`/history/${user._id}`}
                    className="btn btn-info btn-sm"
                  >
                    View History
                  </Link>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;

// import React, { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Table from "react-bootstrap/Table";
// import { Link } from "react-router-dom";
// import axios from "axios";

// function Users() {
//   const [users, setUsers] = useState([]);
//   // const id = useParams();
//   useEffect(() => {
//     axios
//       .get("http://localhost:3001")
//       .then((result) => setUsers(result.data))
//       .catch((err) => console.log(err));
//   }, []);

//   const handleDelete = (id) => {
//     axios
//       .delete("http://localhost:3001/deleteUser/" + id)
//       .then((result) => {
//         console.log(result);
//         window.location.reload();
//       })
//       .catch((err) => console.log(err));
//   };

//   return (
//     <div>
//       <Link to="/create">Add +</Link>
//       <Table responsive="sm">
//         <thead>
//           <tr >
//             <th>Name</th>
//             <th>Address</th>
//             <th>Age</th>
//             <th>Department</th>
//             <th>EmploymentStatus</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => {
//             return (
//               <tr key={user._id}>
//                 <td>{user.name}</td>
//                 <td>{user.address}</td>
//                 <td>{user.age}</td>
//                 <td>{user.department}</td>
//                 <td>{user.employmentStatus}</td>

//                 <td>
//                   <Link to={`/update/${user._id}`}>Edit</Link>
//                   <br />
//                   <Link to={`/history/${user._id}`}>View History</Link>
//                   <br/>
//                   <button onClick={() => handleDelete(user._id)}>
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </Table>
//     </div>
//   );
// }

// export default Users;
