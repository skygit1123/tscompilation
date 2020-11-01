import * as express from "express";
import * as path from "path";
import { Question } from "../@types/Question";

const questions: Question[] = [
  {
    title: "How to login",
    content: "How do i login",
    answerCount: 2
  }
];
const port : string | number = process.env.port || 1337;

const app = express();
app.use(express.static("public"));
app.listen(port);
console.log("Listening on port " + port);

app.get("/questions", (_req, res) => {
  res.json(questions);
});

app.get("/main.js", (_req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "client", "client.js"));
});
