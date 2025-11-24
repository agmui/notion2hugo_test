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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNXEDFCM%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZTPA77UffdGKyIvYAk40kL4Hxn6aQlVutbyF8zVyPcAIgcZSV%2BQC1ZrmjoUdn%2FipNBE1JIjjIva9AReLIF7l6k%2FQq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGOXl6GFUDxxJbewxyrcA5ScOViA6kjYyNOWqlu491QZwBc5unXJTjbmENsikQoRhJkPcXbREo5LPUqzGZ1qpbmhxZJHMAincgEbmpuRTvuMeLPtV1UwXA10eeLemfjwBGa3rcmPNJAXS3Y2SbI%2FtAjG0MQTLovGWUyBMypnBRoj36LqWBJd2d2%2F%2BKBUUO1kQRn7NAhRKxVqmAKF6ohPkW6WSEuJEGf%2BPAeqOts%2FxR1kRvPyRUz6kCenigf%2Fo5tWJbTsISTGweRDfIk6OhjUbTDaX9ouJj4A1PeOFdt78HYBv5ccBNslXsjFdOrIl%2Ft8PEHZXSGdJFw%2FhBP55vj0%2BqvvoJhqe%2B2ioxCDego%2BjaiUIaJ0cBYBTEqBZQYM2mhwErgowKtlADmebwehf5NW2njwIA9IIyPz%2Blrdgbna6dP0bFX0Tsgw2SJfl3K3vdUT0JW9wbcGOlnW70fnay2NYuZFKl5MQy8cMeeGXOCnLlRkGh8IwgEc%2BiGQdiY5C9yyH%2BFOUOskmN%2FRRiKl65Fm3lishgm%2BJnyp4fQRkVCNeM87%2BYDirUQD6KTTbbs1DKJbHes77eg9vcA%2F4OlPsudWHoAoFojQZmzo7awoU%2FVE6JfufSm4j7vbS3GmVhkO6KiMp8QMEI8N8J%2FD5HUjMPnbjskGOqUBnhwOKSMKwfYk0qXcI2CtPvb5tdyJmFVec0%2FPgJINDvivZ6ltbNfeqv705g2J5aTn9hEN80fbsQK7jiAj%2Bz7hkTTz1GTacxqJcOWb8iqGpZ8uSBIibKjvXAhXFhZyOJxjnI%2Fc5%2FOUVZKQbNsEnwbBzuigykD1cvyvAgAcKFxk2GtDxMa4T0OLJoU4P26HXcTa890pSRVwXke%2BZVrhnDzUuLNGK%2F%2BW&X-Amz-Signature=dd6e62bced241c9b6f9ce017b2ffbd48aa36c90f1a43fe51ce599c3d8a618aae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
