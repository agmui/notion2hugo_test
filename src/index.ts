import { Client, isFullPage, iteratePaginatedAPI } from "@notionhq/client";
import dotenv from "dotenv";
import fs from "fs-extra";
import { savePage } from "./render";
import { loadConfig } from "./config";
import { getAllContentFiles } from "./file";
import { isFullPageOrDatabase } from "@notionhq/client/build/src/helpers";

dotenv.config();

async function main() {
  if (process.env.NOTION_TOKEN === "")
    throw Error("The NOTION_TOKEN environment vairable is not set.");
  const config = await loadConfig();
  console.info("[Info] Config loaded ");

  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  });

  const page_ids: string[] = [];

  console.info("[Info] Start processing mounted databases");
  // process mounted databases
  for (const mount of config.mount.databases) {
    fs.ensureDirSync(`content/${mount.target_folder}`);
    for await (const page of iteratePaginatedAPI(notion.databases.query, {
      database_id: mount.database_id,
    })) {
      if (!isFullPageOrDatabase(page) || page.object !== "page") {
        continue;
      }
      console.info(`[Info] Start processing page ${page.id}`);
      page_ids.push(page.id);
      await savePage(page, notion, mount);
    }
  }

  // process mounted pages
  for (const mount of config.mount.pages) {
    const page = await notion.pages.retrieve({ page_id: mount.page_id });
    if (!isFullPage(page)) continue;
    page_ids.push(page.id);
    await savePage(page, notion, mount);
  }
  console.log('Current directory: ' + process.cwd());
  console.log(fs.readdirSync(process.cwd()));

  // remove posts that exist locally but not in Notion Database
  const contentFiles = getAllContentFiles("content");
  for (const file of contentFiles) {
    if (!page_ids.includes(file.metadata.id)) {
      fs.removeSync(file.filepath);
    }
  }
  let path: any = process.cwd();
  console.log('Current directory: ' + path);
  console.log(fs.readdirSync(process.cwd()));
  let files:any = fs.readdirSync(process.cwd()+"/content")
  console.log(files);
  exec('cat '+path+files[1].// /home/runner/work/notion2hugo_test/notion2hugo_test/content/Debug-9190bf97e6074f088e2b1efa81052618.md',
    function (error: any, stdout: any, stderr: any) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
             console.log('exec error: ' + error);
        }
    });


}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
