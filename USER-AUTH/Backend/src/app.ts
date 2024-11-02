import express, { Request, Response } from "express";

const app = express();

app.get("/login", async (req: Request, res: Response) => {
  res.status(200).json({ message: "Login auth success" });
});

app.listen(4000, () => {
  console.log(`Server is listening http://localhost:4000/login`);
});
