import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./App.css";
import { Container, Card, Row, CardDeck, Jumbotron } from "react-bootstrap";
import Garbage from "../assets/garbage.jpg";
import Recycle from "../assets/recycle.jpg";
import Location from "../assets/location.jpg";
import Stats from "./Statistics";

const Work = () => {
  const history = useHistory();
  const [isStripShown, setIsStripShown] = useState(true);

  const routeChange = () => {
    let path = `/transaction`;
    if (history.location.pathname == "/about") {
      history.push("/Login");
    } else {
      history.push(path);
    }
  };

  const closeStrip = () => {
    setIsStripShown(false);
  };

  return (
    <form className="f1">
      <Container >
        <CardDeck>
          <Card>
            <Card.Img variant="top" src={Garbage} />
            <Card.Body>
              <Card.Title>
                GARBAGE COLLECTED:
                <br />
                500 Tons
              </Card.Title>
              <Card.Text>
                Waste Including paper, glass, plastic, e-waste, Kitchen waste,
                Rubber, hospital waste, etc.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 1 week ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={Recycle} />
            <Card.Body>
              <Card.Title>
                Waste Recycled: <br /> 200 Tons
              </Card.Title>
              <Card.Text>
                The waste collected undergoes recycling processes at the
                recyling plants in various locations{" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 1 week ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={Location} />
            <Card.Body>
              <Card.Title>
                Our Locations: <br /> 26+ cities
              </Card.Title>
              <Card.Text>
                We help manage waste in various cities including Mumbai,
                Hyderabad, Delhi, Kolkata, Bengaluru, etc.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardDeck>

        {/* <Jumbotron fluid> */}
        {/* <Container className="jumbotron1">
          <h5 className="jumbodesc2">
            <br />
            Quantity of waste collected by types:
          </h5>
          <h5 className="jumbodesc3">
            Glass &ensp; &ensp; &ensp; &ensp; 200 Kg <br /> Paper &emsp; &emsp;
            &nbsp; 250 kg
            <br /> E-waste &emsp; &emsp;&nbsp;&nbsp; 3 ton
            &ensp;&ensp;&ensp;&nbsp;
            <br /> &nbsp;Kitchen Waste &ensp;&ensp;&ensp;&ensp;&ensp; &nbsp; 150
            kg &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&nbsp; &ensp;&nbsp;
            <br /> Rubber &emsp;&emsp;&nbsp;&nbsp;&nbsp; 50 kgs &nbsp;
            <br /> &nbsp;&nbsp;&nbsp;Other &emsp;&emsp;&nbsp;&nbsp;&nbsp; 150
            kgs &nbsp;
            <br />
            <br />
          </h5>
        </Container> */}
        <br />
        <br />
        <br />
        <Stats />
        {/* <Container className="jumbotron2">
          <h5 className="jumbodesc4">
            <br />
            OUR ITEMS:
          </h5>
          <h5 className="jumbodesc5">
            <Stats />
            <br />
          </h5>
        </Container> */}
      </Container>
      <h5 className="work-h5">
        <br />
        OUR PRODUCTS:
      </h5>
      <h5 className="work-para">
        Recycled Paper <br /> Stationary <br /> Glass Bottles <br /> Plastic
        Utilities <br /> Toys and Decorations <br />
        <br />
      </h5>
      <div>
        <center>
          <h2>SUPPORT US :</h2>
        </center>
        {isStripShown === true && (
          <div className="statistics-strip">
            <h4 className="center">
              If you wish to donate funds for our project plase click donate
              button and use this address
              '0x8DEe603586324Bf32DE06D3A34301943A2200015' as the recipient
              address.
              <Button className="mr-1 close" onClick={closeStrip}>
                &times;
              </Button>
              <br />
              <br />
              <Button type="submit" onClick={routeChange}>
                Donate
              </Button>
              </h4>
          </div>
        )}
      </div>
    </form>
  );
};

export default Work;
