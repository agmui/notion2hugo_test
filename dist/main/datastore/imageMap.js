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
exports.createOrUpdateImageMap = exports.updateImageMap = exports.createImageMap = exports.findByImageId = void 0;
const nedb_1 = __importDefault(require("@seald-io/nedb"));
const logger_1 = require("../logger");
// Cache the last modified date of a Notion's page with
// Notion's pageId as the primary key.
const LOCAL_DATABASE_NAME = "./.notion-hugo-cache/image_map.cache";
const db = new nedb_1.default({
    filename: LOCAL_DATABASE_NAME,
    autoload: true,
    corruptAlertThreshold: 0,
});
const findByImageId = (imageId) => __awaiter(void 0, void 0, void 0, function* () {
    let docs;
    try {
        docs = yield db.findAsync({ imageId: imageId });
    }
    catch (error) {
        throw new Error(`Unexpected error occurred in findAsync: imageMap: ${error}`);
    }
    if (docs && docs.length === 0) {
        return null;
    }
    if (docs && docs.length > 1) {
        (0, logger_1.log)("More than 1 record was found. Check the database unexpectedly.", logger_1.LogTypes.error);
        throw new Error("Invalid query");
    }
    return docs[0];
});
exports.findByImageId = findByImageId;
const createImageMap = (imageId, filePath) => __awaiter(void 0, void 0, void 0, function* () {
    const modelPage = yield (0, exports.findByImageId)(imageId);
    if (modelPage && modelPage.imageId) {
        (0, logger_1.log)(`Record already exists: imageId: ${imageId}`, logger_1.LogTypes.info);
        return null;
    }
    const data = { imageId: imageId, filePath: filePath };
    try {
        yield db.insertAsync(data);
    }
    catch (error) {
        throw new Error(`Unexpected error occurred in insertAsync: imageMap: ${error}`);
    }
    return yield (0, exports.findByImageId)(imageId);
});
exports.createImageMap = createImageMap;
const updateImageMap = (imageId, filePath) => __awaiter(void 0, void 0, void 0, function* () {
    const modelPage = yield (0, exports.findByImageId)(imageId);
    if (!modelPage) {
        (0, logger_1.log)(`Record Not Found: Skip record update process: pageId: ${imageId}`, logger_1.LogTypes.warn);
        return null;
    }
    const query = {
        imageId: modelPage.imageId,
    };
    const options = {
        multi: false,
        upsert: false,
    };
    const data = { imageId: imageId, filePath: filePath };
    try {
        yield db.updateAsync(query, data, options);
    }
    catch (error) {
        throw new Error(`Unexpected error occurred in updateAsync: imageMap: ${error}`);
    }
    return yield (0, exports.findByImageId)(imageId);
});
exports.updateImageMap = updateImageMap;
const createOrUpdateImageMap = (imageId, filePath) => __awaiter(void 0, void 0, void 0, function* () {
    const modelPage = yield (0, exports.findByImageId)(imageId);
    if (modelPage && modelPage.imageId) {
        return (0, exports.updateImageMap)(imageId, filePath);
    }
    else {
        return (0, exports.createImageMap)(imageId, filePath);
    }
});
exports.createOrUpdateImageMap = createOrUpdateImageMap;
//# sourceMappingURL=imageMap.js.map