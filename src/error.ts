interface IAppError {
  message: string
  code: number
  data: any
}

export default class AppError extends Error {
  message: string
  code: number
  data: any

  constructor(err: IAppError) {
    super(err.message)
    this.name = this.constructor.name
    this.code = err.code
    this.data = err.data
  }
}
