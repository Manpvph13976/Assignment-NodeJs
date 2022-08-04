import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import routerProduct from "./routes/product";
import routerCategory from "./routes/category";
import routerAuth from "./routes/user";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", routerProduct);
app.use("/api", routerCategory);
app.use("/api", routerAuth);

const uri =
  "mongodb+srv://Manpvph13976:Manph13976@nodejs.eqapbqc.mongodb.net/NodeJs?retryWrites=true&w=majority";
mongoose.connect(uri, () => {
  console.log("successfully");
});

app.listen(process.env.PORT, () => {
  console.log("Kết nối thành công, cổng " + process.env.PORT);
});
