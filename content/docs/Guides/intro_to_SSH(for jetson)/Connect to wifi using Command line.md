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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOFSU6L6%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH3eUFdwpY7%2FK16JJkzKf0QBUbuHnq1WD91nLYN9VpMrAiEA%2FKS2gpJk7WknBwztVw8C29Imfh2eev0PRe3vCYeKqCYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDDwRmKZMZsJ0B8ZdYircA4Ljd6vP3sU%2Biz6cNc%2FurvHEMoJEinJQPotCFHyjkGmzNPPEaqVDDEScvGHNw3XJCBEHEnMeQj38Y3nlzzFmkHcAEi7DH9xJR1v0ll1ASGIIrYM1U8pUBJaYa7l%2B0aOnJzoqdvFXj6JJOo0S5N3y4ClAsgfePeiwnw7k7ELQD4v4ig6GdYw6RMUuh1X9s4T06JDDzf7aXU7qMMwrDMFlqnQ3up%2F6%2FahiFAQGr8EyP2D7uveRqRtUE0iyiPXoQg2oOwiOS%2Fdv5VnR2UaQdHKaBIJKg5qBEKexo50CgFv%2F7%2FXlqLaX0Mg3R7PMk3h4DD09HuZCORUY9eRADYSzB0b3AKiLH%2F8Ch4kV1aFRXVWrSAlFuFfpGKzVJFs3R07OJUfnP3eY9J8j3Vz%2FSP%2Foitt4avo9yoVI1sFIB06HrSsRNnnpGiKM0Ungqij0FMQ%2F76wXgP3oxdnMmwtqx5AEtfprE%2BLgR%2B%2FBVeTPU5bEMUrGQ4zhZ2gflrVYxJFGuIhLOd8xpvHwisADQhCOQPxhQNUBAjCie2k5owPJ%2BTeh3OkMCR448LFmykdj3uH11e7UMm%2Fk9DiX3bkyd82NFTF1OrCCCGWULg33SNIp5eW1GhG2bsAxV3iCfwHMGI7lgpusMOvV3tMGOqUByFffhAF%2Bii%2BDs4KO56HtiyPh7PHlBbGwi5Nj0tg7oJKDBzinnEbKtXe5hO5C6LmAeywHTXugF2W%2F2Pv6XYfa2nwSZDRjYUj4nRXi8rd2OAQSTM9CbuUHUtwJ8waIzzGouc5Gp7imi3T3R2%2B0%2BxW4TLCqDo1WxKyBflIY1LqsSAxCYCV6WQbw3caGbtd3jjnXQZRBSAneUpaFDX9%2Boe%2BvZMDyxFD3&X-Amz-Signature=77315f3e7784bd6c0ad2c7d436955a0560155f6dc85726fc2f89843372ae8d1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
