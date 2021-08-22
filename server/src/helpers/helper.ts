export interface successResponse {
  status: number;
  body: any;
  message: string;
}

export interface errorResponse {
  status: number;
  message: string;
}

export interface IHelper {
  createSuccessResponse(body: any): successResponse;
  createErrorResponse(error: any): errorResponse;
}

export class Helper implements IHelper {
  // eslint-disable-line
  createSuccessResponse(body: any): successResponse {
    const response: successResponse = {
      status: body.status || 200,
      body: body.body || {},
      message: body.message || "Operation Completed Successfully",
    };
    return response;
  }
  createErrorResponse(error: any): errorResponse {
    const response: errorResponse = {
      status: error.status || 500,
      message: error.message || "Internal Server Error",
    };
    return response;
  }
}
