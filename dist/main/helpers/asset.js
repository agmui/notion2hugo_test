"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicPath = void 0;
// Hogo puts static content into 'static/' directory, but does not include
// the 'static' hierarchy after it is published in the URL. So remove the '/satic' string.
const publicPath = (imageMeta) => {
    const filePath = imageMeta.filePath;
    if (filePath.match(/^static\/.+/)) {
        return filePath.replace(/^static/, "");
    }
    return filePath;
};
exports.publicPath = publicPath;
//# sourceMappingURL=asset.js.map