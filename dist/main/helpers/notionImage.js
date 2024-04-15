"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getImageFullName = exports.getImageUID = exports.getImageFilename = exports.isAwsImageUrlString = exports.isAwsImageUrl = void 0;
const logger_1 = require("../logger");
const isAwsImageUrl = (url) => {
    const parser = new URL(url);
    const regHost = new RegExp(/amazonaws\.com/, "i");
    const regPath = new RegExp(/notion-static\.com/, "i");
    if (parser.host.match(regHost) && parser.pathname.match(regPath)) {
        return true;
    }
    return false;
};
exports.isAwsImageUrl = isAwsImageUrl;
const isAwsImageUrlString = (string) => {
    const regHost = new RegExp(/amazonaws\.com/, "i");
    const regPath = new RegExp(/notion-static\.com/, "i");
    if (string.match(regHost) && string.match(regPath)) {
        return true;
    }
    return false;
};
exports.isAwsImageUrlString = isAwsImageUrlString;
const getImageFilename = (url) => {
    const parser = new URL(url);
    const re = new RegExp(/([^/]+\.(?:jpe?g|gif|png|webp|avif))/, "i");
    const result = parser.pathname.match(re);
    if (!result) {
        throw (0, logger_1.error)(`Failed to extract the filename.
    This function should always get some filename. Make sure that is appropriat URL`);
    }
    return result[0];
};
exports.getImageFilename = getImageFilename;
const getImageUID = (url) => {
    const u = new URL(url);
    const pathname = u.pathname;
    const m = pathname.split("/");
    return m[2];
};
exports.getImageUID = getImageUID;
const getImageFullName = (url) => {
    const u = new URL(url);
    const pathname = u.pathname;
    const m = pathname.match(/\/(.+)/);
    if (!m) {
        return "";
    }
    const fullname = m[1];
    const imagePattern = new RegExp(/^.+notion-static.+\.(?:jpe?g|gif|png|webp|avif)/, "i");
    if (fullname.match(imagePattern)) {
        return fullname;
    }
    else {
        return "";
    }
};
exports.getImageFullName = getImageFullName;
//# sourceMappingURL=notionImage.js.map