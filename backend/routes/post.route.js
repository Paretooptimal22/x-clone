import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import { createPost } from "../controllers/post.controller.js";

const router = express.Router();

router.post("/create", protectRoute, createPost);
// Router.post("/like/:id", protectRoute, likeUnlikePost);
// Router.post("/comment/:id", protectRoute, commentOnPost);
// Router.delete("/", protectRoute, deletePost);

export default router;
