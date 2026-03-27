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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466266D4GYI%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQCDwTZ9iTZjbWegjN7tjVOX7SRb9vxyTWePfutHIbzP2wIgc3jOCG%2FZYhyHD8kPl0SyEMJFwUl1xF6QUYWqGQep3vQqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMSYZxs1Xvx%2BuPJSxCrcA1YWO1%2B8K48UXbc9q5Ipj68XGgF3%2F8%2FbREgSVBwdjPNzJprL6fQ7suOcv3et24cBxYQ40gmgbA2pX86D9elcqBBy6YBJp1IEiS7027Z6D76%2B4QrKfMc2E%2F1RDwU5rDTb0hblLZCGvpCcmz1d%2Bl38bjkAk8rNxkzXCIa5PMOqujFXpEKtp%2FfXWZo88A4ke77s9PIyxHDZ4%2BXk3g3Sn7A3mT5SVlk1wAVtLPRy0a5IYdG7WsKmF2OZ1TA2vib7Hq28WrxBi%2F7nYq5OqsxgWeCx7UCqpeTXaemo9UCnvvo119%2FnGoY0P8J6ClJeOTQDg2z0Gh0vygYfYiet%2BTWQFmHmTC0hE%2FU57nTifaNGtQNDh%2BZWvU44x9f8PnxZgG%2FcahUzE1CLNlREJmiS0VAZlICgy1NHzOhdS%2BibPCk7fmzMo1BzNWnb%2Bt9RKNDqjcDXqNMRCd9EN%2B%2BpM0XbKgcVMGNZZbfdQ4xk%2BgCIN15%2B9ZDNsUo5NNyD1xaU1GBuwvVmE9r4jO7HgVb0CillQr1BlYJNKRIFXB0KQGZ3%2Fm3xBDiXiRimSJVh0f47tOHyyJe0vaDBiGCbQYBSzhJICdV8K%2BAGsIrUoQdnpgGGoYRWVW6kzu5TvAM1Mrzrz5GPkfjqMOfqls4GOqUBQ%2Bjh8JVX3x1QEaRAuHPTcJ0jtS7DOP3jXg%2FWv%2B6%2F1ocq4i%2FdyYFvUc0FYL9Mw7RzGc5mHtM6vHE4nB6eCPu5qVdvyj1IgBt4y%2BMSXf%2B1e4K4Fuu2lkody%2Fo9DRUHmauhRRp786IaQCldJSRsIXkVlhOslCk04fdtImjkItIq1laVoheilRBiIRQy3rFdRA3GYO%2Ba0k8mMGgnWZ8w1r8giLuEoLxq&X-Amz-Signature=e32c3133bb187d6eac4e4edb0566a46018615c223ee196f70b4b1cbca8d0ca73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
