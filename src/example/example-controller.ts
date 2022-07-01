import { Request, Response } from 'express'
import { BaseController } from '../lib/base-controller/base-controller'
import { ExampleService } from './example-service'

// Extend class controller from BaseController to autoBind methods and be compatible with express route handler
export class ExampleController extends BaseController {
  public constructor (private readonly exampleService: ExampleService) {
    super()
  }

  public async getExamples (req: Request, res: Response): Promise<void> {
    const examples = await this.exampleService.getExamples()
    res.json({
      ok: true,
      examples
    })
  }

  public async createExample (req: Request, res: Response): Promise<void> {
    const example = req.body
    const exampleCreated = await this.exampleService.createExample(example)
    res.json({
      ok: true,
      example: exampleCreated
    })
  }
}
