import React from "react";
import './App.css'
import { Container, Row, Button, ButtonGroup } from "react-bootstrap";
import BP from './BuyProducts';
import SG from './BuySell'
// import { motion } from 'framer-motion';
// import '../assets/App.css';

//This is the main function returning the components to main page
const Orders = () => {
    
    //States for buttons
  const [Buy, setBuy] = React.useState(true);
  const [Pickup, setPickup] = React.useState(false);
//   const [boughtClickedByDefault,setBoughtClickedByDefault] =React.useState(true);
//   function handleClick(event){
    // event.target.id === "sold" ? setSold(true) : setSold(false);
    // setBoughtClickedByDefault(false);
//   }
  
  //This function returns images of respective memberCards
  
    const check = (e) => {
        const id = e.target.id;
        // e.target.setvariant = "secondary";
        if (id === "1") {
            setBuy(true);
            setPickup(false);
        }
        else if (id === "2") {
            setPickup(true);
            setBuy(false);
        }
        // setBoughtClickedByDefault(false);
        
    }
    //This are the buttons
    function Buttons() {
    
      return (
    
        <div className="center" >
          <ButtonGroup aria-label="Basic example"  className="order-button">
            <Button variant="secondary" id="1" onClick={check} 
            // style={ boughtClickedByDefault ? {background: '#ededed',color: '#70c745', border: '2px solid #70c745',boxShadow: '0px 1px 0px 3px #9ad0a7'} : null }
            >
              Buy Products</Button>
            <Button variant="secondary" id="2" onClick={check} >Pick Up</Button>
          </ButtonGroup>
        </div>
      )
    }
    
    return (
        <Container>
      <Buttons />
      <Row className='container'>
        {Buy ? <BP /> : null}
        {Pickup ? <SG /> : null}
      </Row>
    </Container>
  );
}

export default Orders;