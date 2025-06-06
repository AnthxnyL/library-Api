import User from "../models/User.js";
import dotenv from "dotenv";

dotenv.config();

const users = [
    {
        firstname: "John",
        lastname: "Doe",
        currentLoan: "6842e87ce2f7a07e8adf2c3f" 
    },
    {
        firstname: "Jane",
        lastname: "Smith",
        
    },
    {
        firstname: "Alice",
        lastname: "Johnson",
       
    },
    {
        firstname: "Bob",
        lastname: "Brown",
       
    },
    {
        firstname: "Charlie",
        lastname: "Davis",
        currentLoan: "6842e87ce2f7a07e8adf2c40" 
    }
]


const seedUsers = async () => {
    try {
        await User.deleteMany({});
        const createdUsers = await User.insertMany(users);
        console.log(`${createdUsers.length} users created successfully!`);
    } catch (error) {
        console.error("Error seeding users:", error);
    }
}

export default seedUsers;