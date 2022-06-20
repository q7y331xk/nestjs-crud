import { HttpStatus } from '@nestjs/common'

export const enum RetMsg {
  OK = 'ok',
  UNKNOWN_ERR = 'unknown error',
}

type GenericObject = { [key: string]: any };

export class ResponseJson {
  constructor(result?: GenericObject, message?: string, statusCode?: number) {
      this.statusCode = statusCode || HttpStatus.OK
      this.message = message || RetMsg.OK
      this.result = result
  }
  statusCode!: number
  message!: string
  result!: GenericObject
}

export class ResponseSuccessJson extends ResponseJson {
  constructor(result?: GenericObject) {
    super(result);
    this.message = RetMsg.OK;
    this.statusCode = HttpStatus.OK
  }
}

export class ResponseErrorJson extends ResponseJson {
  constructor(result?: GenericObject) {
    super(result);
    this.message = RetMsg.UNKNOWN_ERR;
    this.statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
  }
}

export class REMOVED {
    static readonly KEEP = 0
    static readonly REMOVE = 1
    static readonly HOLD = 2
}