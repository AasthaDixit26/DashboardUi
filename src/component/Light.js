import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { Slider } from "@mui/material";


const Light = () => {
  const [value, setValue] = useState(60); 

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
   const numDots = 10;
  const [selectedDots, setSelectedDots] = useState(0);
  const handleClick = (index) => {
    setSelectedDots(index + 1);
  };
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "left" }}>
       
        <Typography
          variant="h6"
          sx={{
            flex: 1,
            display: "flex",
            marginTop: "-25px",
            marginLeft: "779px",
            marginBottom: "20px",
            alignItems: "center",
            color: "#FFFFFF",
            fontSize: "21px",
            fontWeight: "600",
            fontFamily: "Inter",
          }}
          component="h6"
        >
          Light
        </Typography>

        <Box sx={{ width: 300, padding: 2, color: "white" }}>
      <Typography variant="body1">Light 1</Typography>
       <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "10px",
        }}
      >
        <span
          style={{ fontSize: "18px", fontWeight: "bold", marginLeft: "10px" }}
        >
          {selectedDots * 10}%
        </span>
        <br />
        {Array.from({ length: numDots }).map((_, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            style={{
              width: "5PX",
              height: "5PX",
              borderRadius: "50%",
              backgroundColor: index < selectedDots ? "#FFFFFF" : "#252525",
              cursor: "pointer",
              transition: "background-color 0.2s",
            }}
          />
        ))}
      </div>
      <Typography variant="body2">{value}%</Typography>
    </Box>
      </Box>
</>
  )}
export default Light;
