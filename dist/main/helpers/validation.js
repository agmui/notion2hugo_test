"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.includeAwsImageUrl = void 0;
const includeAwsImageUrl = (markdownText) => {
    const s3pattern = new RegExp(/https:\/\/s3.+amazonaws\.com.+X-Amz-Credential.+/, "gm");
    if (markdownText.match(s3pattern)) {
        return true;
    }
    return false;
};
exports.includeAwsImageUrl = includeAwsImageUrl;
//# sourceMappingURL=validation.js.map