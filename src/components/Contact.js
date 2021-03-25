import React, {useState} from 'react'
import {Form, Button, Image} from 'react-bootstrap'
import{ EmailJSResponseStatus, init, emailjs } from 'emailjs-com';
init("user_J522WfnahnCpGMojJMqUm");


const Contact =()=>{
  const [companyName, setCompanyName]= useState("")
  const [name, setName]= useState("")
  const [email, setEmail]= useState("")
  const [phone, setPhone]= useState("")
  const [body, setBody] = useState("")

  function handleSubmit(event){
      event.preventDefault()
      emailjs.sendForm("default_service","template_7haep6i","ContactForm")
  }


    return (
        <div id="contact">
            <div id="titleC">
            <br></br>
            {/* <div> */}
            {/* <Image src="./pictures/email.png" width="200px" /> */}
            {/* </div> */}
                <h1> To Contact Us For a Quote or Questions</h1>
                <br></br>
                <Image src="./pictures/email.png" className="icon" fluid /> 
                <br></br>
                 <a href="mailto:crowleylandscaping716@gmail.com">crowleylandscaping716@gmail.com</a>
                 <br></br>
                 <br></br>
                <Image src="./pictures/phone.png" className="icon" fluid /> 
                <br></br>
                 <a href="tel:7164272060">(716) 427-2060</a>
                <br></br>

                <Image src="./pictures/bush.png" className="line"/>
                <br></br>
                <br></br>
                <h1>Or we can contact you</h1>
            </div>

        <div id="form">
    
        <Form id="ContactForm" onSubmit={()=>handleSubmit()}>
            <Form.Group controlId="formBasicEmail">
    <Form.Label>Contact Name</Form.Label>
    <Form.Control type="text" placeholder="First and Last" onChange={(event)=> setName(event.target.value)} />
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