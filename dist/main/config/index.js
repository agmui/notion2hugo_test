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
exports.loadConfig = void 0;
const path_1 = __importDefault(require("path"));
const fs_extra_1 = require("fs-extra");
const logger_1 = require("../logger");
/**
 * Determine if a file is yaml or js depending on the file extension
 */
const determineFileType = (fileName) => {
    const splitStr = fileName.split(".");
    const fileExtension = splitStr[splitStr.length - 1];
    switch (fileExtension) {
        case "js":
            return "javascript";
        case "yaml":
        case "yml":
            return "yaml";
        default:
            return null;
    }
};
const loadJavascriptConfigFile = (filePath) => {
    // eslint-disable-next-line global-require
    (0, logger_1.log)(`[Info] Appempts to load configuration file: ${filePath}`, logger_1.LogTypes.info);
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const configObject = require(filePath);
    if (configObject && typeof configObject === "object") {
        return configObject;
    }
    return false;
};
/**
 * Attempt to load a config file
 */
const loadFile = (rootDir = ".", fileName = "") => __awaiter(void 0, void 0, void 0, function* () {
    const filePath = path_1.default.resolve(rootDir, fileName);
    if (yield (0, fs_extra_1.pathExists)(filePath)) {
        const fileType = determineFileType(fileName);
        if (fileType === "javascript") {
            return loadJavascriptConfigFile(filePath);
        }
    }
    return false;
});
const loadConfig = (
/**
 * Directory of the config file. (Default ".")
 */
rootDir = ".") => __awaiter(void 0, void 0, void 0, function* () {
    rootDir = path_1.default.resolve(rootDir);
    const defaultConfigs = ["notion-hugo.config.js"];
    const tasks = [];
    const configList = [];
    for (const config of defaultConfigs) {
        const file = loadFile(rootDir, config).then((result) => {
            if (result) {
                configList.push(result);
            }
        });
        tasks.push(file);
    }
    return Promise.all(tasks).then(() => {
        // eslint-disable-next-line no-unreachable-loop
        for (const config of configList) {
            return config;
        }
        return false;
    });
});
exports.loadConfig = loadConfig;
//# sourceMappingURL=index.js.map