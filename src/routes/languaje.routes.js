import { Router, request, response } from "express";
import { methods as languageController } from "./../controllers/language.controller";

const router = Router();

router.get("/", languageController.getLanguages);
router.get("/:id", languageController.getLanguage);
router.post("/", languageController.addLanguages);
router.delete("/:id", languageController.deleteLanguage);
router.put("/:id", languageController.updateLanguage);

export default router;