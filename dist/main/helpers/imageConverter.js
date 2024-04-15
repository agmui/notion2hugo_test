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
exports.convertWebp = void 0;
const fs_extra_1 = require("fs-extra");
const path_1 = require("path");
const imagemin_1 = __importDefault(require("imagemin"));
const imagemin_webp_1 = __importDefault(require("imagemin-webp"));
const logger_1 = require("../logger");
const convertWebp = (originalImagePath) => __awaiter(void 0, void 0, void 0, function* () {
    const directory = (0, path_1.dirname)(originalImagePath);
    const ext = (0, path_1.extname)(originalImagePath);
    const filename = (0, path_1.basename)(originalImagePath, ext);
    if (ext === ".webp") {
        (0, logger_1.log)(`[Converter] This file is already in webp format: Skip conversion process: ${originalImagePath}`);
        return originalImagePath;
    }
    (0, logger_1.log)(`[Converter] Attempt image conversion: ${originalImagePath}`);
    yield (0, imagemin_1.default)([originalImagePath], {
        destination: directory,
        plugins: [(0, imagemin_webp_1.default)({ quality: 75 })],
    });
    const webpFilename = (0, path_1.normalize)(`${directory}/${filename}.webp`);
    if (yield (0, fs_extra_1.pathExists)(webpFilename)) {
        (0, logger_1.log)(`[Converter] Convert image successfully: ${webpFilename}: Remove original file.`);
        try {
            yield (0, fs_extra_1.remove)(originalImagePath);
        }
        catch (err) {
            (0, logger_1.log)(`[Converter] Failed to remove file: ${originalImagePath}: errors: ${err}`, logger_1.LogTypes.warn);
        }
        return webpFilename;
    }
    else {
        (0, logger_1.log)(`[Converter] Failed to convert image: origin: ${originalImagePath}`);
        return "";
    }
});
exports.convertWebp = convertWebp;
//# sourceMappingURL=imageConverter.js.map