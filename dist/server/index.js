"use strict";
/* eslint-disable */
/* ================================================================================
  This code is based on Notion SDK example.
  https://github.com/makenotion/notion-sdk-js/blob/main/examples/database-email-update/index.js.
================================================================================ */
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
exports.runServer = void 0;
const databaseClient_1 = require("../main/notionRequest/databaseClient");
const main_1 = require("../main");
const taskPageIdToStatusMap = {};
const findAndSendEmailsForUpdatedTasks = () => __awaiter(void 0, void 0, void 0, function* () {
    // Get the tasks currently in the database.
    console.log("\nFetching tasks from Notion DB...");
    const currentTasks = yield getTasksFromNotionDatabase();
    // Return any tasks that have had their status updated.
    const updatedTasks = findUpdatedTasks(currentTasks);
    if (!updatedTasks.length) {
        console.log("\nNothing has been updated");
        return false;
    }
    console.log(`[Info] Found ${updatedTasks.length} updated tasks.`);
    for (const task of updatedTasks) {
        taskPageIdToStatusMap[task.pageId] = task.status;
        console.log(`[Info] Detect Changes: ${task.pageId} - ${task.title}`);
    }
    return true;
});
const getTasksFromNotionDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    const pages = yield (0, databaseClient_1.getPublishedArticles)();
    console.log(`${pages.length} pages successfully fetched.`);
    return pages.map((page) => {
        const lastEditedTime = page.last_edited_time;
        const status = lastEditedTime ? lastEditedTime : "No Time";
        const title = page.properties["Name"].title
            .map(({ plain_text }) => plain_text)
            .join("");
        return {
            pageId: page.id,
            status,
            title,
        };
    });
});
/**
 * Compares task to most recent version of task stored in taskPageIdToStatusMap.
 * Returns any tasks that have a different status than their last version.
 */
const findUpdatedTasks = (currentTasks) => {
    return currentTasks.filter((currentTask) => {
        const previousStatus = getPreviousTaskStatus(currentTask);
        return currentTask.status !== previousStatus;
    });
};
/**
 * Finds or creates task in local data store and returns its status.
 */
const getPreviousTaskStatus = ({ pageId, status, }) => {
    // If this task hasn't been seen before, add to local pageId to status map.
    if (!taskPageIdToStatusMap[pageId]) {
        taskPageIdToStatusMap[pageId] = status;
    }
    return taskPageIdToStatusMap[pageId];
};
const runServer = (config, argv) => __awaiter(void 0, void 0, void 0, function* () {
    const setInitialTaskPageIdToStatusMap = () => __awaiter(void 0, void 0, void 0, function* () {
        const currentTasks = yield getTasksFromNotionDatabase();
        for (const { pageId, status } of currentTasks) {
            taskPageIdToStatusMap[pageId] = status;
        }
    });
    const fetchInterval = config.fetchInterval
        ? config.fetchInterval * 1000
        : 30000;
    setInitialTaskPageIdToStatusMap().then(() => {
        console.log(`
    [Info] Notion's last updated time only recorded in 1 minute increments.
        Please note that updates in the same number of minutes cannot be detected.
        Youre setting: ${fetchInterval} msec`);
        setInterval(() => __awaiter(void 0, void 0, void 0, function* () {
            const hasUpdated = yield findAndSendEmailsForUpdatedTasks();
            if (hasUpdated) {
                yield (0, main_1.fetchDataFromNotion)(config, argv);
            }
        }), fetchInterval);
    });
});
exports.runServer = runServer;
/* eslint-enable */
//# sourceMappingURL=index.js.map