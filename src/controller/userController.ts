import userModel from "../model/user";
import express, { Request, Response, NextFunction } from 'express';
import { userInterface } from "../model/user";


interface expressRequest {
    res: Response,
    req: Request,
    next: NextFunction

}




export const registerUser = async ({ res, req, next }: expressRequest) => {


    const body = req.body as userInterface;

    const checkEmail = await userModel.findOne({
        where: { email: body.email },
    });
    if (checkEmail) {
        res.json({ error: "Email already exists" })
    }
    else {
        userModel.create({
            givenName: body.givenName,
            parentName: body.parentName,
            email: body.email,
            picture: body.picture

        }).then((response) => {
            res.status(200).json({ response: "registered" })
        }).catch((error) => {
            res.json({ error: "Error" })

        })
    }

}

export const updateUser = () => {


}

export const getUserDetails = () => {


}

