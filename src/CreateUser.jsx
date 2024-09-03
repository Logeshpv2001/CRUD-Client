import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { addUser } from "./slices/userSlice";
import { useDispatch } from "react-redux";

function CreateUser() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const [department, setDepartment] = useState("");
  const [employmentStatus, setEmploymentStatus] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("https://crud-server-1-vk1n.onrender.com/createUser", {
        name,
        address,
        age,
        department,
        employmentStatus,
      })
      .then((result) => {
        dispatch(addUser(result.data));
        console.log(result);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Form onSubmit={Submit}>
      <h2>Create User</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Address"
          value={address}
          required
          onChange={(e) => setAddress(e.target.value)}
        />
        <Form.Text className="text-muted">
          We'll never share your address with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Age</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Age"
          value={age}
          required
          onChange={(e) => setAge(e.target.value)}
        />
        <Form.Text className="text-muted">
          We'll never share your Age with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Department</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter department"
          value={department}
          // required
          onChange={(e) => setDepartment(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmploymentStatus">
        <Form.Label>Employment Status</Form.Label>
        <Form.Control
          as="select"
          value={employmentStatus}
          required
          onChange={(e) => setEmploymentStatus(e.target.value)}
        >
          <option value="">Select Employment Status</option>
          <option value="Remote Location">Remote Location</option>
          <option value="Contract Employee">Contract Employee</option>
          <option value="Full-Time">Full-Time</option>
        </Form.Control>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default CreateUser;
