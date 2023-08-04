import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export function MyForm() {
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[name,setName] = useState("");
    const[age,setAge] = useState("");
    // const[file,setFile] = useState("");


    const handelClick = (e)=>{
      e.preventDefault();

      alert(name);
    }

  return (
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" value={email}  onChange={(e)=>setEmail(e.target.value)}/>
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>NAME</Form.Label>
      <Form.Control type="text" placeholder="Password"  value={name} onChange={(e)=>setName(e.target.value)} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Age</Form.Label>
      <Form.Control type="number" placeholder="Password" value={age} onChange={(e)=>setAge (e.target.value)}/>
    </Form.Group>
    {/* <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>file</Form.Label>
      <Form.Control type="file"  value={file} onChange={(e)=>setFile (e.target.files[0])}/>
    </Form.Group> */}
  

    <Button variant="primary" type="submit" onClick={handelClick}>
      Submit
    </Button>
  </Form>
  )
}

