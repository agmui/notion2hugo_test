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
exports.deletePage = exports.updatePage = exports.createPage = exports.findByPageId = void 0;
const nedb_1 = __importDefault(require("@seald-io/nedb"));
const logger_1 = require("../logger");
// Cache the last modified date of a Notion's page with
// Notion's pageId as the primary key.
const db = new nedb_1.default({
    filename: "./.notion-hugo-cache/pages.cache",
    autoload: true,
    corruptAlertThreshold: 0,
});
const findByPageId = (pageId) => __awaiter(void 0, void 0, void 0, function* () {
    let docs;
    try {
        docs = yield db.findAsync({ pageId: pageId });
    }
    catch (error) {
        throw new Error(`Unexpected error occurred in findAsync: pageCache: ${error}`);
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
exports.findByPageId = findByPageId;
const createPage = (sys) => __awaiter(void 0, void 0, void 0, function* () {
    const modelPage = yield (0, exports.findByPageId)(sys.pageId);
    if (modelPage && modelPage.pageId) {
        (0, logger_1.log)(`Record already exists: pageId: ${sys.pageId}`, logger_1.LogTypes.warn);
        return null;
    }
    try {
        yield db.insertAsync(sys);
    }
    catch (error) {
        throw new Error(`Unexpected error occurred in findAsync: pageCache: ${error}`);
    }
    return yield (0, exports.findByPageId)(sys.pageId);
});
exports.createPage = createPage;
const updatePage = (newSys) => __awaiter(void 0, void 0, void 0, function* () {
    const modelPage = yield (0, exports.findByPageId)(newSys.pageId);
    if (!modelPage) {
        (0, logger_1.log)(`Record Not Found: Skip record update process: pageId: ${newSys.pageId}`, logger_1.LogTypes.warn);
        return null;
    }
    const query = {
        pageId: modelPage.pageId,
    };
    const options = {
        multi: false,
        upsert: false,
    };
    try {
        yield db.updateAsync(query, newSys, options);
    }
    catch (error) {
        throw new Error(`Unexpected error occurred in findAsync: pageCache: ${error}`);
    }
    return yield (0, exports.findByPageId)(newSys.pageId);
});
exports.updatePage = updatePage;
const deletePage = (pageId) => __awaiter(void 0, void 0, void 0, function* () {
    const modelPage = yield (0, exports.findByPageId)(pageId);
    if (!modelPage) {
        (0, logger_1.log)(`Record Not Found: Skip record update process: pageId: ${pageId}`, logger_1.LogTypes.warn);
        return false;
    }
    const query = {
        pageId: modelPage.pageId,
    };
    try {
        yield db.removeAsync({ query }, {});
    }
    catch (error) {
        throw new Error(`Unexpected error occurred in findAsync: pageCache: ${error}`);
    }
    return true;
});
exports.deletePage = deletePage;
//# sourceMappingURL=index.js.map