---
sys:
  pageId: "254da3bc-6297-80bf-b13f-ec71333c2395"
  createdTime: "2025-08-19T10:00:00.000Z"
  lastEditedTime: "2025-08-20T08:06:00.000Z"
  propFilepath: "docs/Guides/intro_to_Docker(for Robomasters)/Passing realsense into Docker.md"
title: "Passing realsense into Docker"
date: "2025-08-20T08:06:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 203
toc: false
icon: ""
---

similar to previous USB guide with the camera just unplug, run, plug, run this command

```bash
ls /dev/tty*
```

the different files that show up and disappear are the files needed for the realsense

Here was the final list that worked for me:

```bash
sudo docker run -it \
	--device /dev/HID-SENSOR-2000e1.4.auto:/dev/HID-SENSOR-2000e1.4.auto \
	--device /dev/media1:/dev/media1 \
	--device /dev/media2:/dev/media2 \
	--device /dev/v4l:/dev/v4l \
	--device /dev/video0:/dev/video0 \
	--device /dev/video1:/dev/video1 \
	--device /dev/video2:/dev/video2 \
	--device /dev/video3:/dev/video3 \
	--device /dev/video4:/dev/video4 \
	--device /dev/video5:/dev/video5 \
	--device-cgroup-rule "c 81:* rmw" \
	--device-cgroup-rule "c 189:* rmw" \
	my-image bash
```

At this point it is recommended to create a bash file to store the command for docker

---

### Accumulated settings

```bash
sudo docker run -it \
	--device /dev/HID-SENSOR-2000e1.4.auto:/dev/HID-SENSOR-2000e1.4.auto \
	--device /dev/media1:/dev/media1 \
	--device /dev/media2:/dev/media2 \
	--device /dev/v4l:/dev/v4l \
	--device /dev/video0:/dev/video0 \
	--device /dev/video1:/dev/video1 \
	--device /dev/video2:/dev/video2 \
	--device /dev/video3:/dev/video3 \
	--device /dev/video4:/dev/video4 \
	--device /dev/video5:/dev/video5 \
	--device-cgroup-rule "c 81:* rmw" \
	--device-cgroup-rule "c 189:* rmw" \
	--device /dev/ttyUSB0 \
	--device /dev/ttyUSB1 \
	my-image bash
```
