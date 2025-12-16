import { Router } from "express";
import crudControllers from "./crud.controllers";
const router = Router();
router.get("/getAllUsers", crudControllers.getAllUsers);
router.post("/addNewUser", crudControllers.addNewUser);
router.patch("/updateUser/:id", crudControllers.updateUser);
router.delete("/deleteUser/:id", crudControllers.deleteUser);
export default router;
