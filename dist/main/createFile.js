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
exports.determineFilePath = exports.parseDirectoryPath = exports.createContentDirectory = void 0;
const fs_extra_1 = require("fs-extra");
const path_1 = __importDefault(require("path"));
const date_1 = require("./helpers/date");
const logger_1 = require("./logger");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const YAML = require("json-to-pretty-yaml");
const createContentDirectory = (filepath) => __awaiter(void 0, void 0, void 0, function* () {
    const directory = path_1.default.dirname(filepath);
    yield (0, fs_extra_1.ensureDir)(`./${directory}`);
});
exports.createContentDirectory = createContentDirectory;
const parseDirectoryPath = (config, meta) => {
    const section = meta.section ? meta.section : "posts";
    return `./${config.directory}/${section}`;
};
exports.parseDirectoryPath = parseDirectoryPath;
const determineFilePath = (config, meta) => {
    if (meta.sys.propFilepath) {
        return path_1.default.normalize(`./${config.directory}/${meta.sys.propFilepath}`);
    }
    else {
        const fileExtension = "md";
        const directory = (0, exports.parseDirectoryPath)(config, meta);
        const datePrefix = (0, date_1.trimYmd)(meta.date);
        const fileName = `${datePrefix}-${meta.sys.pageId}`;
        return path_1.default.normalize(`./${directory}/${fileName}.${fileExtension}`);
    }
};
exports.determineFilePath = determineFilePath;
const setFileContent = (frontMatter, mainContent) => {
    let fileContent = "";
    fileContent += `---\n`;
    fileContent += YAML.stringify(frontMatter);
    fileContent += `---\n`;
    if (mainContent) {
        fileContent += mainContent;
    }
    return fileContent;
};
/**
 *
 * @param {String} entryId - The id of the Contentful entry
 * @param {Object} frontMatter - Object containing all the data for frontmatter
 * @param {String} mainContent - String data for the main content that will appear below the frontmatter
 */
const createFile = (config, frontMatter, mainContent) => __awaiter(void 0, void 0, void 0, function* () {
    const fileContent = setFileContent(frontMatter, mainContent);
    // create file
    const filePath = (0, exports.determineFilePath)(config, frontMatter);
    yield (0, exports.createContentDirectory)(filePath);
    (0, logger_1.log)(`[pageId: ${frontMatter.sys.pageId}] Write file: path: ${filePath}`);
    yield (0, fs_extra_1.writeFile)(filePath, fileContent).catch((error) => {
        if (error) {
            (0, logger_1.log)(error);
        }
    });
});
exports.default = createFile;
//# sourceMappingURL=createFile.js.map