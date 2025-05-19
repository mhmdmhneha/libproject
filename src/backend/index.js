"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)(), express_1.default.json());
// Health check
app.get('/', (_req, res) => {
    res.send('✅ Backend is running!');
});
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Backend listening at http://localhost:${PORT}`);
});
