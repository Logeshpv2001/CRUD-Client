import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from "react-router-dom";
import { addUser } from "./slices/userSlice";
import { useDispatch, useSelector } from "react-redux";



function UpdateUser() {
  const { id } = useParams();
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [department, setDepartment] = useState();
  const [age, setAge] = useState();
  const [employmentStatus, setEmploymentStatus] = useState("");
  const navigate = useNavigate();


  useEffect(() => {
    axios
      .get("https://crud-server-1-vk1n.onrender.com/" + id)
      .then((result) => {
        console.log(result);
        setName(result.data.name);
        setAddress(result.data.address)
        setAge(result.data.age);
        setDepartment(result.data.department)
        setEmploymentStatus(result.data.employmentStatus);
      })
      .catch((err) => console.log(err));
  }, []);



  const dispatch = useDispatch();

  const Update = (e) => {
    e.preventDefault();
    axios
      .put("https://crud-server-1-vk1n.onrender.com/" + id, {
        name,
        age,
        address,
        department,
        employmentStatus,
      })
      .then((result) => {
        dispatch(addUser(result.data))
        console.log(result);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Form onSubmit={Update}>
      <h2>Update User</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter address"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
        <Form.Text className="text-muted">
          We'll never share your address with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Age</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter age"
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Department</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter department"
          value={department}
          onChange={(e) => {
            setDepartment(e.target.value);
          }}
        />
        <Form.Text className="text-muted">
          We'll never share your department with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmploymentStatus">
        <Form.Label>Employment Status</Form.Label>
        <Form.Control
          as="select"
          value={employmentStatus}
          onChange={(e) => setEmploymentStatus(e.target.value)}
        >
          <option value="">Select Employment Status</option>
          <option value="Remote Location">Remote Location</option>
          <option value="Contract Employee">Contract Employee</option>
          <option value="Full-Time">Full-Time</option>
        </Form.Control>
      </Form.Group>

      <Button variant="primary" type="submit">
        Update
      </Button>
    </Form>
  );
}

export default UpdateUser;
