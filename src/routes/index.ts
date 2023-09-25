import { Router } from "express";
import * as PageController from "../controllers/pageControllers";
import * as SearchController from "../controllers/serachController";


const router = Router();


router.get('/', PageController.home);
router.get('/dogs', PageController.dogs);
router.get('/cats', PageController.cats);
router.get('/fishes', PageController.fishes);

//rota da busca
router.get('/search', SearchController.seach);

export default router;