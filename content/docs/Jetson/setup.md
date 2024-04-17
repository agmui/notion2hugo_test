---
sys:
  pageId: "bfdd522e-b33f-47e6-945c-69ed5322e742"
  createdTime: "2024-04-16T17:21:00.000Z"
  lastEditedTime: "2024-04-17T04:40:00.000Z"
  propFilepath: "docs/Jetson/setup.md"
title: "setup"
date: "2024-04-17T00:00:00Z"
description: ""
tags:
  - "Onboarding"
categories:
  - "test"
author: "Overridden author"
draft: false
section: "asdf"
toc: false
icon: ""
---

make sure you are installing everything with sudo

`sudo pip install pyserial`

uart.py

```python
import serial
#ser = serial.Serial("/dev/ttyAMC0",115200,timeout =1)ser = serial.Serial("/dev/ttyTHS0",115200,timeout =1)
try:
    ser.open()
    print("port has been opened")
except Exception:
    print("err")
    exit()
while(True):
    ser.write("pilk\n\0".encode())
    print("send pilk")
```

to run: `sudo python3 uart.py`
