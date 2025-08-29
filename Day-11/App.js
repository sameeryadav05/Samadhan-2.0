import express from "express";
import studentRoutes from "./routes/student.route.js";

const app = express();

//PORT
const PORT = 3000;

// middleware

app.use(express.json());

// Mount routes
app.use("/students", studentRoutes);

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
