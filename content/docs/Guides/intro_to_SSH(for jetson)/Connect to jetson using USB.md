---
sys:
  pageId: "253da3bc-6297-80d0-8852-ef0edecfa1c7"
  createdTime: "2025-08-18T10:25:00.000Z"
  lastEditedTime: "2025-08-19T10:27:00.000Z"
  propFilepath: "docs/Guides/intro_to_SSH(for jetson)/Connect to jetson using USB.md"
title: "Connect to jetson using USB"
date: "2025-08-19T10:27:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 193
toc: false
icon: ""
---

You are also able connect to the jetson via the USB micro or USB type-c port depending on your jetson model.

Connect your laptop to the jetson and you should be able to ssh with this:

```bash
ssh <username>@192.168.55.1
```

If nothing connects it may take a while so you can check if the jetson shows up as a device with

```bash
ifconfig
```

---

## connecting via serial

If ssh though usb does not work then you are able to connect to the jetson with a program like `screen` or `minicom` for linux and PuTTY for windows:

run this first command to see if the jetson is connected:

```bash
ls /dev/tty*
```

Then run one of the following commands to connect:

```bash
screen /dev/ttyUSB0 115200
# or
minicom -b 115200 -o -D /dev/ttyUSB0
```
