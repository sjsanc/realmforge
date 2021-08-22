"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const db_1 = require("../config/db");
const baseRouter_1 = __importDefault(require("../modules/baseRouter"));
class Server {
    constructor() {
        db_1.connectToDatabase();
    }
    server() {
        return __awaiter(this, void 0, void 0, function* () {
            const app = express_1.default();
            app.use(express_1.default.json());
            app.use(express_1.default.urlencoded({ extended: true }));
            app.use('/api/v1', baseRouter_1.default.routes); //setting up base route
            // define a route handler for the default home page
            app.get("/", (req, res) => {
                res.send("Welcome to express-create application! ");
            });
            app.use(cors_1.default());
            return app;
        });
    }
}
exports.default = new Server();
//# sourceMappingURL=app.js.map