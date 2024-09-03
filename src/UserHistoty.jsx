import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";

function UserHistory() {
  const { id } = useParams(); // Get the user ID from URL params
  const [history, setHistory] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/userHistory/${id}`)
      .then((result) => setHistory(result.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      <h2>User History</h2>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Age</th>
            <th>Department</th>
            <th>Employment Status</th>
            <th>Updated At</th>
          </tr>
        </thead>
        <tbody>
          {history.map((record) => (
            <tr key={record._id}>
              <td>{record.name}</td>
              <td>{record.address}</td>
              <td>{record.age}</td>
              <td>{record.department}</td>
              <td>{record.employmentStatus}</td>
              <td>{new Date(record.updatedAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default UserHistory;
