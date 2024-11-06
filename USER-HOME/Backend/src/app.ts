import express from "express";
import route from "./route/userRoute";
const PORT = process.env.PORT;
console.log(PORT, "Port is showing here");
const app = express();

app.use("/", route);

app.listen(4000, () => {
  console.log(`Server is running http:localhost:${PORT}/login`);
});
