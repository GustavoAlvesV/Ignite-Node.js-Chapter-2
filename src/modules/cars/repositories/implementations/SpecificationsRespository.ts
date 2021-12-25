import { Specification } from "../../model/Specification";
import {
  ISpecificationsRespository,
  ISpecificationsRespositoryDTO,
} from "../ISpecificationsRespository";

class SpecificationsRespository implements ISpecificationsRespository {
  private specifications: Specification[];

  private static INSTANCE: SpecificationsRespository;

  private constructor() {
    this.specifications = [];
  }

  public static getInstance(): SpecificationsRespository {
    if (!SpecificationsRespository.INSTANCE) {
      SpecificationsRespository.INSTANCE = new SpecificationsRespository();
    }
    return SpecificationsRespository.INSTANCE;
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find(
      (specification) => specification.name === name
    );
    return specification;
  }
  list(): Specification[] {
    return this.specifications;
  }
  create({ name, description }: ISpecificationsRespositoryDTO): Specification {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(specification);

    return specification;
  }
}

export { SpecificationsRespository };
