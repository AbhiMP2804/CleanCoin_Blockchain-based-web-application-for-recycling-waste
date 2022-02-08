import React,{useState, useEffect} from "react";
import {Modal, Col, Button, Form} from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { db, storage } from "../fire";
import './App.css'

const BuyForm=()=>{
  const [Addr1, setAddr1] = useState("");
  const [Addr2, setAddr2] = useState("");
  const [City, setCity] = useState("");
  const [State, setState] = useState("");
  const [Zip, setZip] = useState("");
  const [Product, setProduct] = useState("");
  const [Pieces, setPieces] = useState("");
  const [PaymentType, setPaymentType] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const history = useHistory();
  // const routeChange = () => {
  //   let path = `/transaction`;
  //   if (history.location.pathname == "/about") {
  //     history.push("/Login");
  //   } else {
  //     history.push(path);
  //   }
  // };
  useEffect(() => {
    console.log(window.sessionStorage.getItem("Email"));
    setEmail(window.sessionStorage.getItem("Email"));
  }, []);

  const handleAddr1Change = (e) => { setAddr1(e.target.value); };
  const handleAddr2Change = (e) => { setAddr2(e.target.value); };
  const handleCityChange = (e) => { setCity(e.target.value); };
  const handleStateChange = (e) => { setState(e.target.value); };
  const handleZipChange = (e) => { setZip(e.target.value); };
  const handleProductChange = (e) => { setProduct(e.target.value); };
  const handlePiecesChange = (e) => { setPieces(e.target.value); };
  const handlePaymentTypeChange = (e) => { setPaymentType(e.target.value); };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    var currentdate = new Date();
    var date =
      currentdate.getDate() +
      "/" +
      (currentdate.getMonth() + 1) +
      "/" +
      currentdate.getFullYear();
    db.collection("bought")
      .add({
        //sellerName:user.name,
        email,
        Addr1,
        Addr2,
        City,
        State,
        Zip,
        Product,
        Pieces,
        PaymentType,
        itemImageUrl: url,
        //  sellerId:userId,
        timeStamp: date,
      })
      .then(() => {
                alert("Product ordered successfully! 👍");
      })
      .catch((error) => {
                alert(error.message);
      });
          
      let path = `/transaction`;
      if (history.location.pathname == "/BuyForm") {
        history.push("/transaction");
      } else {
        history.push(path);
      }
      }

    return(
      <>
        {/* <Modal className='mx-0' size='xl' aria-labelledby="contained-modal-title-vcenter" centered > */}
        {/* <Row size="lg" > */}
        <Form className="px-4" onSubmit={handleSubmit}>
          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              onChange={handleAddr1Change}
              placeholder="1234 Main St"
              required
            />
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control
              placeholder="Apartment, studio, or floor"
              onChange={handleAddr2Change}
            />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                placeholder="Your City/Town"
                onChange={handleCityChange}
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control
                placeholder="Write Your State"
                onChange={handleStateChange}
              ></Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control onChange={handleZipChange} maxLength="6" required />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formPieces">
              <Form.Label>Product :</Form.Label>
              <Form.Control onChange={handleProductChange}  required />
            </Form.Group>
            <Form.Group as={Col} controlId="formPieces">
              <Form.Label>Amount :</Form.Label>
              <Form.Control onChange={handlePiecesChange} maxLength="6" required />
            </Form.Group>
          </Form.Row>
              
          <Form.Group as={Col} controlId="form">
            <Form.Label>Mode of Payment</Form.Label>
            <Form.Control as="select" onChange={handlePaymentTypeChange} defaultValue="Choose...">
                <option>Select</option>
                <option>Cash on Delivery</option>
                <option>CleanCoin</option>
            </Form.Control>
          </Form.Group>
        <div className="text-center">
            <Button className="Sell-submit" type="submit" /*onClick={routeChange}*/ >
              Submit
            </Button>
          </div>
        </Form>
        {/* </Row>   */}
      {/* </Modal>  */}
      </>
    );
}

export default BuyForm;