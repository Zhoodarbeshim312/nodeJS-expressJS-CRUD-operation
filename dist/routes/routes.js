"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const crud_routes_1 = __importDefault(require("../modules/crud/crud.routes"));
const globalRouter = (0, express_1.Router)();
globalRouter.use("/user", crud_routes_1.default);
exports.default = globalRouter;
//# sourceMappingURL=routes.js.map