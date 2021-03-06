import "./App.css";
import Topbar from "./components/Topbar";
import Embed from "./components/Embed";

import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={0}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export function App() {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0}>
        <Topbar />
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="project nav tabs"
        >
          <LinkTab label={<span style={{fontSize:"1rem"}}>Front-End To-Do List</span>} href="/todo" {...a11yProps(0)} />
          <LinkTab label={<span style={{fontSize:"1rem"}}>Contact List</span>} href="/contacts" {...a11yProps(1)} />
          <LinkTab label={<span style={{fontSize:"1rem"}}>Trivia</span>} Quiz href="/trivia" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Embed
          lab={0}
          url="https://accelerate-lab-1-to-do.netlify.app/"
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Embed
          lab={1}
          url="https://accelerate-lab-2-contacts.netlify.app/"
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Embed
          lab={2}
          url="https://accelerate-lab-3-server.netlify.app/"
        />
      </TabPanel>
    </div>
  );
}

export default App;
