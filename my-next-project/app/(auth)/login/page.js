'use client'
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import{ signIn }from "next-auth/react";
// import { toast } from "react-toastify";
// import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Login = () => {
   const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const data = await signIn("credentials", { redirect: false, email, password });
      setEmail('')
      setPassword('');
      router.push('/user/home');
      toast.success("User Login Suceesfully");
    } catch (err) {
      console.log(err);
    }
    
  }
  
  return (
    <>
      <h3 className="text-center font-sans mt-4 mb-3">Please Login Here</h3>
      <Form className="max-w-3xl m-auto" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Login;
