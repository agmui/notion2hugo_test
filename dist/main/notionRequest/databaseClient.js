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
exports.checkRequiredPropertiesExists = exports.getPublishedArticles = exports.getDtabaseMeta = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const logger_1 = require("../logger");
const client_1 = __importDefault(require("./client"));
const databaseId = process.env.NOTION_BLOG_DATABASE_ID;
const isAllIncludes = (searches, targets) => searches.every((el) => targets.includes(el));
const getDtabaseMeta = () => __awaiter(void 0, void 0, void 0, function* () {
    if (!databaseId)
        throw new Error("Notion databaseId does not defined.");
    const response = yield client_1.default.databases.retrieve({ database_id: databaseId });
    return response;
});
exports.getDtabaseMeta = getDtabaseMeta;
const getPublishedArticles = () => __awaiter(void 0, void 0, void 0, function* () {
    if (!databaseId)
        throw new Error("Notion databaseId does not defined.");
    const pages = [];
    let cursor = undefined;
    // eslint-disable-next-line no-constant-condition
    while (true) {
        const { results, next_cursor } = yield client_1.default.databases.query({
            database_id: databaseId,
            start_cursor: cursor,
            // filter: { // commented out because directories may not be published but may need to be used
            //   property: "isPublished",
            //   checkbox: {
            //     equals: true,
            //   },
            // },
            sorts: [
                {
                    property: "Created",
                    direction: "ascending",
                },
            ],
        });
        pages.push(...results);
        if (!next_cursor) {
            break;
        }
        cursor = next_cursor;
    }
    return pages;
});
exports.getPublishedArticles = getPublishedArticles;
// Check if Notion Database Properties meet the required blogging requirements
const checkRequiredPropertiesExists = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield (0, exports.getDtabaseMeta)();
    const keys = Object.keys(response["properties"]);
    const requiredProperties = [
        "isPublished",
        "PublishedAt",
        "UpdatedAt",
        "Tags",
        "Category",
        "ToC",
        "LegacyAlert",
        "Slug",
        "Url",
    ];
    if (isAllIncludes(requiredProperties, keys)) {
        return keys;
    }
    else {
        (0, logger_1.log)(keys);
        throw new Error('To generate the Hugo\'s front matter, you need prepare the Notion properties: Requries ["isPublished", "PublishedAt", "UpdatedAt", "Tags", "Category", "ToC", "legacyAlert", "Slug", "Url"]');
    }
});
exports.checkRequiredPropertiesExists = checkRequiredPropertiesExists;
//# sourceMappingURL=databaseClient.js.map