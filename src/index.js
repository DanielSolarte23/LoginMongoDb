import app from "./app.js";
import { conectDB } from "./config/bd.js";

conectDB();
app.listen(3000)
console.log("server on port", 3000);