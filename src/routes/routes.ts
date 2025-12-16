import { Router } from "express";
import crudRoutes from "../modules/crud/crud.routes";
const globalRouter = Router();
globalRouter.use("/user", crudRoutes);
export default globalRouter;
