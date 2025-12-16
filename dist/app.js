"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes/routes"));
const buildApp = () => {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.get("/", (req, res) => {
        res.status(200).json({
            success: true,
            message: "Сервер запущен успешно ✅",
        });
    });
    app.use("/api", routes_1.default);
    return app;
};
exports.default = buildApp;
//# sourceMappingURL=app.js.map