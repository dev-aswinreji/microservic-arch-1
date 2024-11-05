import express, { Request, Response } from "express";

const app = express();

const PORT = process.env.PORT;
console.log(PORT, "Portis showihng");
app.get("/login", async (req: Request, res: Response) => {
  res.status(200).json({ message: "Login auth success" });
});

app.listen(PORT, () => {
  console.log(`Server is listening http://localhost:${PORT}/login`);
});
