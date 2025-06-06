import mongoose from "mongoose";

const LibrarySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 50
    },
    localisation: {
        type: String,
        required: true,
        trim: true
    }
})


LibrarySchema.index(
    { name: "text", localisation: "text" },
);


const Library = mongoose.model("Library", LibrarySchema);

export default Library;