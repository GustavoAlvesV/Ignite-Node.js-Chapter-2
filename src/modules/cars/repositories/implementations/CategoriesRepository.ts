import { Category } from "../../model/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../ICategoriesRespository";

// eslint-disable-next-line spaced-comment
//singleton => criar apenas uma instância de uma classe, essa sendo global.

class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];

  private static INSTANCE: CategoriesRepository;

  private constructor() {
    this.categories = [];
  }

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }
    return CategoriesRepository.INSTANCE;
  }

  create({ name, description }: ICreateCategoryDTO): Category {
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
