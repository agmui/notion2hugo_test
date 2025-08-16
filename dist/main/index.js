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
exports.fetchDataFromNotion = void 0;
const createFile_1 = __importDefault(require("./createFile"));
const logger_1 = require("./logger");
const pageClient_1 = require("./notionRequest/pageClient");
const databaseClient_1 = require("./notionRequest/databaseClient");
const buildFrontmatter_1 = require("./notionRequest/buildFrontmatter");
const fs_extra_1 = __importDefault(require("fs-extra"));
const notion_to_md_1 = require("notion-to-md/build/notion-to-md");
const notion_to_md_2 = require("./notion-to-md/notion-to-md");
const client_1 = __importDefault(require("./notionRequest/client"));
const p_limit_1 = __importDefault(require("p-limit"));
const datastore_1 = require("./datastore");
const date_1 = require("./helpers/date");
const notionImage_1 = require("./helpers/notionImage");
const donwload_1 = require("./helpers/donwload");
const validation_1 = require("./helpers/validation");
const markdown_1 = require("./helpers/markdown");
/* eslint-disable @typescript-eslint/no-explicit-any */
const checkFrontMatterContainRequiredValues = (frontMatter) => {
    const errorFunc = (errorReason) => {
        (0, logger_1.log)(frontMatter);
        throw new Error(`frontMatter does not contain the required values: ${errorReason}`);
    };
    if (!frontMatter.date) {
        errorFunc("Missing 'date'");
    }
    if (frontMatter.categories.length === 0) {
        errorFunc("Missing 'categories'");
    }
    if (frontMatter.tags.length === 0) {
        errorFunc("Missing 'tags'");
    }
    return true;
};
/**
 * return true:  Since there is an update, it will be processed
 * return false: Not processed because there is no update
 */
const checkUpdatedTime = (frontMatter, lastCheckedCache) => {
    const currentPageMeta = frontMatter.sys;
    if (!lastCheckedCache) {
        return true;
    }
    return (0, date_1.isDateNewer)(lastCheckedCache.lastEditedTime, currentPageMeta.lastEditedTime);
};
// Judgement if the page is updated based on the cache information and lastEditedTime
// @params page Object returned by Notion API
// @return true: Updated required
const isRequiredPageUpdate = (page) => __awaiter(void 0, void 0, void 0, function* () {
    const pageCache = yield (0, datastore_1.findByPageId)(page["id"]);
    if (!pageCache) {
        return true;
    }
    return page["last_edited_time"] !== pageCache.lastEditedTime;
});
const notionImageBlockUrl = (block) => {
    if (block["type"] === "image" && block["image"]["file"]) {
        return block["image"]["file"]["url"];
    }
    else if (block["type"] === "image" && block["image"]["external"]) {
        return block["image"]["external"]["url"];
    }
    return "";
};
const validateAwsUrlIncluded = (blocks) => __awaiter(void 0, void 0, void 0, function* () {
    const urls = [];
    const extractUrl = (blocks) => __awaiter(void 0, void 0, void 0, function* () {
        for (const block of blocks) {
            if (block["has_children"]) {
                const childBlocks = yield (0, pageClient_1.getBlocks)(block["id"]);
                yield extractUrl(childBlocks);
            }
            if (block["type"] === "image") {
                const url = notionImageBlockUrl(block);
                if ((0, notionImage_1.isAwsImageUrl)(url)) {
                    urls.push(url);
                }
            }
        }
    });
    yield extractUrl(blocks);
    return urls;
});
const executeDownloadImageCallbacks = (callbackTasks, frontMatter) => __awaiter(void 0, void 0, void 0, function* () {
    if (callbackTasks.length > 0) {
        try {
            yield Promise.all(callbackTasks);
            (0, logger_1.log)(`[Info] [pageId: ${frontMatter.sys.pageId}] User defined callback is completed`, logger_1.LogTypes.info);
        }
        catch (error) {
            (0, logger_1.log)("[Error] Error occurred in a user defined callback", logger_1.LogTypes.error);
            // @ts-ignore
            throw new Error(error);
        }
    }
});
const fetchBodyFromNotion = (config, frontMatter, argv) => __awaiter(void 0, void 0, void 0, function* () {
    const blocks = yield (0, pageClient_1.getBlocks)(frontMatter.sys.pageId);
    if (process.env.DEBUG_DUMP_BLOCK_OBJECT) {
        console.info(blocks);
    }
    const awsUrls = yield validateAwsUrlIncluded(blocks);
    if (awsUrls.length > 0) {
        if (argv.server) {
            (0, logger_1.log)(`The AWS url was found, but the process skipping (In server mode).`, logger_1.LogTypes.warn);
        }
        else {
            const callbackTasks = [];
            const concurrency = config.concurrency ? config.concurrency : 5;
            const limit = (0, p_limit_1.default)(concurrency);
            for (const imageUrl of awsUrls) {
                (0, logger_1.log)(`${imageUrl} - [PageTitle: ${frontMatter.title}]`, logger_1.LogTypes.warn);
                const filepath = yield (0, donwload_1.downloadImage)(config, frontMatter, imageUrl);
                // If a callback after image download is set in the configuration file,
                // Add to Queue to execute Callback
                if (typeof config.downloadImageCallback === "function" &&
                    filepath &&
                    fs_extra_1.default.existsSync(filepath)) {
                    callbackTasks.push(
                    // @ts-ignore
                    limit(() => config.downloadImageCallback(filepath)));
                }
            }
            executeDownloadImageCallbacks(callbackTasks, frontMatter);
        }
    }
    let n2m;
    if (config.useOriginalConverter) {
        // Convert to Markdown using npm 'github souvikinator/notion-to-md'
        n2m = new notion_to_md_1.NotionToMarkdown({ notionClient: client_1.default });
    }
    else {
        n2m = new notion_to_md_2.NotionToMarkdownCustom({ notionClient: client_1.default });
    }
    if (typeof config.customTransformerCallback === "function") {
        config.customTransformerCallback(n2m);
    }
    const mdblocks = yield n2m.blocksToMarkdown(blocks);
    const mdObj = n2m.toMarkdownString(mdblocks);
    const mdString = mdObj.parent === undefined ? "" : mdObj.parent;
    const markdownText = yield (0, markdown_1.convertS3ImageUrl)(mdString);
    if (config.s3ImageUrlWarningEnabled && (0, validation_1.includeAwsImageUrl)(markdownText)) {
        (0, logger_1.log)(markdownText, logger_1.LogTypes.debug);
        throw (0, logger_1.error)(`The AWS image url was found in the article. Access time to this URL is limited.
    Be sure to change this URL to a publicly available URL.`);
    }
    return markdownText;
});
const fetchDataFromNotion = (config, argv) => __awaiter(void 0, void 0, void 0, function* () {
    const createMessages = [];
    const skipMessages = [];
    const updatedMessages = [];
    const convertAndWriteMarkdown = (pageMeta) => __awaiter(void 0, void 0, void 0, function* () {
        const pageId = pageMeta["id"];
        const options = {
            author: config.authorName ? config.authorName : "Writer",
            utcOffset: config.utcOffset ? config.utcOffset : "",
        };
        const frontMatter = yield (0, buildFrontmatter_1.getPageFrontmatter)(pageMeta, options, config.customProperties);
        // if (!checkFrontMatterContainRequiredValues(frontMatter)) {
        //   log(frontMatter);
        //   throw new Error(`frontMatter does not contain the required values.`);
        // }
        const lastCheckedCache = yield (0, datastore_1.findByPageId)(pageId);
        (0, logger_1.log)(`[Info] [pageId: ${pageId}] Check cache: ${lastCheckedCache
            ? "Found: " + lastCheckedCache.createdTime
            : "Not found: null"}`);
        // Check the update date and skip if it doesn't need to be processed
        if (!argv.force &&
            lastCheckedCache &&
            !checkUpdatedTime(frontMatter, lastCheckedCache)) {
            skipMessages.push(`Skip mesage: pageId: ${pageId}: title: ${frontMatter.title}`);
            return;
        }
        //TODO: add remove pg feature
        if (lastCheckedCache) {
            yield (0, datastore_1.updatePage)(frontMatter.sys);
            updatedMessages.push(`Updated cache: pageId: ${pageId}: title: ${frontMatter.title}`);
        }
        else {
            yield (0, datastore_1.createPage)(frontMatter.sys);
            createMessages.push(`Create message: pageId: ${pageId}: title: ${frontMatter.title}`);
        }
        const file_path = pageMeta["properties"]["filepath"]["rich_text"][0]["plain_text"];
        let mdString = "";
        // directories will not have its body copied over
        const dir_file_name = "/_index.md";
        if (file_path.substring(file_path.length - dir_file_name.length) !=
            dir_file_name)
            mdString = yield fetchBodyFromNotion(config, frontMatter, argv);
        (0, logger_1.log)(`[Info] [pageId: ${pageId}] Writing...`);
        yield writeContentFile(config, frontMatter, mdString);
    });
    const concurrency = config.concurrency ? config.concurrency : 5;
    const limit = (0, p_limit_1.default)(concurrency);
    let results = yield (0, databaseClient_1.getPublishedArticles)();
    /*
    getSubDir takes in the result array from `getPublishedArticles()`
    and returns the same result array with filepath filled in and removed
    pages and child pages that where `isPublished` is false.
  
    getSubDir makes it so pages in notion stay in their respective
    sub page directories. For parent pages they will turn into
    a directory and and the body of the page will go into the
    _index.md.
  
    Note: this messes with the filepath and will be used later down in buildFrontmatter.ts
  
    Note: if a parent page has the `isPublished` set to false
    then all pages under will be removed.
    */
    const getSubDir = (results) => {
        // generate the id2name table/tree for the later steps
        const id2name = {};
        for (const p of results) {
            const parent = p["parent"][Object.keys(p["parent"])[1]]; // this is hack
            const id = p["id"];
            const name = p["properties"]["Name"]["title"][0]["plain_text"];
            if (parent in id2name) {
                id2name[parent]["directory"] = true;
            }
            else if (p["parent"]["type"] != "database_id") {
                // pre generate the parent entry
                id2name[parent] = {
                    name: null,
                    parent_id: null,
                    directory: true,
                    in_use: false,
                };
            }
            // to determine if the current page is a directory we check if it already has an entry in the table
            // if it does some other page must have pre generated the entry and thus must be a directory
            const directory = id in id2name ? id2name[id]["directory"] : false;
            id2name[id] = {
                name: name,
                parent_id: parent,
                directory: directory,
                in_use: false,
            };
        }
        // set the in_use flag up the tree
        for (const p of results) {
            const id = p["id"];
            if (id2name[id]["directory"] == false &&
                p["properties"]["isPublished"]["checkbox"]) {
                let parent = id2name[id]["parent_id"];
                while (parent in id2name && !id2name[parent]["in_use"]) {
                    id2name[parent]["in_use"] = true;
                    parent = id2name[parent]["parent_id"];
                }
            }
        }
        // generating file path for each page
        const cleaned_results = [];
        for (const pageMeta of results) {
            const pageId = pageMeta["id"];
            const { name, parent_id, directory, in_use } = id2name[pageId];
            const isPublished = pageMeta["properties"]["isPublished"]["checkbox"];
            // skipping pages/directories that are not published or empty
            if (!((in_use && directory) || (isPublished && !directory)))
                continue;
            const filepath_obj = pageMeta["properties"]["filepath"]["rich_text"];
            // if there already is a file path
            if (filepath_obj.length > 0) {
                (0, logger_1.log)(`[Info] creating file at: ${filepath_obj[0]["plain_text"]}`);
                cleaned_results.push(pageMeta);
                continue;
            }
            let filepath_str = "";
            let parent_var = parent_id;
            while (parent_var in id2name) {
                filepath_str = id2name[parent_var]["name"] + "/" + filepath_str;
                parent_var = id2name[parent_var]["parent_id"];
            }
            if (directory == false) {
                filepath_str += name + ".md";
            }
            else {
                filepath_str += name + "/_index.md"; // _index.md is in its own dir name
            }
            (0, logger_1.log)(`[Info] creating file at: ${filepath_str}`);
            filepath_obj[0] = {
                type: "text",
                text: { content: filepath_str, link: null },
                annotations: {
                    bold: false,
                    italic: false,
                    strikethrough: false,
                    underline: false,
                    code: false,
                    color: "default",
                },
                plain_text: filepath_str,
                href: null,
            };
            cleaned_results.push(pageMeta);
        }
        return cleaned_results;
    };
    results = getSubDir(results);
    const tasks = [];
    for (const page of results) {
        if (argv.force || (yield isRequiredPageUpdate(page))) {
            tasks.push(limit(() => convertAndWriteMarkdown(page)));
        }
        else {
            skipMessages.push(`Skip mesage: pageId: ${page["id"]}}: title: ${page["properties"]["Name"]["title"][0]["plain_text"]}}`);
            (0, logger_1.log)(`[Info] [pageId: ${page["id"]}] Not chenged. No need to update ...skip`);
        }
    }
    yield Promise.all(tasks).then(() => {
        (0, logger_1.log)(`----------- results --------------`);
        (0, logger_1.log)(`Create messages: ${createMessages.length}`);
        (0, logger_1.log)(`Update messages: ${updatedMessages.length}`);
        (0, logger_1.log)(`Skip messages  : ${skipMessages.length}`);
        if (argv.verbose) {
            (0, logger_1.log)(`${createMessages}`);
            (0, logger_1.log)(`${updatedMessages}`);
            (0, logger_1.log)(`${skipMessages}`);
        }
    });
});
exports.fetchDataFromNotion = fetchDataFromNotion;
const writeContentFile = (config, frontMatter, content) => __awaiter(void 0, void 0, void 0, function* () {
    return (0, createFile_1.default)(config, frontMatter, content);
});
//# sourceMappingURL=index.js.map