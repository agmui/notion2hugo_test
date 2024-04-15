"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlize = void 0;
const lodash_kebabcase_1 = __importDefault(require("lodash.kebabcase"));
const urlize = (string) => {
    // returns the same value as the input when it's a perfect
    // string consisting only of alphanumericals and slashes
    if (string.match(/^[a-z\d\-/]+$/)) {
        return string;
    }
    const kebabStrings = string.split("/").map((str) => (0, lodash_kebabcase_1.default)(str));
    const kebab = kebabStrings.join("/");
    const startWithSlash = new RegExp(/^\/[^ ].+/);
    return kebab.match(startWithSlash) ? kebab : `/${kebab}`;
};
exports.urlize = urlize;
//# sourceMappingURL=string.js.map