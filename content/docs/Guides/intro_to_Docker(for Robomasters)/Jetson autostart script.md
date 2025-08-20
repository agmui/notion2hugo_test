---
sys:
  pageId: "254da3bc-6297-8083-95e8-e6063d985a65"
  createdTime: "2025-08-19T22:45:00.000Z"
  lastEditedTime: "2025-08-20T08:06:00.000Z"
  propFilepath: "docs/Guides/intro_to_Docker(for Robomasters)/Jetson autostart script.md"
title: "Jetson autostart script"
date: "2025-08-20T08:06:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 207
toc: false
icon: ""
---

---

### systemctl

`systemctl` is a tool for starting and stopping tasks on linux. We are able to tell it to start our Docker container on boot. 

follow this [forum post](https://forums.developer.nvidia.com/t/how-to-run-a-script-on-boot/108411/4) to set up the autostart script

Then here are some useful commands for interacting with the service once it has started.

```bash
# to see log of the robot service
journalctl -u robot.service -b

# to see live printouts of the robot service
journalctl -u robot.service -b -f

# see status of robot service
sudo systemctl status robot

# to restart robot service
sudo systemctl restart robot

# to stop robot service NOTE: must enable cmd below to enable boot 
sudo systemctl stop robot

# to enable boot robot service
sudo systemctl enable robot
# to disable boot robot service
sudo systemctl disable robot

# edit configs
sudo vim /lib/systemd/system/robot.service 

# apply configs
sudo systemctl daemon-reload
sudo systemctl start robot
```

{{% alert context="info" %}}

There are also ways to get print output and stderr in systemctl if you edit the config file.

{{% /alert %}}

## Killing startup process

```bash
sudo systemctl stop robot
sudo su root
```

And then as root:

```bash
htop
```

Type `/main` (to find python3 main.py), then hit **k**, **9**, **Enter** to kill the process. Press **q** to quit and **Ctrl+D** to log out of root.

---

### Startup High level overview:

Boot → `systemd` → (bash script with docker settings) → Dockerfile → `ros2 launch ...`
