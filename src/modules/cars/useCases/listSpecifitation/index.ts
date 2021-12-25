import { SpecificationsRespository } from "../../repositories/implementations/SpecificationsRespository";
import { ListSpecificationsController } from "./ListSpecificationsController";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

const specificationRepository = SpecificationsRespository.getInstance();

const listSpecificationsUseCase = new ListSpecificationsUseCase(
  specificationRepository
);
const listSpecificationController = new ListSpecificationsController(
  listSpecificationsUseCase
);

export { listSpecificationController, listSpecificationsUseCase };
