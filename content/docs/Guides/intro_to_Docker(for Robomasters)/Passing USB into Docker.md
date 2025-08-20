---
sys:
  pageId: "254da3bc-6297-80c7-acd6-d5f804cb19cd"
  createdTime: "2025-08-19T09:50:00.000Z"
  lastEditedTime: "2025-08-20T08:06:00.000Z"
  propFilepath: "docs/Guides/intro_to_Docker(for Robomasters)/Passing USB into Docker.md"
title: "Passing USB into Docker"
date: "2025-08-20T08:06:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 202
toc: false
icon: ""
---

[stack overflow explanation ](https://stackoverflow.com/questions/24225647/docker-a-way-to-give-access-to-a-host-usb-or-serial-device)

---

To let Docker use USB we pass them in using the `--device` flag

Here is an example with our USB to UART adapter and Lidar plugged in

```bash
sudo docker run --rm \
	--device /dev/ttyUSB0 \
	--device /dev/ttyUSB1 \
	my-image bash
```

{{% alert context="info" %}}

On linux devices show up in the `/dev` folder as files.

So in our case the USB devices show up as `/dev/ttyUSB0`

{{% /alert %}}

To find which files in `/dev` are the correct USB ports I just plug run the command below then unplug and run the command again.

```bash
ls /dev/tty*
```

the difference is the file that represents the USB port
