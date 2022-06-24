import { body } from 'express-validator';
import { MadRouter } from 'mad-server'
import { ExampleFactory } from '../../example/example-factory';
import exampleController from '../controllers/example.controller';
import validateRequest from '../middlewares/validateRequest';

//Normal functional controller
const getExample = {
  path: '/',
  method: 'GET',
  handler: exampleController.example
}

//Class based controllers
const exampleClassController = new ExampleFactory().getController()

const getClassExample = {
  path: '/class',
  method: 'GET',
  handler: exampleClassController.getExamples
}

const postClassExample = {
  path: '/class',
  method: 'POST',
  middlewares: [body('field1').exists(), body('field2').isString(), validateRequest],
  handler: exampleClassController.createExample
}


const router = new MadRouter({
  basePath: '/example',
  name: 'Example',
  handlers: [
    getExample, 
    getClassExample,
    postClassExample
  ]
})

export default router