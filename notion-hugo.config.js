const customTransformerCallback = (n2m) => {
  n2m.setCustomTransformer("code", async (block) => {
    if (block["code"].language == "c++") {
      block["code"].language = "cpp";
      n2m.blockToMarkdown(block);
    }
    return false;
  });
  n2m.setCustomTransformer("column_list", async (block) => {
    const mdBlocks_temp = await n2m.pageToMarkdown(block.id);
    let final_md_string = `<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">`;

    for (const one_block of mdBlocks_temp) {
      const mdString_temp = n2m.toMarkdownString(one_block.children).parent;
      final_md_string = final_md_string + `\n<div>\n${mdString_temp}\n</div>`;
    }

    return final_md_string + "\n</div>";
  });

  n2m.setCustomTransformer("toggle", async (block) => {
    const title = block["toggle"].rich_text[0].text.content;
    const child = await n2m.pageToMarkdown(block.id);
    return `<details>
      <summary>${title}</summary>
      ${child[0].parent}
  </details>`;
  });

  // Example 1: Convert Bookmark block to Hugo format shortcode: {{<blogcard "https://notion.so/">}}
  n2m.setCustomTransformer("bookmark", async (block) => {
    const { bookmark } = block;
    if (!bookmark?.url) return "";
    return `{{<blogcard "${bookmark.url}">}}`;
  });

  // Example 2: Convert YouTube URL to Hugo format shortcode: {{<youtube "abcdefg">}}
  n2m.setCustomTransformer("video", async (block) => {
    const { video } = block;
    if (video.type !== "external") return "";

    const youtoube = new RegExp(/youtube.com/);
    if (youtoube.test(video.external.url)) {
      const url = new URL(video.external.url);
      const video_id = url.searchParams.get("v");
      return `{{<youtube "${video_id}">}}`;
    }
    return `Video URL: ${video.external.url}`;
  });
};

module.exports = {
  directory: "../../notion2hugo_test/content",
  //"content_notion",
  concurrency: 5, // TODO: try grearter than 1

  // saveAwsImageDirectory: null,
  saveAwsImageDirectory: "tmp/downloads",

  s3ImageUrlWarningEnabled: true,

  // s3ImageUrlReplaceEnabled: true,

  // s3ImageConvertToWebpEnalbed: true,

  downloadImageCallback: null,

  customTransformerCallback: customTransformerCallback,

  authorName: "Overridden author",

  //chooses between base class and class in src/main/notion-to-md/notion-to-md.ts
  useOriginalConverter: false,

  // [Optional] setting, If you need.
  customProperties: [
    ["toc", "boolean"],
    ["icon", "text"],
  ],
};
