import express from "express";
import { fetchAllPostController,fetchAllUserController,fetchItemByIdUserController,fetchItemByIdPostController,insertItemPostController,insertItemUserController, } from "../controler/Controler.js";

const Router = express.Router();
Router.get('/getAllUsers',fetchAllUserController);
Router.post('/createUser',insertItemUserController)
Router.get('/getUserById/:id',fetchItemByIdUserController);

Router.get('/getAllpost',fetchAllPostController);
Router.post('/createpost',insertItemPostController)
Router.get('/getpostById/:interestTag',fetchItemByIdPostController);

export{Router as routes};

