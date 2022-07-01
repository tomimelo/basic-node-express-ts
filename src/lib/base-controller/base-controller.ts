import autoBind from '../autoBind'

export abstract class BaseController {
  public constructor () {
    autoBind(this)
  }

  public abstract handleError (error: any): void
}
