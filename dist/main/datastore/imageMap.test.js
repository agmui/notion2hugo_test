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
const imageMap_1 = require("./imageMap");
beforeAll(() => {
    fs_extra_1.default.unlinkSync("./.notion-hugo-cache/image_map.cache");
});
describe("createOrUpdateImageMap", () => {
    test("Create process", () => __awaiter(void 0, void 0, void 0, function* () {
        const id = "secure.notion-static.com/12345678-1234-5678-abcd-123456789012/Untitled.png";
        const filepath = "/images/12345678-1234-5678-abcd-123456789012/Untitled.png";
        const result = yield (0, imageMap_1.createOrUpdateImageMap)(id, filepath);
        //@ts-ignore
        expect(result.filePath).toBe("/images/12345678-1234-5678-abcd-123456789012/Untitled.png");
    }));
    test("Update process", () => __awaiter(void 0, void 0, void 0, function* () {
        const id = "secure.notion-static.com/12345678-1234-5678-abcd-123456789012/Untitled.png";
        const filepath = "/new_images/abcdefgh-1234-5678-abcd-123456789012/Untitled.png";
        const result = yield (0, imageMap_1.createOrUpdateImageMap)(id, filepath);
        //@ts-ignore
        expect(result.filePath).toBe("/new_images/abcdefgh-1234-5678-abcd-123456789012/Untitled.png");
    }));
});
describe("updateImageMap", () => {
    test("Normal process", () => __awaiter(void 0, void 0, void 0, function* () {
        const id = "secure.notion-static.com/12345678-1234-5678-abcd-123456789012/Untitled.png";
        const filepath = "/abcdefgh-1234-5678-abcd-123456789012/Untitled.png";
        const result = yield (0, imageMap_1.updateImageMap)(id, filepath);
        //@ts-ignore
        expect(result.filePath).toBe("/abcdefgh-1234-5678-abcd-123456789012/Untitled.png");
    }));
});
describe("findByImageId", () => {
    test("Normal process", () => __awaiter(void 0, void 0, void 0, function* () {
        const id = "secure.notion-static.com/12345678-1234-5678-abcd-123456789012/Untitled.png";
        const result = yield (0, imageMap_1.findByImageId)(id);
        //@ts-ignore
        expect(result.filePath).toBe("/abcdefgh-1234-5678-abcd-123456789012/Untitled.png");
    }));
    test("Normal process", () => __awaiter(void 0, void 0, void 0, function* () {
        const id = "null.notion-static.com/12345678-1234-5678-abcd-123456789012/Untitled.png";
        const result = yield (0, imageMap_1.findByImageId)(id);
        //@ts-ignore
        expect(result).toBe(null);
    }));
});
//# sourceMappingURL=imageMap.test.js.map