import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { Response } from 'express';
import { ResponseException } from './http.types';

@Catch(ResponseException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(responseJsonException: ResponseException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const { statusCode: statusCodeWithThreeOrSixDigits } = responseJsonException;

    let statusCode = statusCodeWithThreeOrSixDigits;
    const statusCodeRemoveThreeDigits = Math.floor(statusCodeWithThreeOrSixDigits/1000)
    if ( statusCodeRemoveThreeDigits > 0 ) {
      statusCode = statusCodeRemoveThreeDigits;
    }

    response
      .status(statusCode)
      .json({
        timestamp: new Date().toISOString(),
        ...responseJsonException
      });
  }
}