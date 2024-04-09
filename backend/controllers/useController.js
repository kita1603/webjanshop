import User from "../models/useModel.js";
import asyncHandler from "../middlewares/asyncHandler.js";

const createUser = asyncHandler(async (req, res) => {
    const {username, email, password} = req.body;

    if (!username || !email || !password) {
        throw new Error('Please fill all the inputs!')
    }
});

export {createUser};