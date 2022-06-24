import { Repository } from '../db/repository'
import { Example } from './example'
import { ExampleController } from './example-controller'
import { ExampleRepository } from './example-repository'
import { ExampleService } from './example-service'

export class ExampleFactory {
  public getController (): ExampleController {
    return new ExampleController(this.getService())
  }

  public getService (): ExampleService {
    return new ExampleService(this.getRepository())
  }

  public getRepository (): Repository<Example> {
    return new ExampleRepository()
  }
}
