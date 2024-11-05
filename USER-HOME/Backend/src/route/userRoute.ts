import express from "express";
import userHome from "../controller/userController";

const route = express.Router();

route.get("/", userHome);

export default route;
