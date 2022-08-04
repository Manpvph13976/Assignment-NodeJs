import express from "express";
import { list, read, create, remove, update } from "../controllers/product.js";

const router = express.Router();

router.get("/products", list);
router.get("/products/:id", read);
router.post("/products", create);
router.delete("/products/:id", remove);
router.put("/products/:id", update);

export default router;
