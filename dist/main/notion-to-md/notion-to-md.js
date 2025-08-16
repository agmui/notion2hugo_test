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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotionToMarkdownCustom = void 0;
const notion_to_md_1 = require("notion-to-md");
const md = __importStar(require("notion-to-md/build/utils/md"));
// inherit a class
//
// A change implemented in version v2.5.1 of the library adds multiple line breaks to paragraphs.
// Since this change would greatly destroy the past text, we are taking workaround.
// It's just a cosmetic change and doesn't affect the underlying logic of Markdown.
//
// Comparing v2.5.0...v2.5.1 · souvikinator/notion-to-md
// https://github.com/souvikinator/notion-to-md/compare/v2.5.0...v2.5.1#diff-d99820b45e7d0bbc18b9ff1022d72f2af5698d32253f99e00db65b2bc0fad2beR48-R49
//
// Latest original source: https://github.com/souvikinator/notion-to-md/blob/master/src/notion-to-md.ts
class NotionToMarkdownCustom extends notion_to_md_1.NotionToMarkdown {
    /**
     * Converts Markdown Blocks to string
     * @param {MdBlock[]} mdBlocks - Array of markdown blocks
     * @param {number} nestingLevel - Defines max depth of nesting
     * @returns {string} - Returns markdown string
     */
    toMarkdownString(mdBlocks = [], pageIdentifier = "parent", nestingLevel = 0) {
        let mdString = "";
        // Insert a blank line when List starts
        let listStyleContinuationStatus = false;
        mdBlocks.forEach((mdBlocks) => {
            // process parent blocks
            if (mdBlocks.parent) {
                if (mdBlocks.type !== "to_do" &&
                    mdBlocks.type !== "bulleted_list_item" &&
                    mdBlocks.type !== "numbered_list_item") {
                    listStyleContinuationStatus = false;
                    // add extra line breaks non list blocks
                    mdString += `\n${md.addTabSpace(mdBlocks.parent, nestingLevel)}\n`;
                }
                else {
                    const preLineBreak = listStyleContinuationStatus === false && nestingLevel === 0
                        ? "\n"
                        : "";
                    mdString += `${preLineBreak}${md.addTabSpace(mdBlocks.parent, nestingLevel)}\n`;
                    listStyleContinuationStatus = true;
                }
            }
            // process child blocks
            if (mdBlocks.children && mdBlocks.children.length > 0) {
                mdString += this.toMarkdownString(mdBlocks.children, pageIdentifier, nestingLevel + 1).parent;
            }
        });
        return { parent: mdString };
    }
}
exports.NotionToMarkdownCustom = NotionToMarkdownCustom;
//# sourceMappingURL=notion-to-md.js.map