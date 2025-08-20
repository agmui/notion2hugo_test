---
sys:
  pageId: "254da3bc-6297-80e1-b917-cf3ad8fe0ef7"
  createdTime: "2025-08-19T10:09:00.000Z"
  lastEditedTime: "2025-08-20T08:06:00.000Z"
  propFilepath: "docs/Guides/intro_to_Docker(for Robomasters)/Mounting folders.md"
title: "Mounting folders"
date: "2025-08-20T08:06:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 204
toc: false
icon: ""
---

[Official docker guide on volumes](https://docs.docker.com/engine/storage/volumes/)

An oversimplified explanation of docker volumes is that you can share folders in your computer in docker

Here we are mounting `/home/my_home/my_folder` as `/my_folder` in Docker

```bash
sudo docker run -it \
	-v /home/my_home/my_folder:/my_folder \
	my-image bash
	
```

This is nice say for example `/my_folder` contained a git repo of the sentry code. We are able to edit it and then simply run the Docker container. Since we are mounting a volume it gets saved. 

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
	-v /home/my_home/my_folder:/my_folder \
	my-image bash
	
```
