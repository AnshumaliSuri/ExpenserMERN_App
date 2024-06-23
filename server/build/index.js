"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const financial_records_1 = __importDefault(require("./routes/financial-records"));
const cors_1 = __importDefault(require("cors"));
const dotenv = require('dotenv');
const path = require('path');
dotenv.config({ path: path.resolve(__dirname, '../.env') });
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const mongoURI = process.env.MONGO_URI;
mongoose_1.default.connect(mongoURI).then(() => console.log("Connected to MongoDB")).catch((err) => console.error("Failed to connect"));
app.use('/financial-records', financial_records_1.default);
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
