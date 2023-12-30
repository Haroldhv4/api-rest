import express from "express";
import morgan from "morgan";

//routes
import languageRoutes from "./routes/languaje.routes";

const app = express();

//configuraciones
app.set("port", 4000);
//middlewares
app.use(morgan("dev"));
app.use(express.json());
//Routes
app.use("/api/languages",languageRoutes);

export default app;