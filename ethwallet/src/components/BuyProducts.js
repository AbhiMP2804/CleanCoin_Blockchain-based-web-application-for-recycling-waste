import React from 'react';
import { useHistory } from "react-router-dom";
import { Container, Col, Row, Card,Button, CardDeck} from 'react-bootstrap';
import { useGetData } from './getData'
import BuyForm from './BuyForm'
import './App.css'

const BuyProducts=() =>{
    const history = useHistory();
    const [products] = useGetData("products");
    const routeChange = () => {
      let path = `/BuyForm`;
      if (history.location.pathname == "/BuyProducts") {
        history.push("/Login");
      } else {
        history.push(path);
      }
    };
    return (
        <div> 
            <Container className="grid-container" >
              <Row>
               {
          products.map(
            (vari)=>(
            <CardDeck >
              <Col >
              <Card className="card-style" hoverable>
                <Card.Img variant="top" className="card-img" src={vari.value.ImageUrl} alt="no img..."/>
                <Card.Body style={{backgroundColor: "#77c845", color: "white"}}>
                  <Card.Title className="card-title">
                      {vari.value.Name}
                  </Card.Title>
                  <Card.Text className="card-text">
                     <p className="desc-style">Description:{vari.value.Desc}</p>
                     <p className="desc-style">Pieces:{vari.value.Pieces} left!</p>
                     <p className="mrp-style">Price:{vari.value.Price}</p>
                     {/*<p className="desc-style">{props.product.desc}<br/><strong>Posted on {props.product.date} by {props.product.owner}</strong><br />{props.product.city},{props.product.state}</p>
                      <p>Contact No: {props.product.phone}</p>*/}
                  </Card.Text>
                  <div className="text-center">
                    <Button className="Sell-submit" type="submit" onClick={routeChange} >
                      Buy
                    </Button>
                  </div>
                </Card.Body>
                {/*<Card.Footer className="text-center">
                  <Button size="lg" variant="success" onClick={handleClick}>Buy</Button>
                </Card.Footer>*/}
              </Card>
          </Col>
          </CardDeck>
            )
            )
          }
          </Row>
            </Container>
        </div>
        
    )
}

export default BuyProducts;
