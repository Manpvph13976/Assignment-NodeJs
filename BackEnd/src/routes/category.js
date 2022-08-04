import express from "express";
import { list, read, add, remove, update } from "../controllers/category.js";

const router = express.Router();

router.get("/category", list);
router.get("/category/:id", read);
router.post("/category", add);
router.delete("/category/:id", remove);
router.put("/category/:id", update);

export default router;
