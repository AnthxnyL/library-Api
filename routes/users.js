import express from 'express';

import {
    getUsers,
    getCurrentLoans,
    deleteUser,
    createUser
} from '../controllers/userController.js';

const router = express.Router();

router.get("/", getUsers);
router.get("/loan", getCurrentLoans);
router.delete("/:id", deleteUser);
router.post("/", createUser);


export default router;