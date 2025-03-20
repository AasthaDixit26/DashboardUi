import * as React from "react";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import { IconButton, Slider, Typography } from "@mui/material";
import Charts from "./chart";
import MyDevices from "./MyDevices";

export default function AirConditionerControl() {
  const [activeTab, setActiveTab] = React.useState(0);
  const [temperature, setTemperature] = React.useState(24);
  const [isOn, setIsOn] = React.useState(true);

  const handleTabChange = (index) => {
    setActiveTab(index);

    switch (index) {
      case 0:
        setTemperature(24);
        break;
      case 1:
        setTemperature(22);
        break;
      case 2:
        setTemperature(25);
        break;
      case 3:
        setTemperature(26);
        break;
      case 4:
        setTemperature(20);
        break;
      default:
        setTemperature(24);
    }
  };

  const handleTemperatureChange = (event, newValue) => {
    setTemperature(newValue);
  };

  const handleToggleChange = () => {
    setIsOn(!isOn);
  };

  const IOSSwitch = styled((props) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: "46px",
    height: "24px",
    borderRadius: "16px",
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          background: "linear-gradient(90deg, #EDBAFF, #A1FFFF)",
          opacity: 1,
          border: 0,
        },
        "& .MuiSwitch-thumb": {
          background: "black",
          marginTop: "3px",
          marginLeft: "9px",
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
          marginTop: "3px",
          marginLeft: "9px",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 15,
      height: 15,
      marginTop: "3px",
      marginLeft: "5px",
      background: "black",
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: "#7A7A7A",
      marginTop: "2px",
      marginLeft: "2px",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
    },
  }));

  const theme = createTheme({
    palette: {
      primary: {
        main: "rgb(37, 37, 37)",
      },
      mode: "dark",
    },
  });

  const tabIcons = [
    { icon: "sun.svg", label: "sun" },
    { icon: "flash.svg", label: "flash" },
    { icon: "wind.svg", label: "wind" },
    { icon: "drop.svg", label: "drop" },
    { icon: "moon.svg", label: "moon" },
  ];

  const tabTitles = [
    "Air Conditioner",
    "Cooling Mode",
    "Fan Mode",
    "Humidity",
    "Night Mode",
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          gap: 1,
          overflow: "none",
        }}
      >
        <Box
          sx={{
            width: 346,
            height: 329,
            borderRadius: "20px",
            bgcolor: "primary.main",
            padding: 2,
            marginLeft: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ mb: 2 }}
          >
            <Typography
              variant="h6"
              sx={{
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
                color: "white",
                fontSize: 21,
                fontFamily: "Inter",
                fontWeight: "200",
                wordWrap: "break-word",
              }}
            >
              {tabTitles[activeTab]}
            </Typography>
            <FormControlLabel
              control={
                <IOSSwitch checked={isOn} onChange={handleToggleChange} />
              }
              label=""
            />
          </Stack>

          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontWeight: "700",
                wordWrap: "break-word",
                fontFamily: "Inter",
                fontWeight: "700",
                fontSize: "48px",
                backgroundImage:
                  "linear-gradient(225deg, #EDBAFF 0%, #A1FFFF 100%)",
                WebkitBackgroundClip: "text",
                color: "transparent",
                mb: 1,
              }}
            >
              {temperature}°C
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: "#7A7A7A",
                fontSize: 14,
                fontFamily: "Inter",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              Temperature
            </Typography>

            <Box sx={{ width: "100%", px: 1 }}>
              <Slider
                value={temperature}
                onChange={handleTemperatureChange}
                min={16}
                max={32}
                valueLabelDisplay="auto"
                step={1}
                sx={{
                  "& .MuiSlider-track": {
                    background:
                      "linear-gradient(225deg, #EDBAFF 0%, #A1FFFF 100%)",
                  },
                  "& .MuiSlider-rail": {
                    background: "#E0E0E0",
                    height: 4, 
                  },
                  "& .MuiSlider-thumb": {
                    background:
                      "linear-gradient(225deg, #EDBAFF 0%, #A1FFFF 100%)",
                    width: 16,
                    height: 16,
                  },
                }}
              />
              {/* <img src='' alt=''/>
              </Slider> */}

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  color: "#777",
                  fontSize: "12px",
                  mt: -1,
                }}
              >
                <Typography variant="caption">16°C</Typography>
                <Typography variant="caption">32°C</Typography>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 3,
            }}
          >
            {tabIcons.map((tab, index) => (
              <IconButton
                key={index}
                onClick={() => handleTabChange(index)}
                sx={{
                  backgroundColor:
                    activeTab === index ? "#000)" : "rgba(80, 80, 80, 0.3)",
                  borderRadius: "12px",
                 width: '40px', height: '40px', borderRadius: '10px',
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom:'18px',
                  marginLeft:'4px',
                  marginRight:'20px',
                  transition: "all 0.2s",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                  },
                  ...(activeTab === index && {
                    background:
                      "linear-gradient(225deg, #EDBAFF 0%, #A1FFFF 100%)",
                    // boxShadow: "0 0 10px rgba(161, 255, 255, 0.3)",
                  }),
                }}
              >
                <img src={tab.icon} alt={tab.name} />
              </IconButton>
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            flex: 1,
            height: "325px",
            width: "743px",
            display: "flex",

            marginBottom: "20px",
            alignItems: "center",
          }}
        >
          <Charts />
        </Box>
      </Box>

      <Box>
        <MyDevices />
      </Box>
    </ThemeProvider>
  );
}
