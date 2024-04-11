import express from "express";
const router = express.Router();
import {
  createCategory,

} from "../controllers/categoryController.js";

import { authenticate, authorizedAdmin } from "../middlewares/authMiddleware.js";

router.route("/").post(authenticate, authorizedAdmin, createCategory);
// router.route("/:categoryId").put(authenticate, authorizeAdmin, updateCategory);
// router
//   .route("/:categoryId")
//   .delete(authenticate, authorizeAdmin, removeCategory);

// router.route("/categories").get(listCategory);
// router.route("/:id").get(readCategory);

export default router;