import { xxxmodel } from "../models/model.js";
import { StatusCodes } from 'http-status-codes'
export async function saveuser(req, res) {
    try {
        
        req.body.date = new Date()
        const user = new xxxmodel(req.body);
        const s = await user.save();
        res.status(StatusCodes.CREATED).json(s);
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Error saving user' });
    }
}


export async function FetchData(req, res) {
    try {
        const data = await xxxmodel.count();
        res.status(StatusCodes.OK).json(data);
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Error fetching data' })
    }
}

export async function Updateuser(req, res) {
    try {
        const update = await xxxmodel.findByIdAndUpdate(req.params.id, req.body);
        res.status(StatusCodes.OK).json(update);
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Error updating" });
    }
}


export async function Deleteuser(req, res) {
    try {
        const delet = await xxxmodel.findByIdAndDelete(req.params.id);
        res.status(StatusCodes.NO_CONTENT).json(delet);
    } catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Error deleting" });
    }
}