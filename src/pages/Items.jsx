import React from "react";
import { useParams } from "react-router-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import FormControlLabel from "@mui/material/FormControlLabel";
import StyledSwitch from "../components/Switch";

function Items() {
  const { id } = useParams();
  const [seriesVisibility, setSeriesVisibility] = React.useState({
    series1: true,
    series2: true,
  });

  const [lineColors, setLineColors] = React.useState({
    series1: "blue",
    series2: "green",
  });

  const options = {
    chart: {
      type: "line",
      backgroundColor: "#00020A",
    },
    title: {
      text: "Sample Line Chart",
      style: {
        color: "#EFF0F2",
      },
    },
    xAxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May"],
      labels: {
        style: {
          color: "#EFF0F2",
        },
      },
    },
    yAxis: {
      title: {
        text: "Value",
        style: {
          color: "#EFF0F2",
        },
      },
      labels: {
        style: {
          color: "#EFF0F2",
        },
      },
    },
    series: [
      {
        name: "Series 1",
        dashStyle: "line",
        data: [1, 2, 3, 3, 4],
        visible: seriesVisibility.series1,
        color: lineColors.series1,
        zoneAxis: "x",
        zones: [
          {
            value: 2,
          },
          {
            dashStyle: "dot",
          },
        ],
      },
      {
        name: "Series 2",
        dashStyle: "line",
        data: [5, 4, 3, 2, 1],
        visible: seriesVisibility.series2,
        color: lineColors.series2,
        zoneAxis: "x",
        zones: [
          {
            value: 2,
          },
          {
            dashStyle: "dot",
          },
        ],
      },
    ],
  };

  const handleSeriesVisibilityChange = (seriesName, checked) => {
    setSeriesVisibility((prevVisibility) => ({
      ...prevVisibility,
      [seriesName]: checked,
    }));
  };
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div id="chart">
        Items - {id}
        {/* <FormControlLabel
        control={
          <StyledSwitch
            defaultChecked
            checked={seriesVisibility.series1}
            onChange={(checked) => {
              console.log("ch", checked);
              //   handleSeriesVisibilityChange("series1", checked)
            }}
          />
        }
        label="Series 1"
      /> */}
        <StyledSwitch
          defaultChecked
          color={lineColors.series1}
          checked={seriesVisibility.series1}
          onChange={(event) => {
            console.log("ch", event);
            handleSeriesVisibilityChange("series1", event.target.checked);
          }}
        />
        Series 1
        <FormControlLabel
          control={
            <StyledSwitch
              defaultChecked
              color={lineColors.series2}
              checked={seriesVisibility.series2}
              onChange={(event) =>
                handleSeriesVisibilityChange("series2", event.target.checked)
              }
            />
          }
          label="Series 2"
        />
        <br />
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
}

export default Items;
