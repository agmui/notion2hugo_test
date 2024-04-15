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
const fs_extra_1 = __importDefault(require("fs-extra"));
const index_1 = require("./index");
beforeAll(() => {
    fs_extra_1.default.unlinkSync("./.notion-hugo-cache/pages.cache");
});
describe("createPage", () => {
    test("Create process", () => __awaiter(void 0, void 0, void 0, function* () {
        const sys = {
            pageId: "abcd1234-1234-5678-abcd-12345678abcd",
            createdTime: "2022-10-08T09:04:00.000Z",
            lastEditedTime: "2022-11-03T11:22:00.000Z",
        };
        const result = yield (0, index_1.createPage)(sys);
        expect(result === null || result === void 0 ? void 0 : result.pageId).toBe("abcd1234-1234-5678-abcd-12345678abcd");
        expect(result === null || result === void 0 ? void 0 : result.createdTime).toBe("2022-10-08T09:04:00.000Z");
        expect(result === null || result === void 0 ? void 0 : result.lastEditedTime).toBe("2022-11-03T11:22:00.000Z");
    }));
    test("Update process", () => __awaiter(void 0, void 0, void 0, function* () {
        const sys = {
            pageId: "abcd1234-1234-5678-abcd-12345678abcd",
            createdTime: "2022-10-08T09:04:00.000Z",
            lastEditedTime: "2022-12-24T11:22:00.000Z",
        };
        const result = yield (0, index_1.updatePage)(sys);
        expect(result === null || result === void 0 ? void 0 : result.pageId).toBe("abcd1234-1234-5678-abcd-12345678abcd");
        expect(result === null || result === void 0 ? void 0 : result.createdTime).toBe("2022-10-08T09:04:00.000Z");
        expect(result === null || result === void 0 ? void 0 : result.lastEditedTime).toBe("2022-12-24T11:22:00.000Z");
    }));
});
describe("deletePage", () => {
    test("delete page failed", () => __awaiter(void 0, void 0, void 0, function* () {
        const id = "xxxxxxxx-1234-5678-abcd-12345678abcd";
        const result = yield (0, index_1.deletePage)(id);
        expect(result).toBe(false);
    }));
    test("delete page succeeded", () => __awaiter(void 0, void 0, void 0, function* () {
        const id = "abcd1234-1234-5678-abcd-12345678abcd";
        const result = yield (0, index_1.deletePage)(id);
        expect(result).toBe(true);
    }));
});
//# sourceMappingURL=index.test.js.map