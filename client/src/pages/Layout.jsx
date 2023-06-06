import { Link, Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const LinkTab = (props) => {
  return <Tab component={Link} {...props} />;
};

export default () => {
  const location = useLocation();
  const locations = {
    "/": 0,
    "/todo": 1,
    "/blogs": 2,
    "/contact": 3,
  };
  const [value, setValue] = useState(locations[location.pathname]);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Tabs
          centered
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <Tab component={Link} label="Home" to="/" />
          <Tab component={Link} label="To Do List" to="/todo" />
          <Tab component={Link} label="Blogs" to="/blogs" />
          <Tab component={Link} label="Contact" to="/contact" />
        </Tabs>
      </Box>
      <Outlet />
    </>
  );
};
