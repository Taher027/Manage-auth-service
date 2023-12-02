import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
const app: Application = express();
const port = 3000;

//middle ware
app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
	res.send("Hello World!");
});

export default app;
