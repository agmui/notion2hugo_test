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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665COVDGO6%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIGxpHaNHfi2zBOWbQRTUSw5rISHw%2FQ7howcEMh%2BV0G%2FKAiA7UAZFQzDAhIy1drFMkian4CqncjKkNOMlpCocSCW5fiqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdrCRfcJW%2Bqjw3k%2BuKtwDLZHTkmt8rNfGCVwLofPjWTjeOGSe9APyFvnr1ptNqhHTR9%2FGBkP1tPjN7lIixRe1bdexpHjal8ay59BwIktPoFwKc3b7BEbIS57XJAk7dBVSNqsfpNJpl8fzI66aIyzYz6UfX7gYPBzUsnvylOGaMOh%2F6vGNQpUlcxHwxSTOplnvff9BLhcxDIlILZ1UE6UEW32DLJzRC%2FhObvz98HM0RrvINTlwoCrKzv%2BXMOUZttB%2BArG4Evogs5Ex5HQBcAqfXuIcWk3eE8ZAk59IGI7QaIi9SnQ41bMu7vn9V6PNlTT6tIq4bC%2FA5yoAnN6zML9zmCSIlYQSo2Qz1Mzupx%2BsVx6gOG1cZHgBNIBs1aHs9JU8OT2PjZOgI0SsSMVKVGG7yGemTrij0calkFANTZyth1POkXSD8HO2067KIZhaSsDzxBBBYOSHBii%2BrgqVloIvdDznsrCZvbHnWOIQaCcRzoluZFyBhHR4OhA%2BF5OxVRE3hp9u%2Fcaahm5IHUpkXl2tKMmi4g9ZKfpurCLfHcNUp8MBKe9xdN0jqLBmmsR8JKNBsQd8SEckCBdgDA6hXHRKDH%2B4p1lm34SO1C7I5WQbQ1dSmCDWHEDfkXDoYglZzqDOHoizHeDsINo7gwMw%2BLjEyAY6pgEAE4xoLaLsWhjLZeMK0RG%2BG4p%2FDSEuaSrBqENkmUgeeMqr3F3LteEamgco4Gxz1VSRxuiMOb69GC%2BkHzjg3w5G0zXvhErQSwrrrTZFN0QYnVJtkxgQZkj0xmenWALr2P4c4XQx5caCrCrhyZzXjXGUTV%2FtOILMYeNk7mLq0ffKickJCLzSgBozO3dXwzGgxQ%2Fa6%2FhkeGPanrOahe9eeI%2FTnCZ%2BQ9Jm&X-Amz-Signature=88fed214d0faaa3644c61a4aa0f70d6e224ceb69625a784890cf81923bad66f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
