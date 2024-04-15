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
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertS3ImageUrl = void 0;
const imageMap_1 = require("../datastore/imageMap");
const asset_1 = require("./asset");
const notionImage_1 = require("./notionImage");
// If the input value is an S3 URL, find and replace the real file from the key.
// If the image tag does not match or there is no image cache, do nothing and return the input value.
const replaceS3ImageUrl = (text) => __awaiter(void 0, void 0, void 0, function* () {
    const markdownOriginalLine = text;
    // expected for: ![](https://s3...)
    //             : ![any title](https://s3...)
    const markdownImageTagUrlPattern = new RegExp(/!\[.*\]\((https:\/\/s3[^)].+?)\)/);
    const m = text.match(markdownImageTagUrlPattern);
    if (m && m[1]) {
        const s3Url = m[1];
        const imageId = (0, notionImage_1.getImageFullName)(s3Url);
        const fileCache = yield (0, imageMap_1.findByImageId)(imageId);
        if (!fileCache)
            return markdownOriginalLine;
        const publicFilepath = (0, asset_1.publicPath)(fileCache);
        const urlPatternS3Image = new RegExp(/https:\/\/s3[^)]+/);
        const markdownNewLine = markdownOriginalLine.replace(urlPatternS3Image, publicFilepath);
        return markdownNewLine;
    }
    return markdownOriginalLine;
});
const convertS3ImageUrl = (markdown) => __awaiter(void 0, void 0, void 0, function* () {
    const new_md_array = [];
    const lines = markdown.split("\n");
    for (const line of lines) {
        if ((0, notionImage_1.isAwsImageUrlString)(line)) {
            new_md_array.push(yield replaceS3ImageUrl(line));
        }
        else {
            new_md_array.push(line);
        }
    }
    return new_md_array.join("\n");
});
exports.convertS3ImageUrl = convertS3ImageUrl;
//# sourceMappingURL=markdown.js.map