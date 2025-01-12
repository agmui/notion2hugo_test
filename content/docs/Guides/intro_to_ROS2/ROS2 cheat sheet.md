---
sys:
  pageId: "179da3bc-6297-80f1-8809-cb37d88ed0cd"
  createdTime: "2025-01-12T14:56:00.000Z"
  lastEditedTime: "2025-01-12T17:58:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS2 cheat sheet.md"
title: "ROS2 cheat sheet"
date: "2025-01-12T17:58:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
toc: false
icon: ""
---

```bash
ros2 launch <package_name> <launchfile>
```

# WSL specific

## usb connection (open cmd in admin mode)

```powershell
usbipd list
usbipd attach --wsl --busid <busid>
```
