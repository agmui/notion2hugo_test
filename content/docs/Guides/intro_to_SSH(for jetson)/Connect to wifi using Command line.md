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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VIUBEIS%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCzRzFKZ6s546lnJOM%2FzKxqjI6tJIoF%2FarZnkiLZKle%2BwIhANJXL1gXSss4HoyictBX0FA4YVtyXA70Vf7ptVXdRUvOKv8DCCoQABoMNjM3NDIzMTgzODA1Igws7j%2B9YlTK6GNn82Mq3AO0a5SsrABt7ximTS31AtqtYJ0lMtJvShvN06UpHqC39qLZl%2BDtBkUs1hMJpmUdRfTOqZvROQE7lhjooo66CcTvkdzv2yezlh7BsXE2oKHKLxKgQCbWZseCtjGoxeba5idfpcuMJT6yv1tvAAQA1cI%2Fn5I8T%2BRv1iIluJmeRmmq4lZtqXILbKhvTw%2FWGuGRXQZmE7nsR1WYo0INemuAFsqSzUqZ%2FkxzZzfyl1G94KNvsokukFaFRO%2F6Ta%2FshXEXG6LG04n3MGmvnjii3d%2B2xooyzUMuihxw%2BLt6OUAq4X%2BPbW2H3CUY8pRsurzp%2FLHGlOvuVQXgBmItmBEgKwToY9YBagmJidNSVf0nQ%2FnoReKPCuVhZPtg05YSV%2FFSSvwdMdG3%2FH8cll7oDQhR4qP4w5U5GSOaBOUNjKnz2ydtFkzvigR1U5SnlSI9q%2F2U4sznWndGHcPil4yXLyiooSGrKQux9MAaxwStwMCh2twFSchrphjG0yScxgu9RT8%2Fmr58V3QyfeV82c%2BozfpUmNsj%2BN%2FaA4doyPGyKA%2FYPdfdGH0QiftXA97VcVnj49loJNsqdN%2F%2Bbq6fWxrfxFAf4DIIC3dESN9qI%2BcR5TbN1B37WXLAhqcifOKfa%2BALTWMRgTDLgKHLBjqkAQg%2FwnJlmZJGpIu43p1MWd5Vrxhz9WeKODM3I1Fzbxr%2B10VIY1Dm0MyR%2BkU7UOlcjUNjqzCA2JiwpL3mje1nkkUIOun7AIIJRuXD7V%2FBZOc8TqaU6IPupS0VA1LmkJMfgETpgwKo5rOj%2Fl%2F%2BDxYZmcRhwcrrnslGqmGkXNvJjOzNqu0XdpfNkrt28E2XZxw7Qh8DE8f%2FyJcp7DF6DK3l0wGZ3BXR&X-Amz-Signature=e9c445f63e33688ac017ce9d8a50ac1d1b30a873dc516d5e4de9a6469bef4800&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
