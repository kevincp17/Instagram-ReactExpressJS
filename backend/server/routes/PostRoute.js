import { Router } from "express";
import IndexController from "../controllers/IndexController";

const router= new Router()

router.get('/',IndexController.PostController.findAll)
router.get('/:id',IndexController.PostController.findOne)
router.post('/',IndexController.PostController.create)
router.put('/:id',IndexController.PostController.update)
router.delete('/:id',IndexController.PostController.deleted)

export default router