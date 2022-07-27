import express from "express";
import { list, read, create, remove, update } from "../controllers/category.js";

const router = express.Router();

router.get("/category", list);
router.get("/category", read);
router.post("category", create);
router.delete("/category/:id", remove);
router.patch("/category/:id", update);

export default router;
