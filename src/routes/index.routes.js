import { Router } from "express";
import { 
    ping,
    principal
} from "../controllers/index.controller.js";

const router = Router();

router.get('/ping',ping);
router.get('/', principal);

export default router;