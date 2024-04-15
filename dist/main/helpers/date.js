"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setTimeMidnight = exports.isOnlyDate = exports.trimYmd = exports.isDateNewer = void 0;
const isDateNewer = (originDate, comparedDate) => {
    return new Date(comparedDate) > new Date(originDate);
};
exports.isDateNewer = isDateNewer;
const trimYmd = (date) => {
    const re = new RegExp(/^(\d{4}-\d{2}-\d{2})/);
    const result = date.match(re);
    if (result) {
        return result[1];
    }
    else {
        return "";
    }
};
exports.trimYmd = trimYmd;
const isOnlyDate = (date) => {
    const re = new RegExp(/^(\d{4}-\d{2}-\d{2})$/);
    const result = date.match(re);
    return result ? true : false;
};
exports.isOnlyDate = isOnlyDate;
const setTimeMidnight = (date, utcOffset) => {
    if (!(0, exports.isOnlyDate)(date)) {
        throw new Error(`Invalid format of 'date': value: ${date}`);
    }
    if (utcOffset && !utcOffset.match(/^(\+\d{2}:?\d{2})$/)) {
        throw new Error(`Invalid format of 'utcOffset': value: ${utcOffset}`);
    }
    return utcOffset ? `${date}T00:00:00${utcOffset}` : `${date}T00:00:00Z`;
};
exports.setTimeMidnight = setTimeMidnight;
//# sourceMappingURL=date.js.map