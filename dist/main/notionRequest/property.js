"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCustomProperty = exports.booleanProperty = exports.textProperty = exports.hasPlainText = exports.extractExternalUrl = exports.pageWeight = exports.pageLinkTitle = exports.pageFilepath = exports.pageDescription = exports.pageUrl = exports.pageSlug = exports.pageSection = exports.pageCategory = exports.pageTags = exports.pageUpdatedAt = exports.pagePublishedAt = exports.pageDraft = exports.pageAuthor = exports.pageTitle = void 0;
const string_1 = require("../helpers/string");
/* eslint-disable @typescript-eslint/no-explicit-any */
const pageTitle = (prop) => {
    return extractPlainText(prop["Name"]);
};
exports.pageTitle = pageTitle;
const pageAuthor = (prop, options) => {
    const defaultAuthor = options.author;
    if (prop["Author"] === undefined) {
        return defaultAuthor;
    }
    const author = extractPlainText(prop["Author"]);
    if (author) {
        return author;
    }
    else {
        return defaultAuthor;
    }
};
exports.pageAuthor = pageAuthor;
const pageDraft = (prop) => {
    if (prop["isDraft"] !== undefined) {
        return (0, exports.booleanProperty)(prop["isDraft"]);
    }
    return false;
};
exports.pageDraft = pageDraft;
const pagePublishedAt = (prop) => {
    return extractDateTime(prop["PublishedAt"]);
};
exports.pagePublishedAt = pagePublishedAt;
const pageUpdatedAt = (prop) => {
    if (prop["UpdatedAt"] === undefined)
        return null;
    return extractDateTime(prop["UpdatedAt"]);
};
exports.pageUpdatedAt = pageUpdatedAt;
const pageTags = (prop) => {
    return extractMultiValues(prop["Tags"]);
};
exports.pageTags = pageTags;
const pageCategory = (prop) => {
    const category = extractPlainText(prop["Category"]);
    if (category === "") {
        return [];
    }
    return [category];
};
exports.pageCategory = pageCategory;
const pageSection = (prop) => {
    if (prop["Section"] === undefined)
        return null;
    return extractPlainText(prop["Section"]);
};
exports.pageSection = pageSection;
const pageSlug = (prop) => {
    const slug = extractPlainText(prop["Slug"]);
    return (0, string_1.urlize)(slug);
};
exports.pageSlug = pageSlug;
const pageUrl = (prop) => {
    const url = extractPlainText(prop["Url"]);
    return (0, string_1.urlize)(url);
};
exports.pageUrl = pageUrl;
const pageDescription = (prop) => {
    return extractPlainText(prop["Description"]);
};
exports.pageDescription = pageDescription;
const pageFilepath = (prop) => {
    if (prop["filepath"] === undefined) {
        return null;
    }
    return extractPlainText(prop["filepath"]);
};
exports.pageFilepath = pageFilepath;
const pageLinkTitle = (prop) => {
    if (prop["linkTitle"] === undefined) {
        return null;
    }
    return extractPlainText(prop["linkTitle"]);
};
exports.pageLinkTitle = pageLinkTitle;
const pageWeight = (prop) => {
    if (prop["weight"] === undefined) {
        return null;
    }
    return extractNumber(prop["weight"]);
};
exports.pageWeight = pageWeight;
const extractPlainText = (prop) => {
    if (prop["title"] && prop["title"].length > 1) {
        return mergeMultipleTitle(prop["title"]);
    }
    else if (prop["title"]) {
        return prop["title"][0]["plain_text"];
    }
    else if (prop["rich_text"] && prop["rich_text"].length === 1) {
        return prop["rich_text"][0]["plain_text"];
    }
    else if (prop["select"]) {
        return prop["select"]["name"];
    }
    return "";
};
const mergeMultipleTitle = (title_objects) => {
    const mergedTitle = title_objects.map((title) => title["plain_text"]);
    return mergedTitle.join("");
};
const extractNumber = (prop) => {
    if (prop["number"]) {
        return prop["number"];
    }
    return "";
};
const extractMultiValues = (prop) => {
    let values = [];
    if (prop["multi_select"]) {
        const tags = prop["multi_select"];
        values = tags.map((tag) => tag["name"]);
        return values;
    }
    return [""];
};
const extractDateTime = (prop) => {
    if (prop["date"]) {
        return prop["date"]["start"];
    }
    return "";
};
const extractExternalUrl = (prop) => {
    if (!prop["Image"]) {
        return "";
    }
    if (prop["Image"]["files"].length === 0) {
        return "";
    }
    const file = prop["Image"]["files"][0];
    if (file["type"] === "external") {
        return file["external"]["url"];
    }
    return "";
};
exports.extractExternalUrl = extractExternalUrl;
const hasPlainText = (prop) => {
    if (prop["rich_text"].length > 0) {
        return true;
    }
    return false;
};
exports.hasPlainText = hasPlainText;
const textProperty = (prop) => {
    return extractPlainText(prop);
};
exports.textProperty = textProperty;
const booleanProperty = (prop) => {
    if (prop["type"] === "checkbox") {
        return prop["checkbox"];
    }
    return false;
};
exports.booleanProperty = booleanProperty;
const getCustomProperty = (prop, propertyKey, propertyType) => {
    try {
        if (propertyType === "boolean") {
            return (0, exports.booleanProperty)(prop[propertyKey]);
        }
        else if (propertyType === "text") {
            return (0, exports.textProperty)(prop[propertyKey]);
        }
    }
    catch (error) {
        throw new Error(`[Fatal] Failed to get property: Probably the property name '${propertyKey}' does not exists: error message: ${error}`);
    }
    return undefined;
};
exports.getCustomProperty = getCustomProperty;
/* eslint-enable @typescript-eslint/no-explicit-any */
//# sourceMappingURL=property.js.map