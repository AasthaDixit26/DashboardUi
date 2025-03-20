import React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function MySelect() {
  const [selected, setSelected] = React.useState("today");
  
  const handleChange = (event) => {
    setSelected(event.target.value);
  };
  
  return (
    <Select
      sx={{
        width: '89px',
        height: '38px',
        backgroundColor: "#252525 !important",
        color: "#7A7A7A",
        fontSize: "14px",
        marginBottom: '50px',
        borderRadius: '10px',
        border: 'none',
        marginRight:'-10px',
        boxShadow: 'none',
        '.MuiOutlinedInput-notchedOutline': { 
          border: 'none' 
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          border: 'none',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
          border: 'none',
        },
      }}
      value={selected}
      onChange={handleChange}
      MenuProps={{
        PaperProps: {
          sx: {
            backgroundColor: '#252525',
            borderRadius: '10px',
          }
        }
      }}
      IconComponent={(props) => (
        <KeyboardArrowDownIcon
          {...props}
          sx={{ color: "#FFFFFF !important" }}
        />
      )}
    >
      {["today", "7days", "month"].map((item) => (
        <MenuItem
          key={item}
          sx={{
            borderRadius: '10px',
            borderStyle: 'none',
            backgroundColor: "transparent",
            color: "#7A7A7A !important",
            fontSize: "14px",
            "&.Mui-selected": {
              backgroundColor: "transparent !important",
              color: "#7A7A7A !important",
            },
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.08) !important",
            },
          }}
          value={item}
        >
          {item === "today" ? "Today" : item === "7days" ? "7 days" : "Month"}
        </MenuItem>
      ))}
    </Select>
  );
}

export default MySelect;