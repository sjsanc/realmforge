"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
dotenv.config();
exports.config = {
    SERVER_PORT: process.env.PORT || "",
    NODE_ENV: process.env.NODE_ENV || "",
    DB_HOST: process.env.DB_HOST || "",
    DB_USERNAME: process.env.DB_USERNAME || "",
    DB_PASSWORD: process.env.DB_PASSWORD || "",
    DB_NAME: process.env.DB_NAME || "",
    DB_PORT: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
    TYPEORM_CONNECTION: "mysql",
    TYPEORM_DEBUG_MODE: process.env.TYPEORM_DEBUG_MODE
        ? JSON.parse(process.env.TYPEORM_DEBUG_MODE)
        : false,
};
//# sourceMappingURL=config.js.map