import { Category } from "../model/Category";

// DTO => Data transfer OBJECT
interface ICreateCategoryDto {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findByName(name: string): Category;
  list(): Category[];
  create({ name, description }): ICreateCategoryDto;
}

export { ICategoriesRepository, ICreateCategoryDto };
