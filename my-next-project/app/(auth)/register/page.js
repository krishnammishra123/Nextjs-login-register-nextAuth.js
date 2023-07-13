"use client"
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react'
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { toast } from "react-toastify";

const Register = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");

 const handleSubmit = async (e) => {
   e.preventDefault();
   try {
     const userDetails = {
       email,
       password,
       name,
       address,
       city,
       state,
       pincode,
     };
     const res = await axios.post("/api/register", userDetails);
     const { message,status } = res.data;
     if (status === 200) {
        toast.success(message);
       setEmail("");
       setPassword("");
       setName("");
       setAddress("");
       setCity("");
       setState("");
       setPincode("");
     } else if (status === 400 || status === 404) {
       toast.warning(message);
     } else {
       toast.warning(message);
     }
   } catch (err) {
     console.log(err);
   }
 };



  return (
    <div>
      <h3 className="my-3 text-center font-serif">
        Welcome to the Register Page
      </h3>
      <Form className="max-w-3xl m-auto" onSubmit={handleSubmit}>
        <Row className="mb-3 mt-4">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control
            placeholder="Apartment, studio, or floor"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
  <Form.Label>State</Form.Label>
  <Form.Control
    as="select"
    value={state}
    onChange={(e) => setState(e.target.value)}
  >
    <option value="">Choose...</option>
    <option value="MadhyaPradesh">MadhyaPradesh</option>
    <option value="Maharashtra">Maharashtra</option>
    <option value="Rajsthan">Rajsthan</option>
    <option value="Gujrat">Gujrat</option>
  </Form.Control>
</Form.Group>


          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Register