import React, {useState} from 'react'
import {Form, Button, Image} from 'react-bootstrap'
import{ EmailJSResponseStatus, init } from 'emailjs-com';
import emailjs from 'emailjs-com';

init("user_J522WfnahnCpGMojJMqUm");


export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_wqqw9kf', 'template_7haep6i', e.target, 'user_J522WfnahnCpGMojJMqUm')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
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
    
        <Form id="ContactForm" onSubmit={sendEmail}>
            <Form.Group controlId="formBasicEmail">
    <Form.Label>Contact Name</Form.Label>
    <Form.Control type="text" placeholder="First and Last" name="name" />
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Company Name</Form.Label>
    <Form.Control type="text" placeholder="If Applicable" name="buisness" />
  </Form.Group>
  <Form.Group controlId="formBasicAddress">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" name="email"  />
  </Form.Group>
  <Form.Group controlId="formBasicAddress">
    <Form.Label>Phone Number</Form.Label>
    <Form.Control type="phone" placeholder="Enter Phone" name="phone"  />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>How can we help</Form.Label>
    <Form.Control as="textarea" rows={3} name="text" />
  </Form.Group>
  <Button variant="primary" type="submit" className="button">
    Send
  </Button>
</Form>
</div>
</div>
    )
}

// export default Contact

// import React from 'react';
// import emailjs from 'emailjs-com';



// export default function ContactUs() {

//   function sendEmail(e) {
//     e.preventDefault();

//     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   }

//   return (
//     <form className="contact-form" onSubmit={sendEmail}>
//       <input type="hidden" name="contact_number" />
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// }
