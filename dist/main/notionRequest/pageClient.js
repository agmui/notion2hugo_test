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
exports.getBlocks = exports.getArticle = void 0;
const client_1 = __importDefault(require("./client"));
const getArticle = (pageId) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield client_1.default.pages.retrieve({ page_id: pageId });
    return response;
});
exports.getArticle = getArticle;
// Expecting to use the "Notion to Markdown" package
const getBlocks = (blockId) => __awaiter(void 0, void 0, void 0, function* () {
    const blocks = [];
    let cursor;
    // eslint-disable-next-line no-constant-condition
    while (true) {
        const response = (yield client_1.default.blocks.children.list({
            start_cursor: cursor,
            block_id: blockId,
        }));
        const results = response.results;
        const next_cursor = response.next_cursor;
        blocks.push(...results);
        if (!next_cursor) {
            break;
        }
        cursor = next_cursor;
    }
    return blocks;
});
exports.getBlocks = getBlocks;
//# sourceMappingURL=pageClient.js.map