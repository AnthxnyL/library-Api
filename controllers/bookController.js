import Book from '../models/book.js';

export const getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


export const createBook = async (req, res) => {
    const bookData = req.body;
    try {
        const newBook = new Book(bookData);
        await newBook.save();
        res.status(201).json(newBook);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const updateBook = async (req, res) => {
    const { id } = req.params;
    const bookData = req.body;
    try {
        const updatedBook = await Book.findByIdAndUpdate(id, bookData, { new: true });
        if (!updatedBook) return res.status(404).json({ message: "Book not found" });
        res.json(updatedBook);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


export const deleteBook = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedBook = await Book.findByIdAndDelete(id);
        if (!deletedBook) return res.status(404).json({ message: "Book not found" });
        res.json({ message: "Book successfully deleted" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const getBookByFilter = async (req, res) => {
    const { title, author, type, category, language, isbn, q } = req.query;
    try {
        const match = {};
        if (title) match.name = { $regex: title, $options: 'i' };
        if (author) match.author = { $regex: author, $options: 'i' };
        if (type) match.type = { $regex: type, $options: 'i' };
        if (category) match.category = { $regex: category, $options: 'i' };
        if (language) match.language = { $regex: language, $options: 'i' };
        if (isbn) match.isbn = isbn;
        if (q) match.$text = { $search: q };

        const pipeline = [
            { $match: match }
        ];

        if (q) {
            pipeline.push(
                { $addFields: { score: { $meta: "textScore" } } },
                { $sort: { score: -1 } }
            );
        }

        const books = await Book.aggregate(pipeline);
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

