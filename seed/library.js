import Book from "../models/Library.js";
import dotenv from "dotenv";

dotenv.config();

const libraries = [
    {
        name: "Central Library",
        localisation: "123 Main St, Springfield",
    },
    {
        name: "Westside Branch",
        localisation: "456 Elm St, Springfield",
    },
    {
        name: "Eastside Branch",
        localisation: "789 Oak St, Springfield",
    },
    {
        name: "Downtown Library",
        localisation: "101 Maple Ave, Springfield",
    },
    {
        name: "Northside Library",
        localisation: "202 Pine St, Springfield",
    }
]

const seedLibrary = async () => {
    try {
        await Book.deleteMany({});
        const createdLibrary = await Book.insertMany(libraries);
        console.log(`${createdLibrary.length} libraries created successfully!`);
    } catch (error) {
        console.error("Error seeding libraries:", error);
    }
};

export default seedLibrary;