import express from 'express'
import { Deleteuser, FetchData, Updateuser, saveuser } from '../controllers/controller.js';

const userRouter=express.Router();

userRouter.post('/user',saveuser);
userRouter.get('/user/fetch',FetchData);
userRouter.put('/user/update/:id',Updateuser);
userRouter.delete('/user/delete/:id',Deleteuser);


export default userRouter;