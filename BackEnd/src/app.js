import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import routerProduct from "./routes/product";
import routerCategory from "./routes/category"

const app = express();
app.use(express.json());
app.use("/api", routerProduct);
app.use("/api", routerCategory);

mongoose.connect("mongodb://localhost:27017/nhom3", () => {
  console.log("successfully");
});

app.listen(process.env.PORT, () => {
  console.log("Kết nối thành công, cổng " + process.env.PORT);
});
