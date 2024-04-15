"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@notionhq/client");
const loglevel = client_1.LogLevel.ERROR;
const notion = new client_1.Client({
    auth: process.env.NOTION_TOKEN,
    logLevel: loglevel,
});
exports.default = notion;
//# sourceMappingURL=client.js.map