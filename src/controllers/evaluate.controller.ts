import { Request, Response, NextFunction } from "express";
import { Ianswer } from "../interfaces/answer.interface";
import evaluateService from "../services";

export const evaluate = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  res
    .status(201)
    .json(await evaluateService.evaluate(req.body.answers as Array<Ianswer>));
};
