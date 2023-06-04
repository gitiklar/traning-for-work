import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import ToDoItem from "../component/ToDoItem";
import { Button } from "@mui/material";

const toDoList = [
  {
    text: "aaaaa",
    isDone: false,
  },
  {
    text: "xxxxx",
    isDone: true,
  },
  {
    text: "fffff",
    isDone: true,
  },
  {
    text: "hhhhh",
    isDone: false,
  },
  {
    text: "zzzzz",
    isDone: true,
  },
];

export default () => {
  return (
    <Box>
      <Grid container spacing={2} className="flexGrid">
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            <Button variant="contained">Add To Do</Button>
          </Typography>
          <List>
            {toDoList.map((item) => (
              <ToDoItem item={item} />
            ))}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
};
