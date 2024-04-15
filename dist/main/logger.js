"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initLogger = exports.log = exports.error = exports.LogTypes = exports.LogCategories = void 0;
let isQuietMode = false;
let isVerboseMode = false;
const colorRed = "\x1b[31m";
const colorYellow = "\x1b[33m";
const colorGreen = "\x1b[32m";
const colorWhite = "\x1b[37m";
var LogCategories;
(function (LogCategories) {
    LogCategories[LogCategories["default"] = 0] = "default";
    LogCategories[LogCategories["verbose"] = 1] = "verbose";
})(LogCategories = exports.LogCategories || (exports.LogCategories = {}));
var LogTypes;
(function (LogTypes) {
    LogTypes[LogTypes["debug"] = 0] = "debug";
    LogTypes[LogTypes["log"] = 1] = "log";
    LogTypes[LogTypes["info"] = 2] = "info";
    LogTypes[LogTypes["warn"] = 3] = "warn";
    LogTypes[LogTypes["error"] = 4] = "error";
})(LogTypes = exports.LogTypes || (exports.LogTypes = {}));
const error = (message) => {
    return new Error(`${colorRed}${message}${colorWhite}`);
};
exports.error = error;
const log = (message, type = LogTypes.log, category = LogCategories.default) => {
    const emitLog = () => {
        switch (type) {
            case LogTypes.debug:
                if (process.env.NODE_ENV === "DEBUG") {
                    console.info(message);
                }
                break;
            case LogTypes.info:
                console.info(`${colorGreen}${message}${colorWhite}`);
                break;
            case LogTypes.warn:
                console.warn(`${colorYellow}${message}${colorWhite}`);
                break;
            case LogTypes.error:
                console.warn(`${colorRed}${message}${colorWhite}`);
                break;
            default:
                console.log(message);
                break;
        }
    };
    if (isQuietMode) {
        return;
    }
    // this isn't being used right now. But it's here in case I want to add a --verbose flag for the logs
    if (category === LogCategories.verbose && !isVerboseMode) {
        return;
    }
    emitLog();
};
exports.log = log;
/**
 * Initialize the logger state. Should run at the beginning of the app.
 */
const initLogger = (quietMode = false, verboseMode = false) => {
    isQuietMode = quietMode;
    isVerboseMode = verboseMode;
    return exports.log;
};
exports.initLogger = initLogger;
//# sourceMappingURL=logger.js.map