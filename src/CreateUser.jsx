import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from 'axios';
import  {useNavigate } from 'react-router-dom';

// import axios from "axios";

function CreateUser() {
  const [name,setName] = useState()
  const [email,setEmail] = useState()
  const [age,setAge] = useState()
  const navigate = useNavigate();

  const Submit = (e) =>{
    e.preventDefault();
    axios.post("https://crud-server-7zzb.onrender.com/createUser" , {name,email,age})
    .then(result => {console.log(result)
      navigate('/')
    })
    .catch(err=> console.log(err))

  }

  return (
    <Form onSubmit={Submit}>
    <h2>Create User</h2>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder="Enter name" onChange={(e)=>setName(e.target.value)} />
      <Form.Text className="text-muted"></Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Age</Form.Label>
      <Form.Control type="text" placeholder="Enter age" onChange={(e)=>setAge(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      {/* <Form.Check type="checkbox" label="Check me out" /> */}
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  );
}

export default CreateUser;
