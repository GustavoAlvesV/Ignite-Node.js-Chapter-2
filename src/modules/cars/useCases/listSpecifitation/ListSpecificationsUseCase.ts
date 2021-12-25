import { Specification } from "../../model/Specification";
import { ISpecificationsRespository } from "../../repositories/ISpecificationsRespository";

class ListSpecificationsUseCase {
  constructor(private specificationsRespository: ISpecificationsRespository) {
    // do nothing.
  }

  execute(): Specification[] {
    return this.specificationsRespository.list();
  }
}

export { ListSpecificationsUseCase };
