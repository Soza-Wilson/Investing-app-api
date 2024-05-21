import { Router } from "express";
import { registerUser } from "../controller/userController";


const userRouter = Router()
userRouter.post("user/register-user/", registerUser)

export default userRouter;


