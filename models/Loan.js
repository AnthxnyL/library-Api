import mongoose from "mongoose";

const LoanSchema = new mongoose.Schema({
    loanDate: {
        type: Date,
        required: true,
        trim: true,
    },
    returnDate : {
        type: Date,
        required: true,
        trim: true
    },
    isReturned : {
        type: Boolean,
        default: false,
        required: true
    },
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    library : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Library',
        required : true
    },
    book : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
        required : true,
    }
})


const Loan = mongoose.model("Loan", LoanSchema);

export default Loan;