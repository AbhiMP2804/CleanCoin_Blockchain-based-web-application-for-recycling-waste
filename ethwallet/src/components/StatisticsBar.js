import React from 'react';
import { CanvasJSChart } from 'canvasjs-react-charts';

class StatisticsBar extends React.Component {
    render()
    {
        const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light2", //"light1", "dark1", "dark2"
			title:{
				text: "Transaction Amount(in DAI) V/S Category"
			},
			axisY: {
				includeZero: true
			},
			data: [{
				type: "column", //change type to bar, line, area, pie, etc
				indexLabelFontColor: "#5A5757",
				indexLabelPlacement: "outside",
				dataPoints: [
					{ label: "Wet Waste", y: 4000 },
					{ label: "Paper", y: 5000 },
					{ label: "Plastic", y: 3245 },
					{ label: "Glass", y: 1730 },
					{ label: "Metal", y: 2250 }
				]
			}]
    }

    return (
        <CanvasJSChart options = {options}/>
    )
}
}
export default StatisticsBar;