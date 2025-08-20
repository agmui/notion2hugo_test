---
sys:
  pageId: "253da3bc-6297-80cd-926e-da3d4d7998b8"
  createdTime: "2025-08-18T10:34:00.000Z"
  lastEditedTime: "2025-08-19T10:27:00.000Z"
  propFilepath: "docs/Guides/intro_to_SSH(for jetson)/SSH to jetson using Ethernet cable.md"
title: "SSH to jetson using Ethernet cable"
date: "2025-08-19T10:27:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 195
toc: false
icon: ""
---

If you don’t have a wifi for your jetson and laptop to connect to you can connect an Ethernet cabel between your laptop and jetson.

```bash
# on jetson
sudo ifconfig eth0 192.168.1.100 netmask 255.255.255.0 up

# on laptop
sudo ifconfig <ethernet port (use ifconfig)> 192.168.1.1 netmask 255.255.255.0 up

# on jetson check connection with
ping 192.168.1.1
# on laptop check connection with
ping 192.168.1.100

# on laptop
ssh <username>@192.168.1.100
```
