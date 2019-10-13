import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Logistic} from "../entity/Logistic";

export class LogisticController {

    private logisticRepository = getRepository(Logistic);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.logisticRepository.find();
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.logisticRepository.save(request.body);
    }

    
}