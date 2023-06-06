import { useEffect } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import ToDoItem from "../component/ToDoItem";
import { useDispatch, useSelector } from "react-redux";
import { getTodosList } from "../redux/todos/selectors";
import AddTodoModal from "../component/AddTodoModal";
import { getTodosListHandler } from "../redux/todos/actions";
import Loading from "../component/Loading";

export default () => {
  const todosList = useSelector(getTodosList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodosListHandler());
  }, []);

  return (
    <Box>
      <Grid container spacing={2} className="flexGrid">
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            <AddTodoModal />
          </Typography>
          <List>
            {todosList ? (
              todosList.map((item) => <ToDoItem item={item} />)
            ) : (
              <Loading />
            )}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
};
