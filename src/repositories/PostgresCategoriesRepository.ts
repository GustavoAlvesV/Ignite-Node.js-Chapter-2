import { Category } from "../model/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDto,
} from "./ICategoriesRespository";

class PostgresCategoriesRepository implements ICategoriesRepository {
  findByName(name: string): Category {
    console.log(name);
    return null;
  }
  list(): Category[] {
    return null;
  }
  create({ name, description }: ICreateCategoryDto): Category {
    console.log(name, description);
    return null;
  }
}

export { PostgresCategoriesRepository };
