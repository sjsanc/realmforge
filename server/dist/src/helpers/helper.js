"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Helper {
    // eslint-disable-line
    createSuccessResponse(body) {
        const response = {
            status: body.status || 200,
            body: body.body || {},
            message: body.message || "Operation Completed Successfully",
        };
        return response;
    }
    createErrorResponse(error) {
        const response = {
            status: error.status || 500,
            message: error.message || "Internal Server Error",
        };
        return response;
    }
}
exports.Helper = Helper;
//# sourceMappingURL=helper.js.map