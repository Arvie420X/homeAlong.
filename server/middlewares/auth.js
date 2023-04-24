import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config.js";


export const requireSignIn = (req, res, next) => {
    try {
        const decoded = jwt.verify(req.headers.authorization, JWT_SECRET, );
        req.user = decoded // req.user._id
        console.log(req.headers.authorization);
        // console.log(req);
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({error: 'Invalid or expired token.'})
    }
}