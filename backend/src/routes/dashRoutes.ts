import express from "express";
import * as DashController from "../controllers/DashController";

const routes = express.Router();

routes.get("/dashboard", DashController.index);

export default routes;