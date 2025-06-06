import User from "../models/User.js";
import Loan from "../models/Loan.js";


export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getCurrentLoans = async (req, res) => {
    try {
       
        const users = await User.find({ currentLoan: { $exists: true, $ne: null } })
        if (users.length === 0) {
            return res.status(404).json({ message: "Aucun utilisateur n'a de livre emprunté" });
        }
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) return res.status(404).json({ message: "Utilisateur non trouvé" });
        res.json({ message: "Utilisateur supprimé avec succès" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const createUser = async (req, res) => {
    const userData = req.body;
    try {
        const newUser = new User(userData);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getUserLoans = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id).populate('currentLoan');
        if (!user) return res.status(404).json({ message: "Utilisateur non trouvé" });
        res.json(user.currentLoan);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};