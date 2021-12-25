import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";
// import { PostgresCategoriesRepository } from "../repositories/PostgresCategoriesRepository";
import { CreateCategoryService } from "../Services/CreateCategoryService";

const categoriesRoutes = Router();

const categoryRepository = new CategoriesRepository();

const createCategoryService = new CreateCategoryService(categoryRepository);

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  createCategoryService.execute({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  const categories = categoryRepository.list();

  return response.status(201).json({ categories });
});

export { categoriesRoutes };
