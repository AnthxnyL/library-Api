import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true,
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
    },
    currentLoan : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Loan',
        required: false
    }
})


UserSchema.index(
    { firstname: "text", lastname: "text" },
);


const User = mongoose.model("User", UserSchema);

export default User;