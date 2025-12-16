"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const crud_controllers_1 = __importDefault(require("./crud.controllers"));
const router = (0, express_1.Router)();
router.get("/getAllUsers", crud_controllers_1.default.getAllUsers);
router.post("/addNewUser", crud_controllers_1.default.addNewUser);
router.patch("/updateUser/:id", crud_controllers_1.default.updateUser);
router.delete("/deleteUser/:id", crud_controllers_1.default.deleteUser);
exports.default = router;
//# sourceMappingURL=crud.routes.js.map