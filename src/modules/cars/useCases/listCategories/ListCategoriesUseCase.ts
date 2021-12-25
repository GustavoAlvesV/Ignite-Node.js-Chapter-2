import { Category } from "../../model/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRespository";

class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {
    // do nothing.
  }

  execute(): Category[] {
    return this.categoriesRepository.list();
  }
}

export { ListCategoriesUseCase };
