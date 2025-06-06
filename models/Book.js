import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 50
    },
    author: {
        type: String,
        required: false,
        trim: true,
        maxlength: 100
    },
    publisher : {
        type: String,
        trim: true,
        maxlength: 100
    },
    type: {
        type: String,
        required: true,
        enum: ['Fiction', 'Non-Fiction', 'Science', 'History', 'Biography', 'Fantasy', 'Mystery', 'Romance'],
        default: 'Fiction'
    },
    category : {
        type: String,
        required: true,
        enum: ['Books', 'Magazines', 'Comics', 'Journals', 'Guidebooks'],
        default: 'Books'
    },
    publishingDate: {
        type: Date,
        required: true,
        trim: true,
    },
    isbn: {
        type: Number,
        required: true,
        unique: true,
        trim: true,
    },
    pagesNumber: {type: Number},
    language: {
        type: String,
        required: true,
        enum: ['English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese', 'Other'],
        default: 'English'
    },
    description: {
        type: String,
        required: false,
        trim: true,
        maxlength: 1000
    },
    loan :{
        type :  mongoose.Schema.Types.ObjectId,
        ref: 'Loan',
        required: false
    }
})

BookSchema.index(
    { name: "text", author: "text", description: "text", isbn: "text" },
    { weights: { name: 5, author: 3, description: 1, isbn: 2 } }
);



const Book = mongoose.model("Book", BookSchema);

export default Book;