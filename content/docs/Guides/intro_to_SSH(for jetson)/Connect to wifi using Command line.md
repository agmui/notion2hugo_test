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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XQMWK2T%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDIzFfK8Ac93mDt9uTvY%2Fn%2BoUCeE9h%2F5N8WDmO1pIN17QIgGAl2QPrTy8%2BCisV2c9yYKwfBuE%2Fgsk1GxpDqevUiozoqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG6oD0iKTHBCkBXjfCrcA9O36YgnOP5gYPl3aypdBcpigPNKBL0MIimSLKQrP8Pxhb3ej5Bjgw92t3yvRgQh%2FRtBsKtDDmzFRvl7opKYu30v%2FUOmFvhasWQaV9jsosd7pmlSR%2B6BjczZXgWDR54azyXT797pD6ZWhD13%2B%2BQz7iz5BISdRIxkAb4%2BE7dyUwcYJN95ghB3WXBJCeis3tDlWgaYClk9rrXKa%2FmFZWjEN2XqE8q38qUF3M%2BuUccdX3ry0SeezBf4WjshjZNsBWGR%2Fawo8e%2FoHKLwl82xgOWEzWKCdnEQaqW9esCm%2BsbM4bYzcGnsK6%2F3ujWH0zQfaXwyUxT%2BYa3AekbVjzZpBNyJsyl1xvUsioHEzYZDtqfDlA8%2BT6qc6Vj0MwdZOxNrUTFPo%2BXGd9rDa1kChAHXwvGWoXNVxwGd%2BW%2FHiiNpW8i%2F9Zx8FoiELztpgzHuCYLztu7atlw7n2T9kbgmSjvFnK0Z5Uv60sW6NxQWJoUZKGU1mjoYnm7HTmRDblfgznGKjZDoDteI6p8Gwcyz91ww4xR%2BetKGiwqVmd7%2BtWb19jICO33veNh1n71dN1SRLCOFGH4Q62Kp15oqjYNEs8yw8paUFZ0ZSqzWH155Ts48V1Eu%2BKog%2B5MSipzawCr5RrvfMJaP1scGOqUBWNAvAMF7Y3DZ9cxx55AvcDtt7KxC6itISo6Hed2MxMqEWvS95GVP3SY%2B9tutgN8bC8dduZQNy6KNYP0TgPoCsRn%2BwhQ1IUQH5TxWQafhO30pxelNsC2cCIzhle0o7lDgGfMExfZA5PdJeJHWX9H8%2FIchk7nlHZa1EF84%2BTCJhCCBlnAjdVOmf97upxe38KeIaJtKx97uuxVfZqDgyZhS2I3VsbrM&X-Amz-Signature=0835477ddfea2b7503c9c8efd742c3b148c4ab4589f4e4d43038627edf400d8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
