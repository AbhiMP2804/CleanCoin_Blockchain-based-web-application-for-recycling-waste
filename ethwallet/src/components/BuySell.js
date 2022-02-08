import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { db, storage } from "../fire";
import './App.css'

export default function BuySell() {
  const [Addr1, setAddr1] = useState("");
  const [Addr2, setAddr2] = useState("");
  const [City, setCity] = useState("");
  const [State, setState] = useState("");
  const [Zip, setZip] = useState("");
  const [Category, setCategory] = useState("");
  const [Kgs, setKgs] = useState("");
  const [description, setDescription] = useState("");
  const [loader, setLoader] = useState(false);
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);
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
  const handleCategoryChange = (e) => { setCategory(e.target.value); };
  const handleKgsChange = (e) => { setKgs(e.target.value); };
  const handleDescriptionChange = (e) => { setDescription(e.target.value); };
  const addFile = (e) => { console.log(e.target.files[0]);
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (Snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
            console.log(url);
            var currentdate = new Date();
            var date =
              currentdate.getDate() +
              "/" +
              (currentdate.getMonth() + 1) +
              "/" +
              currentdate.getFullYear();
            console.log(date);

            db.collection("items")
              .add({
                //sellerName:user.name,
                email,
                Addr1,
                Addr2,
                City,
                State,
                Zip,
                Category,
                Kgs,
                description,
                itemImageUrl: url,
                //  sellerId:userId,
                timeStamp: date,
              })
              .then(() => {
                setLoader(false);
                alert("Garbage reported successfully !");
              })
              .catch((error) => {
                alert(error.message);
                setLoader(false);
              });
          });
      }
    );
  };

  return (
    <Container className="big">
    <form className="f2">
    <Container >
      {/* <h5 className="jumbodesc2"> */}
      <div className="center">
        <h1 className="f2">Rates</h1>
        <h5 >
          Wet Waste : 100 dai/kg
          <br />&emsp;&emsp;&ensp;Paper : 120 dai/kg
          <br />&emsp;&emsp;Plastic : 170 dai/kg
          <br />&emsp;&emsp;Glass : 80 dai/kg
          <br />&emsp;&emsp;Metal : 90 dai/kg
        </h5>
      </div>
      <h2 className="sell-title text-center">
        <br />
        Enter the details of waste to be sold :
      </h2>
      
      <div className="Sell-Form">
        {/* onSubmit={handleSubmit} as Form.Control attrib */}
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
          <Form.Group as={Col} controlId="formGridCategory">
            <Form.Label>Category of Waste</Form.Label>
            <Form.Control as="select" onChange={handleCategoryChange} defaultValue="Choose...">
                <option>Select</option>
                <option>WET WASTE</option>
                <option>PAPER</option>
                <option>PLASTIC</option>
                <option>GLASS</option>
                <option>METAL</option>
              </Form.Control>
          </Form.Group>

            <Form.Group as={Col} controlId="formGridKgs">
              <Form.Label>Amt in Kgs</Form.Label>
              <Form.Control onChange={handleKgsChange} maxLength="6" required />
            </Form.Group>
          </Form.Row>
          
          <Form.Group as={Row} controlId="Description">
            <Form.Label className="Sell-Labels"/* column lg="3" xs="4"*/ >
              Item Description
            </Form.Label>
            {/* <Col lg="9" xs="8"> */}
            {/* onChange={handleDescriptionChange} as Form.Control attrib */}
            <Form.Control
              as="textarea"
              rows={3}
              className="Sell-inputs"
              placeholder="Item Description"
              onChange={handleDescriptionChange}
              required 
              maxLength="90"
            />
            <Form.Text id="Description-limit" >
              Your item's decription must be 50-90 characters long.
            </Form.Text>
          </Form.Group>

          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroupFileAddon01">
                Upload
              </span>
            </div>
            <div className="custom-file">
              <input
                type="file"
                className="custom-file-input"
                onChange={addFile}
                id="inputGroupFile01"
                aria-describedby="inputGroupFileAddon01"
              />
              <label className="custom-file-label" htmlFor="inputGroupFile01">
                Choose file
              </label>
            </div>
          </div>

          <div className="text-center">
            <Button className="Sell-submit" type="submit" /*onClick={routeChange}*/ >
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </Container>
    </form>
    
    </Container>
  );
}
//export default {BuySell};
