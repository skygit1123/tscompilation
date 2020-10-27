import * as express from "express";

const port : string | number = process.env.port || 1337;

const app = express();
app.use(express.static("public"));
app.listen(port);
console.log("Listening on port " + port);