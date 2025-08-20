---
sys:
  pageId: "254da3bc-6297-8039-ba5b-eb0b130cbedc"
  createdTime: "2025-08-19T10:02:00.000Z"
  lastEditedTime: "2025-08-20T08:06:00.000Z"
  propFilepath: "docs/Guides/intro_to_Docker(for Robomasters)/Passing a window though Docker + SSH.md"
title: "Passing a window though Docker + SSH"
date: "2025-08-20T08:06:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 205
toc: false
icon: ""
---

[Original referenced guide](https://blog.yadutaf.fr/2017/09/10/running-a-graphical-app-in-a-docker-container-on-a-remote-server/)

---

```bash
#Get the Display number from the DISPLAY variable
DISPLAY_NUMBER=$(echo $DISPLAY | cut -d. -f1 | cut -d: -f2)

# Proxy between the TCP and the Unix domain world, in the background
socat UNIX-LISTEN:/tmp/.X11-unix/X${DISPLAY_NUMBER},fork TCP4:localhost:60${DISPLAY_NUMBER} &

# Expose the "new" display address
export DISPLAY=:$(echo $DISPLAY | cut -d. -f1 | cut -d: -f2)

sudo docker run -it \
	-e DISPLAY=${DISPLAY} \
	-v /tmp/.X11-unix:/tmp/.X11-unix \
	-v ${HOME}/.Xauthority:/root/.Xauthority \
	--privileged \
	--network host \
	my-image bash
	
```

# Common Errors

If you get `xauth: (argv):1: bad "add" command line` (I got this when running through VSCode), you are probably using an environment that doesn’t support x-server displays. Close it and rerun on a WSL terminal or something. 

If you get some other xcb/x-server errors, change `CONTAINER_DISPLAY="0"` to any other number. Something is up with the DISPLAY environment variable.

---

### Accumulated settings

```bash
#Get the Display number from the DISPLAY variable
DISPLAY_NUMBER=$(echo $DISPLAY | cut -d. -f1 | cut -d: -f2)

# Proxy between the TCP and the Unix domain world, in the background
socat UNIX-LISTEN:/tmp/.X11-unix/X${DISPLAY_NUMBER},fork TCP4:localhost:60${DISPLAY_NUMBER} &

# Expose the "new" display address
export DISPLAY=:$(echo $DISPLAY | cut -d. -f1 | cut -d: -f2)

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
	-e DISPLAY=${DISPLAY} \
	-v /tmp/.X11-unix:/tmp/.X11-unix \
	-v ${HOME}/.Xauthority:/root/.Xauthority \
	--privileged \
	--network host \
	-v /home/my_home/my_folder:/my_folder \
	my-image bash
	
```
