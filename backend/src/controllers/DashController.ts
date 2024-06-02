import { Request, Response } from "express";

export const index = async (req: Request, res: Response) => {
    return res.status(200).json("Primeira Rota");
}