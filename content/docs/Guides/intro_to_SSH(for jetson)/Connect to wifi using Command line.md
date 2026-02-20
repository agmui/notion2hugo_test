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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q63NRVK%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHCXES9kv0UZceC7ajMWP%2FFlOQny8pqOLZoLJx01nlKfAiEAwOt2%2BhH7qNxoqk7nDoVpFL%2FLne9f%2FmiJ3A7113ChokgqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCFn%2FD6sfO7VYJPd5CrcAzFnEqJynRquPbZma%2B1GbZH6TYs1mvLAf7eEznMmvy1kJMNDuKwVPfsSvY108PL6KSA4tIAJwnp162CjOsz5MzbiEdEF4aqIVym%2FL7cI2DoO8z5Uq52XPXtpboPxNoyQDoKvOR0NAJTCZg1cfQ61%2Fapx%2BQouKy6B7p0TjniuOhny4EgtvHXV2lGonUDpBiyoyZmIm%2BMmIEnd0DRZU5QDYzZL9r4YFmVJozLlBXZ3gOsgBE0ZfVA9N6NjMvwBDYkpSShCy%2BGrljTusswfNRY0m4P79HqaKCWHCL6rG6pCHZ22Jw8eRcFFQKRvRAJ%2FEX6wqsBsAg1IjQ3Akr1J9Afj7Vwp%2FXbXOv8WvT3VVSTAAi4s0%2FCl9SpPaIGsTSVdTkDqdagCJtxykf2ZwnJSgRZH9xG6rWKzsJHxF2r4hFEfyiRCincL3reetIWmsMa8IpcQkX31pfd%2FdxZX8mUWcte3NXiWif%2BdsNVP1ilWjyY5T3H8W7Lwn0EkUKLl3Tb3msfSKV7Mbz3m9Rc4bYEUAery1MYbuXD8LvV7tDgf51igZvkOI7Z6eR2VnzmPpCdevf%2FKGdhHP7svjKjICUy1vixVG5%2FkH2eGlTCCNJyFEmT2ezUurkcuJfWCKPjll83HMMLn3swGOqUBIvwq4se3pjqYOKuIZcH8zcVEX1%2FuA9LfiI3A57ao1jzoRCkHS6S6mFPDSA28IX%2FwaV603gqVU3%2BgyKiCvTqQFA0f7e9H8TfjPihQABzFD5zoEqqnHP%2F5N2XN109VkPG6tzr9qgjbxO1GCFwiPXDCWLcZelP2QbhOeTp97KxBuA8y0UdYphBfdpF6LtsibEm6tDHH28y2CdERv21KZQh9v9hA1aKc&X-Amz-Signature=5e0fa1b8692dc298b1fc696c122253e900a15ef81a3c0398cc93314510876b2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
