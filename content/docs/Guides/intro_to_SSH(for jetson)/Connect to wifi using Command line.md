---
sys:
  pageId: "253da3bc-6297-80c8-93a9-f467dcefd643"
  createdTime: "2025-08-18T10:18:00.000Z"
  lastEditedTime: "2025-08-19T10:27:00.000Z"
  propFilepath: "docs/Guides/intro_to_SSH(for jetson)/Connect to wifi using Command line.md"
title: "Connect to wifi using Command line"
date: "2025-08-19T10:27:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 194
toc: false
icon: ""
---

# connecting to wifi with CLI

To list all wifi connections available run:

```bash
nmcli device wifi list
```

To connect to a wifi run:

```bash
sudo nmcli device wifi connect <wifi name> password <wifi password>
```

### example:

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DCEYUM2%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAncWNwUvrPfOtxDj8Q3hJjEqjS3bTmnfSKy%2BUcRRXevAiB%2F2%2FEFR2EzPUi0qove262l3iQJBeaBB0%2FmtgjG5Vd1JiqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMR5lOi7H4%2BBYzH1cVKtwDKa3dx1ZyD6ArxCUYjlDYwK5mXN9qHTjW6CXkdxVL6Iw38GJugnIXkNtSO%2FNS6AdDS5AHBLucRf4DQrw9aBpc9wrC4zV6Fr5Czr6mAksfdL76UqqRmCHuO8UbZXYp5xZ7zKJ3%2Fh1cpFDIBSjDKUqkUrRMUn4AIHxjxWbDv9UGhGr3q9v9ph6hkBMZodLIkqW%2FZCvIXY%2ByismGpN8F5bvmN6K%2B501UzeTB6ENvtmeg%2F6yLB7sJn0D4NRm9NKvCB2F82lt32HYipU00glibIlGOGNNxbOFRzTz3Gic9M07%2FuRrLuwtuNjJCkGL4zIJIMsBmnilBSAYqyQlcHOrWaoJK2LiVo0AyK1BDJ0XjqLucYG%2FPQZ0zhtRzk4qX%2FJ33LMfRdBGhCF6dGUAXEBz2LGFAka7LJBGVk0TC1k4fq5MR%2BAPwrilAwXHckWek0IYQDr1Vjq6fo5UoF0s1ihDk1R5aIR%2FtIYCEykGvUyomfX3iQWmNgtxDV9AgYZQmfsqdnQL742ZBF3VLBkVN%2B27%2FD%2BVw8fBhuMf5H0LSFb0XNbf8e2maDbJ3hjQ%2Bg8YEtF8qpTS5%2FdwKhd%2F%2BUxzuyUQiOOIq%2BfbcoTEYwXQKQUoCKm%2Fb2tWdQDcaIGBKC09TBIcw357OxQY6pgGMHOBfr5PtzPi1lqEJIMuYHOuqtVfswBgCmoOHcf7%2BqeT9sB5sQtUeq3zHXbqVbO8kEHcA3NVHhW9xmBHYPwMcMOROMo75aFpPNmndfRaZ6idzEWxWkDeW0lie4IQKZcLs6KHs7DjfIusdIdX0WTjUTND%2FL5srbrsStvzdldRAiHF4p3MouZhZjPq%2BQ0RmJYSFODtSEWucOOpyiHax2%2BYN8YVwNbpo&X-Amz-Signature=c611f7ed0be47331f023a08bec9cd6b42b6848fa3a92b1a48295a621bef6ebcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
