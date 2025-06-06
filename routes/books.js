import express from 'express';
import {
    createBook,
    deleteBook,
    getBooks,
    updateBook,
    getBookByFilter,
    getBookStats

} from '../controllers/bookController.js';

const router = express.Router();

router.post("/", createBook);
router.get("/", getBooks);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);
router.get("/filter", getBookByFilter);
router.get('/stats', getBookStats);



export default router;