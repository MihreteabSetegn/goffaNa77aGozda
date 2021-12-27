import React from 'react';
import { Form, Button } from "semantic-ui-react";
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';




const Contact = () => {

    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_tgkwgs8', 'template_n3uiaib', e.target, "user_n7BmF1xQaancBKKHXbPey")
          .then((result) => {
            console.log(result.text);
            Swal.fire({
              icon: 'success',
              title: 'Thank you for your message, we will get back to you ASAP'
            })
          }, (error) => {
            console.log(error.text);
            Swal.fire({
              icon: 'error',
              title: 'Ooops, something went wrong',
              text: error.text,
            })
          });
        e.target.reset()
      };

    return (
        <div className="container border"
        style={{
          marginTop: "50px",
          width: "50%",
          height: "50%",
          marginBottom: "50px",
        }}>
        <h1 style={{marginTop: "25px", color: "white", fontFamily: "cursive"}}>Reach Out to Us</h1>
        <Form onSubmit={handleOnSubmit} className="row" style={{marginBottom: "10px", marginTop: "10px", marginRight: "10px", marginLeft: "10px"}}>
          <lable style={{color: "white", fontFamily: "cursive"}}>Name</lable>
          <input
            type='text'
            name='from_name'
            placeholder='your name'
            className="form-control"
          />
          <lable style={{color: "white", fontFamily: "cursive"}}>Email</lable>
          <input
            type='text'
            name='to_name'
            placeholder='ex: email@email.com'
            className="form-control"
          />
          <lable style={{color: "white", fontFamily: "cursive"}}>Message</lable>
          <textarea
            type='text'
            name='reply_to'
            rows='4'
            className="form-control"
            placeholder='your message'
            required
          />
          <Button type='submit' color='green' className="form-control btn btn-primary" style={{fontFamily: "cursive"}}>Submit</Button>
        </Form>
      </div>
    );
}

export default Contact;
