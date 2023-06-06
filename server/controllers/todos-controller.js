const getTodosList = (req, res) => {
  res.status(200).json([
    { text: "aaaa", isDone: true, id: "EFRmoMGDcIC1kq6WE57-y" },
    { text: "sssss", isDone: false, id: "UD7mqopB9JQnhnf8555yY" },
    { text: "vvvvvFromServer", isDone: false, id: "1Pefsdf8QeMpiG0tmgO" },
    { text: "pppp", isDone: false, id: "HShwIh6q5VI-mADIVUWlx" },
    { text: "rrrrr", isDone: true, id: "1T1I-Peav8QeMpiG0tmgO" },
  ]);
};

module.exports = {
  getTodosList,
};
