import Book from "../models/book.js";

export const getBookStats = async (req, res) => {
    try {
        const totalBooks = await Book.countDocuments();

        const booksByType = await Book.aggregate([
            { $group: { _id: "$type", count: { $sum: 1 } } }
        ]);

        const longestBook = await Book.findOne().sort({ pagesNumber: -1 }).limit(1);

        const shortestBook = await Book.findOne().sort({ pagesNumber: 1 }).limit(1);

         const mostPresentAuthorAgg = await Book.aggregate([
            { $group: { _id: "$author", count: { $sum: 1 } } },
            { $sort: { count: -1 } },
            { $limit: 1 }
        ]);
        
        const mostPresentAuthor = mostPresentAuthorAgg[0] || null;

        const languagesAgg = await Book.distinct("language");
        const languagesCount = languagesAgg.length;

        res.json({
            totalBooks,
            booksByType,
            longestBook,
            shortestBook,
            mostPresentAuthor,
            languagesCount
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};