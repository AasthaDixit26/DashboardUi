import { Box, FormControlLabel, Typography } from "@mui/material";
import React, { useState } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Switch from "@mui/material/Switch";
import Divider from "@mui/material/Divider"
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

const MyDevices = () => {
  const devices = [
    {
      id: 1,
      name: "Smart TV",
      icon: "monitor.svg",
      text: "Active for 2 hours",
      power: "1Kwh",
    },
    {
      id: 2,
      name: "Speaker",
      icon: "speaker.svg",
      text: "Active for 1 hours",
      power: "2Kwh",
    },
    {
      id: 3,
      name: "Router",
      icon: "keyboard-open.svg",
      text: "Active for 3 hours",
      power: "5Kwh",
    },
    {
      id: 4,
      name: "Router",
      icon: "keyboard-open.svg",
      text: "Active for 3 hours",
      power: "5Kwh",
    },
    {
      id: 5,
      name: "Router",
      icon: "keyboard-open.svg",
      text: "Active for 3 hours",
      power: "5Kwh",
    },
    {
      id: 6,
      name: "Router",
      icon: "keyboard-open.svg",
      text: "Active for 3 hours",
      power: "5Kwh",
    },
    {
      id: 7,
      name: "Router",
      icon: "keyboard-open.svg",
      text: "Active for 3 hours",
      power: "5Kwh",
    },
    {
      id: 8,
      name: "Router",
      icon: "keyboard-open.svg",
      text: "Active for 3 hours",
      power: "5Kwh",
    },
    {
      id: 9,
      name: "Router",
      icon: "keyboard-open.svg",
      text: "Active for 3 hours",
      power: "5Kwh",
    },
  ];

  const [deviceStates, setDeviceStates] = React.useState(
    devices.reduce((acc, device) => {
      acc[device.id] = true;
      return acc;
    }, {})
  );

  const numDots = 10;

  const [lights, setLights] = useState([
    { name: "Light 1", brightness: 6 },
    { name: "Light 2", brightness: 8 },
    { name: "Light 3", brightness: 5 },
    { name: "Light 4", brightness: 7 },
    { name: "Light 5", brightness: 4 },
  ]);

  const handleBrightnessChange = (lightIndex, dotIndex) => {
    const newLights = [...lights];
    newLights[lightIndex].brightness = dotIndex + 1;
    setLights(newLights);
  };

  const handleToggleChange = (deviceId) => {
    setDeviceStates((prev) => ({
      ...prev,
      [deviceId]: !prev[deviceId],
    }));
  };

const IOSSwitch = styled((props) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: '46px',
    height: '24px',
    borderRadius:'16px',
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
         background: 'linear-gradient(225deg, #EDBAFF 0%, #A1FFFF 100%)',
          opacity: 1,
          border: 0,
        },
        "& .MuiSwitch-thumb": {
          background: "black",
          marginTop:'3px',
      marginLeft:'9px',
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
          marginTop:'3px',
          marginLeft:'9px',
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 15,
      height: 15,
      marginTop:'3px',
      marginLeft:'5px',
      background: "black",
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: "#7A7A7A",
      marginTop:'2px',
      marginLeft:'2px',
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
    },
  }));

  const rows = [];
  for (let i = 0; i < devices.length; i += 3) {
    rows.push(devices.slice(i, i + 3));
  }

  return (
    <Box
      sx={{
        height: "252px",
        width: "1186px",
        padding: 2,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        gap: 1,
        overflow: "hidden",
      }}
    >
      <Box>
        <Box sx={{ display: "flex", alignItems: "left" }}>
          <Typography
            variant="h6"
            sx={{
              color: "#FFFFFF",
              marginTop: "30px",
              marginBottom: "20px",
              marginLeft: "10px",
              fontSize: "21px",
              fontWeight: "600",
              fontFamily: "Inter",
            }}
            component="h6"
          >
            My Devices
          </Typography>
        </Box>

        <Box
          sx={{
            height: "200px",
            overflowY: "auto",
            overflowX: "hidden",
            "&::-webkit-scrollbar": {
              width: "8px",
            },
          }}
        >
          {rows.map((row, rowIndex) => (
            <Box
              key={`row-${rowIndex}`}
              sx={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                justifyContent: "flex-start",
                marginBottom: "10px",
              }}
            >
              {row.map((device, index) => (
                <React.Fragment key={device.id}>
                  <Card
                    sx={{
                      margin:'4px',
                      background: "none",
                      width: "252px",
                      height: "163px",
                      borderRadius: "10px",
                      // padding: "10px",
                      color: "white",
                      border: "none",
                      paddingRight: "4px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 2,
                      }}
                    >
                      <Box
                        sx={{
                          backgroundColor: "#333",
                          borderRadius: "10px",
                          width: 44,
                          marginTop: "10px",
                          height: 44,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <span
                          role="img"
                          aria-label="monitor"
                          style={{
                            marginTop: "10px",
                            color: "white",
                            fontSize: "20px",
                          }}
                        >
                          <img src={device.icon} alt={device.name} />
                        </span>
                      </Box>
                      <FormControlLabel
                        control={
                          <IOSSwitch
                            checked={deviceStates[device.id]}
                            onChange={() => handleToggleChange(device.id)}
                          />
                        }
                        label=""
                      />
                    </Box>
                    <CardContent sx={{ padding: 0 }}>
                    <Box
                      sx={{
                        flex: 1,
            display: "flex",
            flexDirection: "column",
            
                      }}
                    >

                       <Typography
                        variant="h6"
                        sx={{
                          color: "white",
                          fontSize: "16px",
                          fontWeight: "500",
                          fontFamily: "Inter",
                        }}
                      >
                        {device.name}
                      </Typography>

{/* 
                       <Box sx={{alignItems: "right",}}>
                      <HorizontalRuleIcon/>

                      </Box> */}
                    </Box>
                     

                     
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          mt: 1,
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            color: "gray",
                            fontSize: "12px",
                          }}
                        >
                          {device.text}
                        </Typography>
                      
                        <Typography
                          variant="body2"
                          sx={{
                            fontFamily: "Inter",
                            width: "38px",
                            mr:5,
                            height: "17px",
                            backgroundImage:
                              'linear-gradient(225deg, #EDBAFF 0%, #A1FFFF 100%)',
                            WebkitBackgroundClip: "text",
                            color: "transparent",
                            fontSize: "14px",
                            fontWeight: "600",
                          }}
                        >
                        {/* <HorizontalRuleIcon /> */}
                          {device.power}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                  {index < row.length - 1 && (
                    <Divider
                      orientation="vertical"
                      flexItem
                      sx={{
                        backgroundColor: "grey",
                        height: "150px",
                        alignSelf: "center",
                        marginLeft: '-2px',
  marginRight: '8px',
                      }}
                    />
                  )}
                </React.Fragment>
              ))}
            </Box>
          ))}
        </Box>
      </Box>

      {/* ---------------------------------------------------------------------------------- */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "100%",
          marginLeft: "30px",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "#FFFFFF",
            marginTop: "35px",
            marginBottom: "20px",
            marginLeft: "3px",
            fontSize: "21px",
            fontWeight: "600",
            fontFamily: "Inter",
          }}
          component="h6"
        >
          Light
        </Typography>

        <Box
          sx={{
            marginLeft: "-13px",
            maxHeight: "300px",
            overflowY: "auto",
            overflowX:'none',
            "&::-webkit-scrollbar": {
              width: "6px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#555",
              borderRadius: "3px",
            },
          }}
        >
          {lights.map((light, lightIndex) => (
            <Box
              key={lightIndex}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: "10px",
                marginBottom: "10px",
                marginRight: "9px",
                overflowX:'none'
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#333",
                  borderRadius: "10px",
                  width: 44,
                  height: 44,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "4px",
                }}
              >
                <span
                  role="img"
                  aria-label="light-icon"
                  style={{
                    color: "white",
                    fontSize: "20px",
                    marginTop: "10px",
                  }}
                >
                  <img src="sunLast/sun.svg" alt="light" />
                </span>
              </Box>

              <Box sx={{ alignContent: "column" }}>
                <Box
                  sx={{
                    width: "45px",
                    height: "17",
                    marginLeft: "15px",
                    display: "flex",
                    alignItems: "center",
                    flex: 1,
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      whiteSpace: "nowrap",
                      fontSize: "18px",
                      color: "#7A7A7A",
                      fontWeight: "600",
                      fontFamily: "Inter",
                      margintop: "-2px",
                    }}
                  >
                    {light.name}
                  </Typography>
                  <Box sx={{}}>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        marginLeft: "10px",
                        color: "#FFFFFF",
                        width: "175px",
                        height: "44px",
                        marginLeft: "15px",
                        textAlign: "right",
                        marginTop:'1px'
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "Inter",
                          height: "6px",
                          marginTop:'4px',
                          width: "26px",
                          fontSize: "14px",
                          fontWeight: "400",
                          marginLeft: "10px",
                          marginRight:'10px'
                        }}
                      >
                        {light.brightness * 10}%
                      </span>
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    gap: "10px",
                    flex: 1,
                    marginLeft: "25px",
                  }}
                >
                  {Array.from({ length: numDots }).map((_, dotIndex) => (
                    <div
                      key={dotIndex}
                      onClick={() =>
                        handleBrightnessChange(lightIndex, dotIndex)
                      }
                      style={{
                        width: "5PX",
                        height: "5PX",
                        borderRadius: "50%",
                        backgroundColor:
                          dotIndex < light.brightness ? "#FFFFFF" : "#252525",
                        cursor: "pointer",
                        transition: "background-color 0.2s",
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default MyDevices;
