import React, {useState} from 'react'
import {Form, Button, Image} from 'react-bootstrap'


const Contact =()=>{
  const [companyName, setCompanyName]= useState("")
  const [email, setEmail]= useState("")
  const [phone, setPhone]= useState("")
  const [body, setBody] = useState("")
    return (
        <div id="contact">
            <div id="titleC">
            <br></br>
            <div>
            <Image src="./pictures/email.png" width="200px" />
            </div>
                <h1> To contact us for a quote or questions</h1>
                <br></br>
                <h4>By Email: browneco@verizon.net</h4>
                <a href="tel:5554280940">By Phone: (716) 667-0802</a>
                <br></br>
                <Image src="./pictures/bush.png" className="line"/>
                <h1>Or we can contact you</h1>
            </div>

        <div id="form">
    
        <Form>
            <Form.Group controlId="formBasicEmail">
    <Form.Label>Contact Name</Form.Label>
    <Form.Control type="email" placeholder="First and Last" onChange={(event)=> setName(event.target.value)} />
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Company Name</Form.Label>
    <Form.Control type="text" placeholder="If Applicable" onChange={(event)=> setCompanyName(event.target.value)} />
  </Form.Group>
  <Form.Group controlId="formBasicAddress">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={(event)=> setEmail(event.target.value)}  />
  </Form.Group>
  <Form.Group controlId="formBasicAddress">
    <Form.Label>Phone Number</Form.Label>
    <Form.Control type="phone" placeholder="Enter Phone" onChange={(event)=> setPhone(event.target.value)}  />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>How can we help</Form.Label>
    <Form.Control as="textarea" rows={3} onChange={(event)=> setBody(event.target.value)} />
  </Form.Group>
  <Button variant="primary" type="submit" class="button">
    Send
  </Button>
</Form>
</div>
</div>
    )
}

export default Contact