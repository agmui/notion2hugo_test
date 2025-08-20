---
sys:
  pageId: "254da3bc-6297-801b-b31d-e2fc2bbf1ff6"
  createdTime: "2025-08-19T10:11:00.000Z"
  lastEditedTime: "2025-08-20T08:06:00.000Z"
  propFilepath: "docs/Guides/intro_to_Docker(for Robomasters)/More Docker settings.md"
title: "More Docker settings"
date: "2025-08-20T08:06:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 206
toc: false
icon: ""
---

Here are some extra flags for our Docker setup

This is a jetson specific flag and enables GPU use in the container

```bash
sudo docker run \
	--runtime nvidia \
	...
```

allows certain root privileges in the container. [stack overflow explanation](https://stackoverflow.com/questions/75296630/what-does-the-docker-exec-privileged-flag-do)

```bash
sudo docker run \
	--privileged \
	...
```

tricks the Docker container to look like they are running on the host itself. [stack overflow explanation](https://stackoverflow.com/questions/43316376/what-does-network-host-option-in-docker-command-really-do)

```bash
sudo docker run \
	--network host \
	...
```

deletes the container after it finishes running. This is more for how limited space is on the jetson.

```bash
sudo docker run \
	--rm \
	...
```

### final settings configuration

```bash
#Get the Display number from the DISPLAY variable
DISPLAY_NUMBER=$(echo $DISPLAY | cut -d. -f1 | cut -d: -f2)

# Proxy between the TCP and the Unix domain world, in the background
socat UNIX-LISTEN:/tmp/.X11-unix/X${DISPLAY_NUMBER},fork TCP4:localhost:60${DISPLAY_NUMBER} &

# Expose the "new" display address
export DISPLAY=:$(echo $DISPLAY | cut -d. -f1 | cut -d: -f2)

sudo docker run --rm -it \
	--runtime nvidia \
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
	-e DISPLAY=${DISPLAY} \
	-v /tmp/.X11-unix:/tmp/.X11-unix \
	-v ${HOME}/.Xauthority:/root/.Xauthority \
	--privileged \
	--network host \
	-v /home/my_home/my_folder:/my_folder \
	my-image bash 
	
```
