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
exports.downloadImage = exports.saveImageMap = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const fs_extra_1 = require("fs-extra");
const path_1 = require("path");
const imageMap_1 = require("../datastore/imageMap");
const logger_1 = require("../logger");
const imageConverter_1 = require("./imageConverter");
const notionImage_1 = require("./notionImage");
const fs_1 = __importDefault(require("fs"));
const axios_1 = __importDefault(require("axios"));
const resolveFilePath = (config, frontMatter, url) => __awaiter(void 0, void 0, void 0, function* () {
    const directory = yield determineDir(config, frontMatter);
    yield (0, fs_extra_1.ensureDir)(directory);
    const iamgeFileName = (0, notionImage_1.getImageFilename)(url);
    const imageUID = (0, notionImage_1.getImageUID)(url);
    const filename = `${imageUID}-${iamgeFileName}`;
    return `${directory}/${filename}`;
});
const determineDir = (config, frontMatter) => __awaiter(void 0, void 0, void 0, function* () {
    if (!config.saveAwsImageDirectory)
        throw new Error(`Unable to resolve save directory`);
    const m = frontMatter.date.match(/^(\d{4})/);
    const year = m ? m[1] : ".";
    return (0, path_1.join)(config.saveAwsImageDirectory, year, frontMatter.sys.pageId);
});
const saveImageMap = (s3ImageUrl, filepath) => __awaiter(void 0, void 0, void 0, function* () {
    const id = (0, notionImage_1.getImageFullName)(s3ImageUrl);
    yield (0, imageMap_1.createOrUpdateImageMap)(id, filepath);
});
exports.saveImageMap = saveImageMap;
const checkExistsImageMapAndFileCache = (s3url) => __awaiter(void 0, void 0, void 0, function* () {
    const imageId = (0, notionImage_1.getImageFullName)(s3url);
    const imageMapModel = yield (0, imageMap_1.findByImageId)(imageId);
    const idExists = !!imageMapModel;
    if (!idExists)
        return false;
    const fileExists = yield (0, fs_extra_1.pathExists)(imageMapModel.filePath);
    if (idExists && fileExists) {
        return true;
    }
    return false;
});
const downloadImage = (config, frontMatter, url) => __awaiter(void 0, void 0, void 0, function* () {
    if (!config.saveAwsImageDirectory) {
        return null;
    }
    const filepath = yield resolveFilePath(config, frontMatter, url);
    if (yield checkExistsImageMapAndFileCache(url)) {
        (0, logger_1.log)(`[Info] File already exists: Skipping download process: ${filepath}`, logger_1.LogTypes.info);
        return filepath;
    }
    const response = yield (0, axios_1.default)({
        url,
        method: "GET",
        responseType: "stream",
    });
    return new Promise((resolve, reject) => {
        response.data
            .pipe(fs_1.default.createWriteStream(filepath))
            .on("error", (err) => {
            (0, logger_1.log)(`[Error] Attempts to download iamge: ${filepath}: ${err}`, logger_1.LogTypes.error);
            reject(null);
        })
            .once("close", () => __awaiter(void 0, void 0, void 0, function* () {
            (0, logger_1.log)(`[Info] Attempts to download iamge successfully: ${filepath}`, logger_1.LogTypes.info);
            let publishImagePath;
            if (config.s3ImageConvertToWebpEnalbed) {
                const webpImage = yield (0, imageConverter_1.convertWebp)(filepath);
                publishImagePath = webpImage !== "" ? webpImage : filepath;
            }
            else {
                publishImagePath = filepath;
            }
            yield (0, exports.saveImageMap)(url, publishImagePath);
            resolve(publishImagePath);
        }));
    });
});
exports.downloadImage = downloadImage;
//# sourceMappingURL=donwload.js.map