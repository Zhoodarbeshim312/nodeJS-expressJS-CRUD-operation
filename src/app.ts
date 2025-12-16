import "dotenv/config";
import express from "express";
import globalRouter from "./routes/routes";
const buildApp = () => {
  const app = express();
  app.use(express.json());
  app.get("/", (req, res) => {
    res.status(200).json({
      success: true,
      message: "Сервер запущен успешно ✅",
    });
  });
  app.use("/api", globalRouter);
  return app;
};
export default buildApp;
