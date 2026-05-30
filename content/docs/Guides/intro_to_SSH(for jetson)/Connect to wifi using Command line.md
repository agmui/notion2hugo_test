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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BLQCH3A%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDMPZ8xdQLsfGGbDUREp5SZaQLDDtJs5PFtWMiJb54HdwIgZw2qnW2mO3yeH0d6mn8CEVQX0lefOvZyCRTJqSzMBKgqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFO1V4J6hF3SdGWqyyrcA5vjm3sLVfYkTfDFA0OvB7u3X%2BoW71FLWRCW3NhUQESP%2B2PUk7KIDrkKlYHKnyfpEECGvpFcMVVBz%2B3YB347BB1Zzk0stfYs7CrErfV%2BVCb97aDVlHSg8BuaiqefaeRWa5HxTGq%2FzXJ2cdiqA2RmICwckCh0RE57k9zr26LOLp9QJrkgLSP8ehYDhhCW2pVyEDnT986GPmzwe8K20IsOJqENvr8VLtxzy2Aqj6qARP5ETphApWJA1wlNb2bn9Et5gYXuJU2iOl1QfCKoxbiliqdrCe2r1yqkHvGXlfLRgYDltdoccu1xEsCQqOAbULuxq891PZyWBulfu5lPB%2BGskfAXLQ7oFIGWKoLFpyOqu3vONH9gC7kGbvLI6ASD9Zgls%2FiRXAD5Ugv26ILKD29fqk%2BUHhreyLb5Xi8h7gx2xcs%2FAScb5H2ZynS3jiEjzUsUA9uJJqDL%2BLZV3ohDC77iud64iQ0qH%2BltO5swBfSXt2gmqdJbXYBxlYby%2FuJxAJZXcURNRo4%2BPwqy%2FlyDC1%2BmYiRax7yHBATwEtzIj4m4nFReWJOWvX33%2FW9LP65QkSDzBLXS6y%2Fo1y9u7L8pIsBcV4zvSIGtq0ZLbmhxOvTypruS5P3Muxg6W7gSKb1TMJ6m6dAGOqUBKf43LlH0Zh8NBSPjGj6JzvkGswb%2BtGR79QmhIrrIgT4nB9ITRxkYC3H6k6IW2uFlkOQ4hF4Nw3AtD%2BKKKWrpebRinYsLfCvaJ1QdvNmnAVQqOs%2FwLX%2BUqsgFBo4NDgzjMFbKQDeea463Tc18fFS4cf70dnjOAvpCcWea6Lm17A0r7S%2B4is8Boyg1751tDHJfxwhKK0rxxazsi6Oy6IMgqtNJ1dXD&X-Amz-Signature=def9dd9d4bae70dc133cdcd1381f198963ffedc0f62d424be08ecbcd402b4897&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
