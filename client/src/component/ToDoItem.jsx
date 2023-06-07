import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import Checkbox from "@mui/material/Checkbox";

import { pink } from "@mui/material/colors";
import { useDispatch } from "react-redux";
import { deleteItem, statusChange } from "../redux/todos/slice";

export default ({ item }) => {
  const dispatch = useDispatch();

  const onStatusChangeHandler = (e) =>
    dispatch(statusChange({ id: item._id, isDone: e.target.checked }));

  const onDelete = () => {
    dispatch(deleteItem(item._id));
  };

  return (
    <ListItem
      secondaryAction={
        <>
          <Checkbox
            onChange={onStatusChangeHandler}
            checked={item.isDone}
            sx={{
              color: pink[800],
              "&.Mui-checked": {
                color: pink[600],
              },
            }}
          />
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon onClick={onDelete} />
          </IconButton>
        </>
      }
    >
      <ListItemAvatar>
        <Avatar>
          <FolderIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={item.text} />
    </ListItem>
  );
};
