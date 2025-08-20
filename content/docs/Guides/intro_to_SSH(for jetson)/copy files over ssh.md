---
sys:
  pageId: "253da3bc-6297-80ee-aed8-fc3246b5a66e"
  createdTime: "2025-08-18T10:10:00.000Z"
  lastEditedTime: "2025-08-20T08:39:00.000Z"
  propFilepath: "docs/Guides/intro_to_SSH(for jetson)/copy files over ssh.md"
title: "copy files over ssh"
date: "2025-08-20T08:39:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 192
toc: false
icon: ""
---

If you want to send files from your laptop to the computer you ssh into run the `scp` (Secure Copy) command:

```bash
scp <ip>:<from> <to>
# or 
scp <from> <ip>:<to>
```

### example:

```bash
# currently on ssh sever
# my computer -> ssh server
scp john@192.168.69.69:~/file.txt ~/my_folder/
```

```bash
# currently on my computer
# ssh server -> my computer
scp admin@192.168.69.420:~/file.txt ~/my_folder/
```

{{% alert context=”info" %}}

Note: it has the same flags as `cp` so you are able to copy folders with the `-r` flag

{{% /alert %}}

```bash
# currently on my computer
# ssh server -> my computer
scp -r admin@192.168.69.420:~/my_cool_folder ~/my_folder/
```
