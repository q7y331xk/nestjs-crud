import { HttpStatus } from '@nestjs/common';
import { GenericObject } from '../types/shared.types';

export abstract class ResponseJson {
  constructor(result?: GenericObject | null, statusCode?: number, message?: string) {
    this.result = result || null;
    this.statusCode = statusCode;
    this.message = message;
  }
  result: GenericObject | null;
  message: string;
  statusCode: number;
}

export class ResponseSuccess extends ResponseJson {
  constructor(result?: GenericObject | null, statusCode?: number, message?: string) {
    super(result);
    this.statusCode = statusCode || HttpStatus.OK;
    this.message = message || "ok";
  }
}

export class ResponseException extends ResponseJson {
  constructor(result?: GenericObject | null, statusCode?: number, message?: string) {
    super(result);
    this.statusCode = statusCode || HttpStatus.BAD_REQUEST;
    this.message = message || "bad request";
  }
}