import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import './App.css';
import { db } from "../fire";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
import fire from "../fire";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const history = useHistory();
  const [loader, setLoader] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
       .add({
         name: name,
         email: email,
         subject: subject,
         message: message,
       })
       .then(() => {
         setLoader(false);
         alert("Your message has been submitted👍");
         setName("");
         setEmail("");
         setMessage("");
         setSubject("");
         
       })
       .catch((error) => {
         alert(error.message);
         setLoader(false);
       });

   
  };

return (
  <form onSubmit={handleSubmit}>
<MDBContainer >
  <MDBRow center>
    <MDBCol md="6">
      
        <br></br><center><p className="h4 text-center mb-4">Contact Us 🤳</p></center>
        <label htmlFor="defaultFormContactNameEx" className="grey-text">
          Your name
        </label>
        <input type="text" id="defaultFormContactNameEx" onChange={(e) => setName(e.target.value)} className="form-control"  />
        <br />
        <label htmlFor="defaultFormContactEmailEx" className="grey-text">
          Your email
        </label>
        <input type="email" id="defaultFormContactEmailEx" onChange={(e) => setEmail(e.target.value)} className="form-control"  />
        <br />
        <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
          Subject
        </label>
        <input type="text" id="defaultFormContactSubjectEx" onChange={(e) => setSubject(e.target.value) } className="form-control" />
        <br />
        <label htmlFor="defaultFormContactMessageEx" className="grey-text">
          Your message
        </label>
        <textarea type="text" id="defaultFormContactMessageEx" onChange={(e) => setMessage(e.target.value)} className="form-control" rows="3" />
        <div className="text-center mt-4">
                  <MDBBtn color="primary" outline type="submit">
                    Send
                    <MDBIcon far icon="paper-plane" className="ml-2" />
                  </MDBBtn>
                </div>
              
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        </form>
      );
};

export default Contact;