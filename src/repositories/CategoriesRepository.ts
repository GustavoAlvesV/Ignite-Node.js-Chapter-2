import { Category } from "../model/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDto,
} from "./ICategoriesRespository";

class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({ name, description }: ICreateCategoryDto): Category {
    const categoty = new Category();

    Object.assign(categoty, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(categoty);

    return categoty;
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category {
    const categoty = this.categories.find((category) => category.name === name);
    return categoty;
  }
}

export { CategoriesRepository };
