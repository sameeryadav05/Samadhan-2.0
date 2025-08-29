import express, { text } from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

let todos = [
  {
    id: 1,
    text: "exercise 30 min",
    completed: false,
  },
  { id: 2, text: "learn React", completed: false },
];

// get todos

app.get("/todos", (req, res) => {
  res.json(todos);
});

// add todos

app.post("/todos", (req, res) => {
  const newTodo = { id: Date.now(), text: req.body.text, completed: false };
  todos.push(newTodo);
  res.json(newTodo);
});

// delete todo

app.delete("/todos", (req, res) => {
  todos = todos.filter((todo) => todo.id !== parseInt(req.params.id));
  res.json({ message: "Tdo deleted" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
