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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPageFrontmatter = void 0;
const date_1 = require("../helpers/date");
const logger_1 = require("../logger");
const property_1 = require("./property");
// Store all metadata in frontMatter
// Values that are not directly needed to create Hugo pages are stored in the
// under 'sys' key (e.g. pageId, Page modification date, etc...)
// Note that: Notion's Page modification date (as 'last_edited_time') is different
//            from the last update date of Hugo's page ('lastmod')
const getPageFrontmatter = (pageMeta, // pageId: string,
options, customProperties) => __awaiter(void 0, void 0, void 0, function* () {
    const pageId = pageMeta["id"];
    (0, logger_1.log)(`[Info] [pageId: ${pageId}] Fetch from Notion API`);
    // const pageMeta = await getArticle(pageId);
    //@ts-ignore
    if (pageMeta["archive"]) {
        (0, logger_1.log)(pageMeta);
        throw new Error(`The page property is "archive", but the status is "isPublished".
      Make sure the publishing settings for this article are correct.`);
    }
    //@ts-ignore
    const properties = pageMeta["properties"];
    (0, logger_1.log)(properties, logger_1.LogTypes.debug);
    const date = pageMeta["last_edited_time"]; //pagePublishedAt(properties);
    const dateWithZone = (0, date_1.isOnlyDate)(date)
        ? (0, date_1.setTimeMidnight)(date, options.utcOffset)
        : date;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const frontMatter = {
        sys: {
            pageId: pageId,
            //@ts-ignore
            createdTime: pageMeta["created_time"],
            //@ts-ignore
            lastEditedTime: pageMeta["last_edited_time"],
        },
        title: (0, property_1.pageTitle)(properties),
        date: dateWithZone,
        description: (0, property_1.pageDescription)(properties),
        tags: (0, property_1.pageTags)(properties),
        categories: (0, property_1.pageCategory)(properties),
        author: (0, property_1.pageAuthor)(properties, options),
        draft: (0, property_1.pageDraft)(properties),
    };
    /*
    if (hasPlainText(properties["Url"])) {
      frontMatter["url"] = pageUrl(properties);
    } else if (hasPlainText(properties["Slug"])) {
      frontMatter["slug"] = pageSlug(properties);
    } else {
      throw new Error(
        `One of the "Url" and "Slug" page properties must be defined.`
      );
    }
    */
    // Property for forcing the exported `.md` file name.
    if ((0, property_1.pageFilepath)(properties)) {
        frontMatter["sys"]["propFilepath"] = (0, property_1.pageFilepath)(properties);
    }
    if ((0, property_1.pageSection)(properties)) {
        frontMatter["section"] = (0, property_1.pageSection)(properties);
    }
    if ((0, property_1.pageUpdatedAt)(properties)) {
        const lastmod = (0, property_1.pageUpdatedAt)(properties);
        frontMatter["lastmod"] = (0, date_1.isOnlyDate)(lastmod)
            ? (0, date_1.setTimeMidnight)(lastmod, options.utcOffset)
            : lastmod;
    }
    if ((0, property_1.extractExternalUrl)(properties)) {
        frontMatter["featured_image"] = (0, property_1.extractExternalUrl)(properties);
        frontMatter["images"] = [(0, property_1.extractExternalUrl)(properties)];
    }
    // Properties expected to be used by Docsy theme, etc
    //   linkTitle:
    //   weight:
    if ((0, property_1.pageLinkTitle)(properties)) {
        frontMatter["linkTitle"] = (0, property_1.pageLinkTitle)(properties);
    }
    if ((0, property_1.pageWeight)(properties)) {
        frontMatter["weight"] = (0, property_1.pageWeight)(properties);
    }
    if (customProperties) {
        for (const customProperty of customProperties) {
            const cProp = customProperty[0];
            const cType = customProperty[1];
            frontMatter[cProp] = (0, property_1.customPropery)(properties, cProp, cType);
        }
    }
    return frontMatter;
});
exports.getPageFrontmatter = getPageFrontmatter;
//# sourceMappingURL=buildFrontmatter.js.map