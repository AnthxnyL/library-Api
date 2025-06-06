import Loan from "../models/Loan.js";
import Book from "../models/book.js";
import User from "../models/User.js";
import Library from "../models/Library.js";
import dotenv from "dotenv";

dotenv.config();

const seedLoans = async () => {
    try {
        const book = await Book.findOne();
        const user = await User.findOne();
        const library = await Library.findOne();

        if (!book || !user) {
            console.error("Aucun livre ou utilisateur trouvé pour créer un prêt.");
            return;
        }

        const loans = [
            {
                book: book._id,
                user: user._id,
                library: library._id,
                loanDate: new Date("2024-06-01"),
                returnDate: new Date("2024-06-15"),
                isReturned: "true"
            },
            {
                book: book._id,
                user: user._id,
                library: library._id,
                loanDate: new Date("2024-06-10"),
                returnDate: new Date("2024-06-15"),
                isReturned: "false"
            }
        ];

        await Loan.deleteMany({});
        const createdLoans = await Loan.insertMany(loans);
        console.log(`${createdLoans.length} loans créés avec succès !`);
    } catch (error) {
        console.error("Erreur lors du seed des loans :", error);
    }
};

export default seedLoans;