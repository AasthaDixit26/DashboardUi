import * as React from "react";
import { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import DropDown from "./dropDown";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const data = [
  { time: "12AM", value: 10 },
  { time: "1AM", value: 20 },
  { time: "2AM", value: 30 },
  { time: "3AM", value: 40 },
  { time: "4AM", value: 25 },
  { time: "5AM", value: 35 },
  { time: "6AM", value: 45 },
  { time: "7AM", value: 30 },
  { time: "8AM", value: 50 },
  { time: "9AM", value: 40 },
  { time: "10AM", value: 60 },
  { time: "11AM", value: 35 },
  { time: "12PM", value: 10 },
  { time: "1PM", value: 20 },
  { time: "2PM", value: 30 },
  { time: "3PM", value: 40 },
  { time: "4PM", value: 25 },
  { time: "5PM", value: 35 },
  { time: "6PM", value: 45 },
  { time: "7PM", value: 30 },
  { time: "8PM", value: 50 },
  { time: "9PM", value: 40 },
  { time: "10PM", value: 60 },
  { time: "11PM", value: 35 },
];

function TickPlacementBars() {
  const [startIndex, setStartIndex] = useState(0);
  const hoursPerPage = 12;
  const visibleData = data.slice(startIndex, startIndex + hoursPerPage);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleNext = () => {
    if (startIndex + hoursPerPage < data.length) {
      setStartIndex(startIndex + hoursPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - hoursPerPage);
    }
  };

  const handleBarClick = (data, index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const arrowButtonStyle = {
    background: "transparent",
    border: "none",
    cursor: "pointer",
    color: "#7A7A7A",
    padding: "10px",
  };

  const CustomTooltip = ({ active, payload, coordinate }) => {
    if (
      activeIndex !== null &&
      payload && 
      payload.length && 
      payload[0].payload === visibleData[activeIndex]
    ) {
      return (
        <div
          style={{
            background: "transparent",
            padding: "1px 1px",
            textAlign: "center",
            border: "none",
            marginTop:'10px',
            position: "absolute",
            transform: "translateX(-50%)",
            left: coordinate ? coordinate.x : 0,
            bottom: "100%",

          }}
        >
          <div 
            style={{
              background: 'linear-gradient(225deg, #EDBAFF 0%, #A1FFFF 100%)',
              color: "black",
              padding: "8px 10px",
              borderRadius: "16px",
              fontSize: "12px",
              fontWeight: "medium",
              marginBottom: "5px",
              display: "inline-block",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)"
            }}
          >
            {`${payload[0].value}kw`}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div
      style={{
        width: "732px",
        height: "159px",
        marginLeft: "36px",
        top: "136px",
      }}
    >
      <Box
        sx={{
          margin: "-10px",
          display: "flex",
          alignItems: "left",
          width: "743px",
        }}
      >
        <h3
          style={{
            marginLeft: "45px",
            marginTop: "-73px",
            height: "45px",
            width: "146px",
            overflow: "auto",
            fontSize: "21px",
            fontWeight: "600",
            overflowY: "hidden",
            fontFamily: "Inter",
            whiteSpace: "nowrap",
            flexWrap: "nowrap",
            gap: "10px",
            overflowX: "auto",
            whiteSpace: "nowrap",
          }}
        >
          Usage Status
        </h3>
        <IconButton
          sx={{
           background: 'linear-gradient(225deg, #EDBAFF 0%, #A1FFFF 100%)',
            borderRadius: "12px",
            width: "38px",
            height: "38px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.2s",
            marginLeft: "409px",
            marginTop: "-85px",
          }}
        >
          <img src="chart.svg" alt="chart" />
        </IconButton>
        <Box
          sx={{
            marginLeft: "10px",
            marginRight:'-50px',
            width: "89px",
            height: "38px",
            borderRadius: "10px",
            padding: "10px",
            gap: "10px",
            marginTop: "-94px",
          }}
        >
          <DropDown />
        </Box>
      </Box>

      <Box sx={{ display: "flex", alignItems: "left" }}>
        <Typography
          variant="body2"
          sx={{
            color: "#777",
            marginLeft: "43px",
            marginTop: "-20px",
          }}
        >
          Total spend
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "#777",
            marginLeft: "43px",
            marginTop: "-20px",
          }}
        >
          Total hours
        </Typography>
      </Box>

      <Box sx={{ display: "flex", alignItems: "left" }}>
        <Typography
          variant="h6"
          sx={{
            marginLeft: "43px",
            color: "#FFFFFF",
            fontSize: "21px",
            fontWeight: "400",
            marginTop: "2px",
            fontFamily: "Inter",
          }}
        >
          35.02Kwh
        </Typography>

        <Typography
          variant="h6"
          sx={{
            marginLeft: "43px",
            color: "#FFFFFF",
            fontSize: "21px",
            fontWeight: "400",
            marginTop: "2px",
            fontFamily: "Inter",
          }}
        >
          32hr
        </Typography>
      </Box>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          position: "relative",
          width: "800px",
          marginTop: '59px',
        }}
      >
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          style={{
            ...arrowButtonStyle,
            visibility: startIndex === 0 ? "hidden" : "visible",
          }}
        >
          <FaChevronLeft size={20} />
        </button>

        <ResponsiveContainer width={600} height={200}>
          <BarChart 
            width={600} 
            height={200} 
            data={visibleData}
          >
            <defs>
              <linearGradient id="gradientId" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#EDBAFF" />
                <stop offset="100%" stopColor="#A1FFFF" />
              </linearGradient>
            </defs>
            <CartesianGrid
              vertical={false}
              horizontal={true}
              strokeDasharray="8"
              stroke="#333333"
            />

            <XAxis dataKey="time" tick={{ fill: "#7A7A7A" }} />
            <YAxis hide />
            <Tooltip 
              content={<CustomTooltip />} 
              cursor={false}
              position={{ y: 0 }}  
              isAnimationActive={true}
              active={activeIndex !== null}
              trigger="click"
              offset={0}
            />
            <Bar
              dataKey="value"
              barSize={37}
              onClick={handleBarClick}
              isAnimationActive={false}
              gap={50}
              sx={{borderRadius:'10px',}}
            >
              {visibleData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  cursor="pointer"
                  fill={index === activeIndex ? "url(#gradientId)" : "#7A7A7A"}
                  style={{ transition: "fill 0.3s" ,borderRadius:'40px'}}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>

        <button
          onClick={handleNext}
          disabled={startIndex + hoursPerPage >= data.length}
          style={{
            ...arrowButtonStyle,
            visibility:
              startIndex + hoursPerPage >= data.length ? "hidden" : "visible",
          }}
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}

export default TickPlacementBars;