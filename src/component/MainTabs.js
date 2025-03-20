import * as React from "react";
import { styled } from "@mui/system";
import { Tabs } from "@mui/base/Tabs";
import { TabsList as BaseTabsList } from "@mui/base/TabsList";
import { TabPanel as BaseTabPanel } from "@mui/base/TabPanel";
import { Tab as BaseTab, tabClasses } from "@mui/base/Tab";
import LivingRoom from "./LivingRoom";
import { Button } from "@mui/material";

export default function UnstyledTabsIntroduction() {
  return (
    <>
      <Tabs defaultValue={0}>
        <TabsList>
          <Tab value={0}>Living Room</Tab>
          <Tab value={1}>Kitchen Room</Tab>
          <Tab value={2}>Bed Room</Tab>
          <Tab value={3}>Kids Room</Tab>
          <Tab value={4}>Game Room</Tab>
          <Tab value={5}>+ Add</Tab>

          <Button
            style={{
                width:'118px',
                height:'39px',
              marginLeft: "340px",
              marginRight:'20px',
              borderRadius:'10px',
              fontSize:'12px',
              background: 'linear-gradient(225deg, #EDBAFF 0%, #A1FFFF 100%)',
              color: " #000",
              
            }}
          >
            + Add Device
          </Button>
        </TabsList>
        <TabPanel value={0}>
          {" "}
          <LivingRoom />
        </TabPanel>
        <TabPanel value={1}>Kitchen Room</TabPanel>
        <TabPanel value={2}>Bed Room</TabPanel>
        <TabPanel value={3}>Kids Room</TabPanel>
        <TabPanel value={4}>Game Room</TabPanel>
        <TabPanel value={5}>Add</TabPanel>
      </Tabs>
    </>
  );
}

const black = {
  50: "#000000 ",
  100: "#000000 ",
  200: "#000000 ",
  300: "#000000 ",
  400: "#000000 ",
  500: "#000000 ",
  600: "#000000 ",
  700: "#000000 ",
  800: "#000000 ",
  900: "#003A75",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const Tab = styled(BaseTab)`
  font-family: 'IBM Plex Sans', sans-serif;
  color: #808080;
  cursor: pointer;
  font-size: '16px';
  font-weight: 400;
  background-color: transparent;
  padding: 10px 16px;
  border-radius: 10px;
  display: inline-block;
  white-space: nowrap; 
  text-align: center;
  min-width: 100px;
  marginLeft:'20px';
  marginRight:'20px',
  border: none;
  border: none; 
  &:hover {
    background-color: ${black[400]};
  }

  &:focus {
    outline: none; 
  }

  &.${tabClasses.selected} {
    background: linear-gradient(225deg, #EDBAFF 0%, #A1FFFF 100%);
    color: #000;
    border: none;
  }
`;

const TabPanel = styled(BaseTabPanel)(
  ({ theme }) => `
  width: 100%;
  margin-left: 70px;
  margin-right:90px;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  padding: 20px 12px;
  background: ${theme.palette.mode === "black" ? black[400] : "black"};
  border-radius: 12px;
  opacity: 1;
  margin:'20px';
  overflow:'hidden';
  `
);

const TabsList = styled(BaseTabsList)`
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;
  overflow-x: auto;
  white-space: nowrap;
  padding: 8px;
  margin-left: 96px;
  background-color: ${black[500]};
  border-radius: 10px;
  margin-bottom: 12px;
  align-items: center;
`;
