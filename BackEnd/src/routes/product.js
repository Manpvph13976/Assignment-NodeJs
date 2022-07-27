import express from "express";
import { list, read, create, remove, update } from "../controllers/product.js";

const router = express.Router();

router.get("/products", list);
router.get("/product/:id", read);
router.post("/product", create);
router.delete("/product/:id", remove);
router.patch("/product/:id", update);

export default router;
