import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const LinkTab = (props) => {
  return <Tab component={Link} {...props} />;
};

export default () => {
  const [value, setValue] = useState(0);

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
          <LinkTab label="Home" to="/" />
          <LinkTab label="Blogs" to="/blogs" />
          <LinkTab label="Contact" to="/contact" />
        </Tabs>
      </Box>
      <Outlet />
    </>
  );
};
