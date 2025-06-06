import Loan from '../models/Loan.js';


export const createLoan = async (req, res) => {
    const loanData = req.body;
    try {
        const newLoan = new Loan(loanData);
        await newLoan.save();
        res.status(201).json(newLoan);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const getLoans = async (req, res) => {
    try {
        const loans = await Loan.find().populate('user book');
        res.json(loans);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateLoan = async (req, res) => {
    const { id } = req.params;
    const loanData = req.body;
    try {
        const updatedLoan = await Loan.findByIdAndUpdate(id, loanData, { new: true });
        if (!updatedLoan) return res.status(404).json({ message: "Loan not found" });
        res.json(updatedLoan);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const deleteLoan = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedLoan = await Loan.findByIdAndDelete(id);
        if (!deletedLoan) return res.status(404).json({ message: "Loan not found" });
        res.json({ message: "Loan successfully deleted" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}