import { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todos/slice";

export default () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [isDone, setIsDone] = useState(false);
  const dispatch = useDispatch();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onTextChange = (e) => setText(e.target.value);

  const onToggle = (e) => {
    setIsDone(e.target.checked);
  };

  const handleOk = () => {
    dispatch(addTodo({ text, isDone }));
    handleClose();
  };

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Add To Do
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            New todo item
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Please add todo item text and status
          </Typography>
          <Typography sx={{ mt: 2 }}>
            <TextField label="Text" focused onChange={onTextChange} />
          </Typography>
          <FormControlLabel
            control={<Checkbox onChange={onToggle} />}
            label="Is done"
          />
          <Typography sx={{ mt: 2 }}>
            <Button variant="contained" onClick={handleOk}>
              Ok
            </Button>
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
