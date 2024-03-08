import express from "express";

const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Welcome to the Jokes API!");
});
app.get("/api/v1/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "I'm a joke",
      content: "This is a news joke ",
    },
    {
      id: 2,
      title: "Another a joke",
      content: "This is a part of joke ",
    },
    {
      id: 3,
      title: "New  a joke",
      content: "New a part of joke ",
    },
    {
      id: 4,
      title: "Old  a joke",
      content: "Old a part of joke ",
    },
    {
      id: 5,
      title: "Adult  a joke",
      content: "Adult a part of joke ",
    },
  ];
  res.send(jokes);
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
