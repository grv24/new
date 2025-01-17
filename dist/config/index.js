"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config = {
    PORT: process.env.PORT,
    DB_URL: process.env.MONGODB_URI,
};
exports.config = config;
if (!config.PORT || !config.DB_URL) {
    throw new Error("Missing required environment variables");
}
//# sourceMappingURL=index.js.map