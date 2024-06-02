import { Router } from "express";
import dashRoutes from "./dashRoutes";

const routes = Router();

routes.use(dashRoutes);

export default routes;