import { body } from 'express-validator';
import { MadRouter } from 'mad-server'
import exampleController from '../controllers/example.controller';

const getExample = {
  path: '/',
  method: 'GET',
  handler: exampleController.example
}

const postExample = {
  path: '/',
  method: 'POST',
  middlewares: [body('var1').exists(), body('var2').isString()],
  handler: exampleController.example
}

const router = new MadRouter({
  basePath: '/example',
  name: 'Example',
  handlers: [getExample]
})

export default router