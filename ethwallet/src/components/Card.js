import React from "react";
import { Card } from "react-bootstrap";
// import { IconContext } from 'react-icons';
// import { FaEnvelope, FaInstagram, FaLinkedinIn} from 'react-icons/fa';

function Cards(props) {

  return (
    <div className="card-container">
      <Card id="team" >
        <Card.Img className="cardImg" variant="top" src={props.Image} />
        <Card.Body className="cardText" >
          <Card.Title>{props.Name}</Card.Title>
          <Card.Text><p>{props.Desc}
                  {props.Price}
                  {props.Pieces}
                  </p>
          </Card.Text>

          {/* <IconContext.Provider value={{ color: '#363537', className: 'fa-icons', size: '10%' }}>
            <a href='https://www.google.com/' className='ml-2'><FaInstagram /></a>
            <a href='mailto:csi.vesit@ves.ac.in' className='ml-2'><FaEnvelope /></a>
            <a href='https://www.google.com/' className='ml-2'><FaLinkedinIn /></a>
          </IconContext.Provider> */}
        </Card.Body>
      </Card>
    </div>
  )

}

export default Cards;