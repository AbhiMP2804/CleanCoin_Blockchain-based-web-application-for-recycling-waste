import React from "react";
import { useGetData } from "./getData";
import { Container, Row, Col} from "react-bootstrap";
import { CanvasJSChart } from 'canvasjs-react-charts';
import StatisticsBar from './StatisticsBar';
import './App.css'

const FireStoreData = () => {
  const [documents] = useGetData("items");
  function Tot(Category) {
    let sum = 0;
    for( var i in documents ) {
        // console.log(documents[i].value.Category );
      if( documents[i].value.Category === Category ) {
        sum += documents[i].value.Kgs;
      }
    }
    return sum;
}
const tWet = Tot('WET WASTE');
const tPaper = Tot('PAPER');
const tPlastic = Tot('PLASTIC');
const tGlass = Tot('GLASS');
const tMetallic = Tot('METAL');
const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light2", // "light1", "dark1", "dark2"
    title:{
        text: "Garbage Amount Collected(in Kgs)"
    },
    data: [{
        type: "pie",
        indexLabel: "{label}: {y}kgs",		
        startAngle: -90,
        dataPoints: [
            { y: tWet , label: "Wet waste" },
            { y: tPaper, label: "Paper waste" },
            { y: tPlastic, label: "Plastic waste" },
            { y: tGlass, label: "Glass waste" },
            { y: tMetallic, label: "Metallic scraps" }
        ]
    }]
}

  return (
    
      <div className="statJumbo">
            <h1 className="text-center stat-h">Statistics</h1>
                <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <div className="pie-chart">
                            <CanvasJSChart options = {options}/>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="pie-chart">
                            <StatisticsBar />
                        </div>
                    </Col>
                </Row>
              <br />
              <br />  
                </Container>
      </div>
  );
}

export default FireStoreData;