import { HttpStatus } from '@nestjs/common';

export const enum RetMsg {
  OK = 'ok',
  UNKNOWN_ERR = 'unknown error',
}

type GenericObject = { [key: string]: any };

const noData = { data: null };

interface ResponseJsonConstructor {
  result?: GenericObject;
  message?: string;
  statusCode?: number;
}
export class ResponseJson {
  constructor(result?: GenericObject, message?: string, statusCode?: number) {
    this.statusCode = statusCode;
    this.message = message;
    this.result = result;
  }
  statusCode!: number;
  message!: string;
  result!: GenericObject;
}

export class ResponseSuccessJson extends ResponseJson {
  constructor(result?: GenericObject, message?: string, statusCode?: number) {
    super();
    this.result = result || noData;
    this.message = message || RetMsg.OK;
    this.statusCode = statusCode || HttpStatus.OK;
  }
}

export class ResponseErrorJson extends ResponseJson {
  constructor(message?: string, statusCode?: number, result?: GenericObject) {
    super();
    this.result = result || noData;
    this.message = message || RetMsg.UNKNOWN_ERR;
    this.statusCode = statusCode || HttpStatus.BAD_REQUEST;
  }
}

export class REMOVED {
  static readonly KEEP = 0;
  static readonly REMOVE = 1;
  static readonly HOLD = 2;
}
