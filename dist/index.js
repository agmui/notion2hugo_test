"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const yargs = __importStar(require("yargs"));
const main_1 = require("./main");
const config_1 = require("./main/config");
const logger_1 = require("./main/logger");
const server_1 = require("./server");
yargs
    .options({
    clean: { type: "boolean", default: false },
    force: { type: "boolean", default: false, alias: "F" },
    verbose: { type: "boolean", default: false },
    server: { type: "boolean", default: false, alias: "S" },
})
    .describe({
    clean: "Delete all output directories",
    force: "Ignore the timestamp cache and get the remote data",
    verbose: "Show detail logs",
    server: "Detects page changes in Notion's blog database and retrives data",
})
    .usage("Usage: notion-hugo [flags]");
const argv = yargs.argv;
const initialize = () => __awaiter(void 0, void 0, void 0, function* () {
    const log = (0, logger_1.initLogger)();
    if (!process.env.NOTION_TOKEN) {
        log("You must set the NOTION_TOKEN. terminated.");
        return null;
    }
    if (!process.env.NOTION_BLOG_DATABASE_ID) {
        log("You must set the NOTION_BLOG_DATABASE_ID. terminated.");
        return null;
    }
    (0, config_1.loadConfig)(".").then((config) => __awaiter(void 0, void 0, void 0, function* () {
        if (config === false) {
            throw new Error(`There is an error in your config file, or it doesn't exits.\n`);
        }
        log(`[Info] Exported directory: ${config.directory}`, logger_1.LogTypes.info);
        if (config.s3ImageUrlWarningEnabled === undefined) {
            log(`[Info] Missing 's3ImageUrlWarningEnabled' param: Set default value 'true'`, logger_1.LogTypes.info);
            config.s3ImageUrlWarningEnabled = true;
        }
        if (argv.clean) {
            log("Not implemented yet");
            return null;
        }
        yield (0, main_1.fetchDataFromNotion)(config, argv);
        if (argv.server) {
            return (0, server_1.runServer)(config, argv);
        }
    }));
});
initialize();
//# sourceMappingURL=index.js.map