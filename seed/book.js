import Book from "../models/book.js";
import Loan from "../models/Loan.js";
import User from "../models/User.js";
import Library from "../models/Library.js";

import dotenv from "dotenv";

dotenv.config();

const books = [
    {
        name: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        publisher: "Scribner",
        type: "Fiction",
        category: "Books",
        publishingDate: new Date("1925-04-10"),
        isbn: 9780743273565,
        pagesNumber: 180,
        language: "English",
        description: "A novel set in the Roaring Twenties that explores themes of decadence, idealism, resistance to change, social upheaval, and excess.",
    },
    {
        name: "7e Mer",
        author: "John Wick Presents",
        publisher: "Studio Agate",
        type: "Fiction",
        category: "Guidebooks",
        publishingDate: new Date("1960-07-11"),
        isbn: 9780061120084,
        pagesNumber: 281,
        language: "French",
        description: "A novel about the serious issues lorelated to racial injustice and moral growth in the Deep South during the 1930s.",

    },
    {
        name: "1984",
        author: "George Orwell",
        publisher: "Secker & Warburg",
        type: "Fiction",
        category: "Books",
        publishingDate: new Date("1949-06-08"),
        isbn: 9780451524935,
        pagesNumber: 328,
        language: "English",
        description: "A dystopian novel that explores the dangers of totalitarianism, mass surveillance, and censorship.",
    }, 
]

const seedBooks = async () => {
    try {
        await Book.deleteMany({});
        await Loan.deleteMany({});

        const createdBooks = await Book.insertMany(books);
        const user = await User.findOne();
        const library = await Library.findOne(); 

        if (user && library) {
            const loan = await Loan.create({
                book: createdBooks[0]._id,
                user: user._id,
                library: library._id, 
                loanDate: new Date("2024-06-01"),
                returnDate: new Date("2024-08-01"),
                isReturned: false
            });

            await Book.findByIdAndUpdate(
                createdBooks[0]._id,
                { $push: { loan: loan._id } }
            );
        }

        console.log(`${createdBooks.length} books created successfully!`);
    } catch (error) {
        console.error("Error seeding books:", error);
    }
};

export default seedBooks;