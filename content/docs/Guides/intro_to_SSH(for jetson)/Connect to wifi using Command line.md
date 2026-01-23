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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643N45NLD%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCICkcPYya80agWcow97Hip1wit6liH%2B5a6P3oCyYPp%2F84AiBu8%2BOFcpYuDQaTCLAsVPc3nRsFDSGQh%2FUz71t0NnnSnSqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ3GTtp4fDW72HSYmKtwDObymXSX73%2FHur2ingm0AOjysYp648g6XVeEcQLN0OuYmZLhlkDBwOpTRFX6%2Bq3qUoebZmUVqPexpTa2LLhfFgD1WbIyqhzagOAuKOQozdcYz%2Bc3JKoA8qqB5zDO7cii0nqL2aco%2BN3ea4W9HJe5ojbIy8qBFKkgQtwHvNfb1X7BjM0YZwT6Z2vnmkeVQNB6sUuwf0p%2FXZax0pjMYNMbOuA8Vd8FjaU4sdw2nuSHCQhxo1ON7JkmcO86ZGG%2B9OTTgczqtQCJFYT1eoH%2FXx5co131Ybxf5sGUTiD9Rx%2B9wa4GqWwWF5gMeLh5L73qzNx%2FMde4ubiQOov9FEPURk%2BkcDnV3HBhbmsCHWC6WxrZEdrNanswb3hIDzYJbdeBy%2Fk%2BXCe3TxV3Ryuy3jaIDsGOihBQwRvafmyLb8wEgOoDSIghJjRIcMx8hDIbVUwXwpgPYaiK%2BvW6lbFLTvxNzpSGpm8tifbjYaz2K8ciUWW26sZrWdmKMIuGwtsbO8h5Z8rZwUmaqRIrRgXBL8JGWN95BXDHlFmk7LHWA2rUN%2FtQYGvEek0l%2F5%2BV9l2wXDF9isLnUKSzkrSVVR9p6xq%2F4ezrKoWR5PCOVL%2Br0M5g%2BEQPZDDIrDltMFJ7SuR7ot0EwsIvLywY6pgHRIgpFr%2FKSu4mNesJIMfY0xp963ciV1T76txZqEpVmgjXPe3AVQgUgFaQAaUOt00vAw8HgEJ9ROcLOB7J0qpjtxNPht0C73dXabe0YRyvNpMGmZhRrjwH46P3MoVgollL8gdRhs7ds7Ma9QV0D0RFey1XkzLsaNEkEXexvodnzukUk4CFu8F7pfIdWifHbbRDddKLVtN2eFAUldW8diZ6UpP9UM1IC&X-Amz-Signature=141b295d9159fbf34154fe0777159b0b80e6ad4baca5d181dcd1d30a30cd9ada&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
