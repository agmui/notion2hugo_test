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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643CF6TE3%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmTclNYi9D%2FFvRqtctwJvfdZqOEBR0youc4X1tUhwZhAIgc1EdBJcEyxpoea0irNAukU20RYhJJqYzXXQ8wQm8trIq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDJpyYOPDz9aN1iFPRCrcA%2By0rrkJQubFY1jWBeU5DMsCCfIZCjTUIF37zks0XelD0GftKbdkvddsh%2B4qwXPH6UWuDQrTdt%2BoqBv%2ByFGVpFcdWvZtVFx%2BGE%2F4sPvJ9eODpL%2FKswXCdsA3kKXT1BNwWA2OIpYalQrowPxdEEI5orjlikAcxV5KMeELKlGH8fxQ5TGs7qYsIKxOK6yRY0Cgi8FQn%2FXjdiOMkpr2bmNprtqqlKC0NWANxwKYF%2F3%2F1rSxwslceg%2FXnG%2B25z%2BiyF4OiGIio%2BsZc9dANSZPO1WbYntyy8xIB4uFPFBXvCwgFP6wTCDz%2BqGL9%2B%2ByQTRCHuPTnAe%2Fvy%2B%2Fh%2Bv%2BanWya9wwtfSR1S9ClcAm6QsGDvmNxv2fwYzuWUuRQUrOxMCpgjqStR%2F5VRyWdj%2FZO7s2UCl2u5bntNedvsswH%2FyBwwBi7IwjBV6Mzfc93yXslu61eszGWd8LPlqOQv932zTbyj%2BOrVn7ZoU9oRzitf%2FPuXb9s6i%2F%2F5dqX%2BV0xdfh9HIDkfV3O%2FBQM0cCrnQ5aZQFm1IcffEDu8j6OH1gevSw3BFEuD99IEAkSQQehJq2HUW14ixc03V2EEvEgGJBUachVaGBrvNEXCbOYbogVhjnkVwnufURSJiQdukrDCfRGlpCMPXJgsoGOqUB5SQcxir4UXEJY%2BqcVZ%2BAuct9wKl2BrBifkk8v3cStNk1wr%2BBd4Me5d5iZt5SIetp8sYFE6kOeOJ7gyE7CaW2%2Be1f5Gqn9LuCdMTf3XGHtULdt0y5oTAn4VHz4FR%2ByILjB0%2FtRLD9VI1bPK4Quh%2B9AJKpdAk%2BM1qbmU%2BuaTrrtyv0GNsRrn%2FSMs380dFzcoaVhgAxOPRhJwiO%2FEMasSTuppND9C50&X-Amz-Signature=1159a3ec4b5f4938c8ccbdbd37986ee956459fa3c042102c6c567d280575a2a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
