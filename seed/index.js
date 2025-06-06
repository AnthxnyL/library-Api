import mongoose from 'mongoose';
import seedBooks from './book.js';
import seedLibraries from './library.js';
import seedUsers from './user.js';
import seedLoans from './loan.js';

const seed = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to DB');
        await seedBooks();
        await seedLibraries();
        await seedUsers();
        await seedLoans();
        process.exit(0);
    } catch (error) {
        console.error('Error seeding data:', error);
        process.exit(0);
    }
}

seed();