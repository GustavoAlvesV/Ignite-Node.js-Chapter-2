import { Request, Response } from "express";

import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

class ListSpecificationsController {
  constructor(private listSpecificationsUseCase: ListSpecificationsUseCase) {
    // Do nothing
  }
  handle(request: Request, response: Response): Response {
    const all = this.listSpecificationsUseCase.execute();
    return response.status(201).json(all);
  }
}

export { ListSpecificationsController };
