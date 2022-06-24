import autoBind from "auto-bind"

export abstract class BaseController {
  constructor () {
    autoBind(this)
  }

  // public handleError (error: any) {
  //   console.error(error)
  // }

  // public handleSuccess (res: any, data: any) {
  //   res.status(200).json({
  //     ok: true,
  //     data
  //   })
  // }
}
